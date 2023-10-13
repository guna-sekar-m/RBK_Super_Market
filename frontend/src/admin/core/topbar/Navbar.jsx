import React from "react";
import { NavLink } from "react-router-dom";
const Navbar=({logout})=>{
  return(
    
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <NavLink  to={'/admin/dashboard'} className="navbar-brand me-lg-0 text-white" href="#">
          <i className="fa-solid fa-boxes-stacked fa-xl text-white"></i> <span className="fw-flod"> Vendor Dashboard</span>
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
       </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        
          <ul className="navbar-nav mb-2 mb-lg-0 gap-2">
         
            <li className="nav-item">
              <a className="nav-link header-nav-list text-white" href="#">
                <i className="fa-solid fa-expand"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link header-nav-list text-white" href="#">
                <i className="fa-regular fa-bell"></i>
              </a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="fa-regular fa-user fa-lg"></i> Profile
              </a>
              <ul className="dropdown-menu dropdown-menu-end">
              <li><NavLink to={'/admin/settings'} className="dropdown-item" href="#"><i className="fa-solid fa-gear"></i> Settings</NavLink></li>
                <li><hr class="dropdown-divider"/></li>
                <li>
                  <a className="dropdown-item" role="button" onClick={logout}>
                  <i className="fa-solid fa-right-from-bracket"></i> Sign out
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
 
  )
}
export default Navbar;