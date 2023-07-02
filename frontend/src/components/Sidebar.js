import React from 'react'
import { Outlet, Link, NavLink } from "react-router-dom";

const Sidebar = (props) => {
  return (
    <div className={props.className}>
      <ul className="sidenav-list">
            <li onClick={() => props.handleClick()}><NavLink to={"/register"} className="nav-list-link">Register</NavLink></li>
            <li onClick={() => props.handleClick()}><NavLink to={"/login"} className="nav-list-link">Login</NavLink></li>
            <li onClick={() => props.handleClick()}><NavLink to={"/dashboard"} className="nav-list-link">Dashboard</NavLink></li>
            <li onClick={() => props.handleClick()}><NavLink to={"/portal"} className="nav-list-link">Parent Portal</NavLink></li>
            <li onClick={() => {props.handleLogout(); props.handleClick()}}>Logout</li>
        </ul>
        
    </div>
  )
}

export default Sidebar
