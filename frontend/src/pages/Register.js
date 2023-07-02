import React from 'react'
import csrftoken from '../components/CSRFToken';

const Register = (props) => {
  // Init State for Registration Data

  const[formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    parentEmail: "",
    parentPassword: "",
    parentConfirm: ""
  })

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

    if(formData.parentPassword !== formData.parentConfirm) {
      alert("Passwords Do Not Match!")
    } else {
      // FETCH POST
      fetch('http://127.0.0.1:8000/api/register-parent/', {
        method: 'POST',
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          'X-CSRFToken': csrftoken,
        },
        body: JSON.stringify({
            first_name: formData.firstName,
            last_name: formData.lastName,
            email: formData.parentEmail,
            username: formData.parentEmail,
            password: formData.parentPassword
        })
      })
      // Redirect to Login Page
      props.setPageSelector("login")
    }
  }

  return (
    <div className="main-page">
    <form className="rf-form" onSubmit={handleSubmit}>
          <div className="rf-parent-input">
            <h2 className="rf-parent-heading">Sign Up</h2>
            <input 
              placeholder="First Name"
              className="rf-input rf-parent-name"
              type="text"
              id="first-name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required/>
              <input 
              placeholder="Last Name"
              className="rf-input rf-parent-name"
              type="text"
              id="last-name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required/>
            <input 
              placeholder="Email"
              className="rf-input rf-parent-email"
              type="email"
              id="parent-email"
              name="parentEmail"
              value={formData.parentEmail}
              onChange={handleChange}
              required/>
            <input 
              placeholder="Password"
              className="rf-input rf-parent-password"
              type="password"
              id="parent-password"
              name="parentPassword"
              value={formData.parentPassword}
              onChange={handleChange}
              required/>
            <input 
              placeholder="Confirm Password"
              className="rf-input rf-parent-confirm-password"
              type="password"
              name="parentConfirm"
              value={formData.parentConfirm}
              onChange={handleChange}
              required/>
            <button className='rf-submit'>Register</button>
          </div>

          {/* <div className="rf-child-input">
            <h2 className="rf-child-heading">Child Details</h2>
            <input 
              placeholder="Child Name"
              className="rf-input rf-child-name"
              type="text"
              id="child-name"
              name="childName"
              value={formData.childName}
              onChange={handleChange}/>
            <input 
              placeholder="Child Username"
              className="rf-input rf-child-username"
              type="text"
              id="child-username"
              name="childUsername"
              value={formData.childUsername}
              onChange={handleChange}/>
            <input 
              placeholder="Child Password"
              className="rf-input rf-child-password"
              type="password"
              id="child-password"
              name="childPassword"
              value={formData.childPassword}
              onChange={handleChange}/>
            <input 
              placeholder="Confirm Password"
              className="rf-input rf-child-confirm-password"
              type="password"/>
          </div> */}
      

    </form>
    </div>
  )
}

export default Register
