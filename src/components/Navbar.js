import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light bg-body-tertiary nav-div">
      <a className="navbar-brand" href="#">
          <img
          src="/ondc_registered_logo.svg"
          width={200}
          height={50}
          className="d-inline-block align-top"
          alt=""
          />
      </a>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to="/logout" className="nav-link nav-item logout-btn"  href="#">
            Logout
          </NavLink>
        </li>
      </ul>
      
    </nav>

  )
}

export default Navbar