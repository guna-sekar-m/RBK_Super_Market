import React from "react";
import { NavLink } from "react-router-dom";
import * as moment from 'moment'
const Orders=({ordersdata})=>{

    return(
     <div className="container">
         <div className="row">
            <div className="col-md-12">
              <h4 className="mb-3">Your Orders</h4>
            </div>
         </div>
        <div className="row">

            <div className="col-md-12">
              {ordersdata.map(item=> <NavLink className="card mb-3 text-decoration-none" to={`/orderdetails/${item.order_id}`}>
                  <div className="card-body d-flex justify-content-between gap-5 flex-wrap align-items-center">

                    <h6 className="card-title">#{item.order_id} <br/> <span className="text-muted fs-6">{item.order_date}</span></h6>
                    <h6 className="card-title">₹{item.total_amount + item.shipping_cost}</h6>
                    {(() => {
                       switch (item.order_status) {
                        case 'Order Delivered':
                           return <h6 className="mb-3 px-2 py-1 fw-semibold text-success-emphasis bg-success-subtle border border-success-subtle rounded-2"><i className="fa-solid fa-truck-ramp-box"></i> {item.order_status}</h6>
                        case 'Order Processing':
                           return <h6 className=" mb-3 px-2 py-1 fw-semibold text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-2"><i className="fa-regular fa-clock"></i> {item.order_status}</h6>  
                        case 'Order Placed':
                           return <h6 className=" mb-3 px-2 py-1 fw-semibold text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-2"><i class="fa-solid fa-check"></i> {item.order_status}</h6>
                        case 'Order Accepted':
                              return <h6 className="mb-3 px-2 py-1 fw-semibold text-success-emphasis bg-success-subtle border border-success-subtle rounded-2"><i className="fa-solid fa-check"></i> {item.order_status}</h6>        
                        case 'Order Declined':
                           return <h6 className="mb-3 px-2 py-1 fw-semibold text-danger-emphasis bg-danger-subtle border border-danger-subtle rounded-2"><i class="fa-solid fa-xmark"></i> {item.order_status}</h6>        
                        default:
                           return <h6 className=" mb-3 px-2 py-1 fw-semibold text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-2">{item.order_status}</h6>
                        }
                   })()}
                    
                 </div>
               </NavLink>
              )}
            </div>
            <div className="col-md-12 d-none">
               <div className="card mb-3">
                  <div className="card-body d-flex justify-content-between gap-5 flex-wrap align-items-center">
                    <h6 className="card-title">#0002</h6>
                    <h6 className="card-title">₹250</h6>
                    <h6 className=" mb-3 px-2 py-1 fw-semibold text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-2"><i className="fa-regular fa-clock"></i> Processing</h6>
                 </div>
               </div>
            </div>
            <div className="col-md-12 d-none">
               <div className="card mb-3">
                  <div className="card-body d-flex justify-content-between gap-5 flex-wrap align-items-center">
                    <h6 className="card-title">#0003</h6>
                    <h6 className="card-title">₹1500</h6>
                    <h6 className="mb-3 px-2 py-1 fw-semibold text-danger-emphasis bg-danger-subtle border border-danger-subtle rounded-2"><i className="fa-solid fa-xmark"></i> Cancelled</h6>
                 </div>
               </div>
            </div>
        </div>
     </div>
    )
}
export default Orders;