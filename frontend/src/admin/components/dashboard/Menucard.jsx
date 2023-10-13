import React from "react";
import { NavLink } from "react-router-dom";
const Menucard=()=>{
    return(
        <section>
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-12">
                
            </div>
        </div>
        <div className="row mt-3">
        <div className="col-xl-3 col-sm-6 col-12 d-flex">
                <NavLink to={'/admin/category'} className="card bg-comman card1 w-100 mb-3 text-decoration-none">
                    <div className="card-body">
                        <div className="db-widgets d-flex justify-content-between align-items-center">
                            <div className="db-info">
                                <h6>Total Categories</h6>
                                <h3>200+</h3>
                            </div>
                            <div className="db-icon">
                                <i className="fa-solid fa-list fa-lg"></i>
     
                            </div>
                        </div>
                    </div>
                </NavLink>
            </div>
            <div className="col-xl-3 col-sm-6 col-12 d-flex">
                <NavLink to={'/admin/products'} className="card bg-comman card1 w-100 mb-3 text-decoration-none">
                    <div className="card-body">
                        <div className="db-widgets d-flex justify-content-between align-items-center">
                            <div className="db-info">
                                <h6>Total Products</h6>
                                <h3>2400+</h3>
                            </div>
                            <div className="db-icon">
                                <i className="fa-solid fa-cube fa-lg"></i>
            
                            </div>
                        </div>
                    </div>
                </NavLink>
            </div>
            <div className="col-xl-3 col-sm-6 col-12 d-flex">
                <NavLink to={'/admin/customers'} className="card bg-comman card1 w-100 mb-3  text-decoration-none">
                    <div className="card-body">
                        <div className="db-widgets d-flex justify-content-between align-items-center">
                            <div className="db-info">
                                <h6>Total Customers</h6>
                                <h3>40+</h3>
                            </div>
                            <div className="db-icon">
                                <i className="fa-solid fa-user-group fa-lg"></i>
                            </div>
                        </div>
                    </div>
                </NavLink>
            </div>
            <div className="col-xl-3 col-sm-6 col-12 d-flex">
            <NavLink to={'/admin/orders'} className="card bg-comman card1 w-100 mb-3  text-decoration-none">
                    <div className="card-body">
                        <div className="db-widgets d-flex justify-content-between align-items-center">
                            <div className="db-info">
                                <h6>Total Orders</h6>
                                <h3>20+</h3>
                            </div>
                            <div className="db-icon">
                               <i className="fa-solid fa-receipt fa-lg"></i>
       
                            </div>
                        </div>
                    </div>
                </NavLink>
            </div>
          
          
        </div>
 
       
    </div>
</section>

    )
}
export default Menucard;