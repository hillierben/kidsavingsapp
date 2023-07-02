import React from 'react'
import { Outlet, Link, NavLink } from "react-router-dom";

const MenuListData = (props) => {
  return (
    <div>
        <ul className={props.className}>
            <li className="nav-list-link"><NavLink to={"/register"} className="nav-list-link">Register</NavLink></li>
            <li className="nav-list-link"><NavLink to={"/login"} className="nav-list-link">Login</NavLink></li>
            <li className="nav-list-link"><NavLink to={"/dashboard"} className="nav-list-link">Dashboard</NavLink></li>
            <li className="nav-list-link"><NavLink to={"/portal"} className="nav-list-link">Parent Portal</NavLink></li>
            <li onClick={() => props.handleLogout()} className="nav-list-link">Logout</li>
        </ul>
        
    </div>
  )
}

export default MenuListData

