import React from 'react'
import csrftoken from '../components/CSRFToken';
import { Link, NavLink, Navigate, useNavigate } from 'react-router-dom';
import ParentPortal from './ParentPortal';
import { useContext } from 'react';
import TokenContext from '../contexts/Token';

const Login = (props) => {
  const[formData, setFormData] = React.useState({
    email: "",
    password: "",
  })
  const navigate = useNavigate();
  const{token, setToken, user, setUser} = useContext(TokenContext);

  // Update registerData whenever form data changes
  function handleChange(event) {
    const {name, value} = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }))
  }

  function handleSubmit(event) {
    event.preventDefault();
    setToken(csrftoken)
    fetch('http://127.0.0.1:8000/api/login/', {
      method: 'POST',
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        'X-CSRFToken': csrftoken,
      },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password
      })
    })
    .then(response => response.json())
    .then(data => {
      setUser(data['user']);
      navigate(data['navigate']);
    }
    )
    // return navigate("/portal")
  }

  return (
    <div className="main-page">
    <form className="login-form" onSubmit={handleSubmit}>
      <div className="login-div">
          <p>{props.loggedOut}</p>
          <h2>Login</h2>
          <input
            placeholder="Email"
            className="rf-input rf-parent-name"
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required/>
          <input
            placeholder="Password"
            className="rf-input rf-parent-name"
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required/>
          <button className='rf-submit'>Login</button>
      </div>
    </form>
    </div>
  )
}

export default Login
