import React from "react";
import { NavLink } from "react-router-dom";
const HeroContent=()=>{
  return(
 <div className="container p-2 p-lg-5 img-banner">
    <div className="row align-items-center mb-5">
      <div className="col-12 col-md-10 col-lg-6 mb-5 mb-lg-0">
       
        <span className="badge text-bg-warning">Wholesale Price</span>

        <h2 className="text-dark display-5 fw-bold mt-4">SuperMarket For Fresh Grocery </h2>
        <p className="lead">Introduced a new model for online grocery shopping
          and convenient home delivery.</p>
        <NavLink href="#!" className="btn btn-dark mt-3" tabindex="-1" to={'/shop'}><i className="fa-solid fa-bag-shopping"></i> Shop Now </NavLink>
      </div>
      <div className="col-12 col-lg-6 ">
      </div>
    </div>
   
  </div>
  )
}
export default HeroContent;