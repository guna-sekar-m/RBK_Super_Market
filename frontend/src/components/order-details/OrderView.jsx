import React from "react";
import './order-details.css';
import imgpath from "../../services/folderpath/folderpath";
const OrderView=({orderdetails,orderid,handleGeneratePdf})=>{
 return(
    <div className="container">
      <div className="row mt-2 ">
        <div className="col-12">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item"><a href="#!" className='text-decoration-none text-muted'>Home</a></li>
              <li className="breadcrumb-item"><a href="#!" className='text-decoration-none text-muted'>Account</a></li>
              <li className="breadcrumb-item"><a href="#!" className='text-decoration-none text-muted'>Orders</a></li>
              <li className="breadcrumb-item"><a href="#!" className='text-decoration-none text-muted'>{orderid}</a></li>
            </ol>
          </nav>
        </div>
      </div>
        <div className="row mt-3">
           <div className="col-md-12 mb-5">
              <div className="card shadow border-0">
              <div className="row g-0">
               <div className="col-md-4 border-end">
                 <div className="card-body">
                   <h6 className="card-title fw-semibold">Delivery Address</h6>
                   <p className="card-text">{orderdetails['ordersmaster'][0].shipping_name}<br/>{orderdetails['ordersmaster'][0].shipping_address}</p>
                   <p className="card-text"><b className="fw-semibold">Email</b> {orderdetails['ordersmaster'][0].shipping_email}<br/><b className="fw-semibold">Mobile number</b> {orderdetails['ordersmaster'][0].shipping_mobile_number}</p>
                 </div>
               </div>
               <div className="col-md-4 border-end">
               <div className="card-body">
                  <p className="card-text"><b className="fw-semibold">Order ID</b> {orderdetails['ordersmaster'][0].order_id}
                  <br/><b className="fw-semibold">Order Date</b> {orderdetails['ordersmaster'][0].order_date}
                  <br/><b className="fw-semibold">Payment Mode</b> { orderdetails['ordersmaster'][0].payment_mode}
                  <br/><b className="fw-semibold">Shipping Cost</b> ₹{ orderdetails['ordersmaster'][0].shipping_cost}
            
                  </p>
                  <h4 className="card-title text-center">Total Amount</h4>
                  <h4 className="card-title text-center">₹{orderdetails['ordersmaster'][0].total_amount + orderdetails['ordersmaster'][0].shipping_cost}</h4>
               </div>
             </div>
             <div className="col-md-4">
               <div className="card-body">
                  <h6 className="card-title">Download Invoice</h6>
                  <button className="btn btn-outline-primary" onClick={handleGeneratePdf}><i className="fa-solid fa-receipt"></i> Download Invoice</button>
               </div>
             </div>
            </div>
            </div>
           </div>
           <div className="col-md-12">
              <div className="card shadow border-0">
                 <div className="card-body">
                    <h5 className="card-title">Order Items</h5>
                    <div className="table-responsive">
                        <table className="table table-bordered">
                            <thead>
                               <tr>
                                <th>#</th>
                                <th>Product Name</th>
                                <th>Product Image</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Total</th>
                               </tr>
                            </thead>
                            <tbody>
                            {orderdetails['orders'].map((item,index)=><tr key={index}>
                            
                                <td>{index+1}</td>
                                <td>{item.Product_Name}</td>
                                <td><img src={`${imgpath()}/public/${item.Product_Img}`} className="rounded" alt="" height="50" /></td>
                                <td>{item.Quantity}</td>
                                <td>₹{item.Sale_Price}</td>
                                <td>₹{item.Sale_Price*item.Quantity}</td>
                               </tr>
                            )}
                            </tbody>

                        </table>
                    </div>
                   
                 </div>
              </div>
           </div>   
        </div>
    </div>
 )
}
export default OrderView;