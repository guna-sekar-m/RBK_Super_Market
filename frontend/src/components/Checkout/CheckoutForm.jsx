import React from "react";
import { useCart } from "../../services/Cart/CartContext";
import imgpath from "../../services/folderpath/folderpath";
import { NavLink } from "react-router-dom";
const CheckoutForm=({shippingaddress,handleChange,checkoutformdata,checkout})=>{

  const {cartItems}=useCart();
  const calculateSubtotal = () => {
    let subtotal = 0;
    cartItems.forEach((item) => {
      subtotal += item.Sale_Price * item.Quantity;
    });
    return subtotal.toFixed(2);
  };
  return(
    <div className="container mb-5 pb-5">
      <div className="row mt-2 ">
        <div className="col-12">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item"><a href="#!" className='text-decoration-none text-muted'>Home</a></li>
              <li className="breadcrumb-item"><a href="#!" className='text-decoration-none text-muted'>Shop</a></li>
              <li className="breadcrumb-item active" aria-current="page">Shop Checkout</li>
            </ol>
          </nav>
        </div>
      </div>
  
     <form className="row" onSubmit={(e)=>checkout(e,cartItems,calculateSubtotal())}>


        <div className="col-12">
          <div>
            <div className="mb-5">
              <h1 className="fw-bold mb-0">Checkout</h1>
             
            </div>
          </div>
        </div>
    
         <div className="col-md-12 col-lg-7 order-2 order-lg-1">
         <div className="accordion accordion-flush" id="accordionFlushExample">
              
              <div className="accordion-item py-4">

                <div className="d-flex justify-content-between align-items-center">
          
                  <a href="#" className="fs-5 text-inherit h4 collapsed" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    <i className="fa-solid fa-location-dot me-2 text-muted"></i>Add delivery address
                  </a>
                  <NavLink href="#" className="btn btn-outline-primary" to={'/account'}>Add a
                new address to your account</NavLink>
                  
                </div>
                <div id="flush-collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionFlushExample" >
                  <div className="mt-5">
                    <div className="row">
                    {shippingaddress.map((data, index) => ( <div className="col-lg-6 col-12 mb-4" key={index}>
                  
                        <div className="card card-body p-6 ">
                          <div className="form-check mb-4">
                            <input className="form-check-input" type="radio" name="Address" id="homeRadio"  onChange={(e) => {
    handleChange({
      target: {
        name: e.target.name,
        value: data,
      },
    });
  }}
                             />
                            <label className="form-check-label text-dark" for="homeRadio">
                            {data.business_name}
                            </label>
                          </div>
                  
                          <address> <strong> {data.first_name} {data.last_name}</strong><br/>
                          <i class="fa-solid fa-envelope"></i> {data.email}, <br/>
                      <i class="fa-solid fa-mobile"></i> {data.mobilenumber}, <br/>
                      <i class="fa-solid fa-location-dot"></i> {data.address}, <br/>
                         {data.city},{data.state},<br/>
                         {data.country},{data.postal_code}</address>
                          

                        </div>
                      </div>))}
                      <div className="mt-5 d-flex justify-content-end">
                     
                      <a href="#" className="btn btn-primary ms-2 collapsed" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseFour">Next</a>
                    </div>
                    </div>
                  </div>
                </div>

              </div>
              
             
              
              <div className="accordion-item py-4">

                <a href="#" className="text-inherit h5 collapsed" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseThree">
                  <i className="fa-regular fa-clipboard me-2 text-muted"></i>Delivery instructions
                  </a>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample" >

                  <div className="mt-5">
                    <label for="DeliveryInstructions" className="form-label sr-only">Delivery instructions</label>
                    <textarea className="form-control" id="DeliveryInstructions" rows="3" placeholder="Write delivery instructions" onChange={handleChange} value={checkoutformdata.Delivery_Instructions} name="Delivery_Instructions"></textarea>
                    <p className="form-text">Add instructions for how you want your order shopped and/or delivered</p>
                    <div className="mt-5 d-flex justify-content-end">
                      <a href="#" className="btn btn-outline-gray-400 text-muted collapsed" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseTwo">Prev</a>
                      <a href="#" className="btn btn-primary ms-2 collapsed" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseFour">Next</a>
                    </div>
                  </div>
                </div>

              </div>
              
              <div className="accordion-item py-4">

                <a href="#" className="text-inherit h5 collapsed" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseFour">
                  <i className="fa-regular fa-credit-card me-2 text-muted"></i>Payment Method
                  </a>
                <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample" >

                  <div className="mt-5">
                    <div>

                      <div className="card card-bordered shadow-none mb-2 d-none">
                        
                        <div className="card-body p-6">
                          <div className="d-flex">
                            <div className="form-check">
                              
                              <input className="form-check-input" type="radio" name="flexRadioDefault" id="paypal"/>
                              <label className="form-check-label ms-2" for="paypal">

                              </label>
                            </div>
                            <div>
                              
                              <h5 className="mb-1 h6"> Payment with Paypal</h5>
                              <p className="mb-0 small">You will be redirected to PayPal website to complete your purchase
                                securely.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                   
                      
                      <div className="card card-bordered shadow-none mb-2 d-none">
                        
                        <div className="card-body p-6">
                          
                          <div className="d-flex">
                            <div className="form-check">
                              <input className="form-check-input" type="radio" name="flexRadioDefault" id="payoneer"/>
                              <label className="form-check-label ms-2" for="payoneer">

                              </label>
                            </div>
                            <div>
                              
                              <h5 className="mb-1 h6"> Pay with Payoneer</h5>
                              <p className="mb-0 small">You will be redirected to Payoneer website to complete your
                                purchase securely.</p>
                            </div>
                          </div>
                        </div>
                      </div>
             
                      <div className="card card-bordered shadow-none">
                        <div className="card-body p-6">
                
                          <div className="d-flex">
                            <div className="form-check">
                              <input className="form-check-input" type="radio" name="flexRadioDefault" id="cashonDelivery" value="Cash on Delivery" checked="true"/>
                              <label className="form-check-label ms-2" for="cashonDelivery">

                              </label>
                            </div>
                            <div>
                       
                              <h5 className="mb-1 h6"> Cash on Delivery</h5>
                              <p className="mb-0 small">Pay with cash when your order is delivered.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    
                      <div className="mt-5 d-flex justify-content-end">
                        <a href="#" className="btn btn-outline-gray-400 text-muted collapsed" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseThree">Prev</a>
                        <button type="submit" className="btn btn-primary ms-2">Place Order</button>
                      </div>
                    </div>
                  </div>
                </div>

              </div>


            </div>

         </div>
         <div className="col-md-12 col-lg-5 order-1 order-lg-2">
         <div className="mt-4 mt-lg-0">
              <div className="card shadow-sm">
                <h5 className="px-4 py-4 bg-transparent mb-0">Order Details</h5>
                <ul className="list-group list-group-flush">
                  
                {cartItems&&cartItems.map((item,index)=>  
                <li className="list-group-item px-4 py-3" key={index}>
                    <div className="row align-items-center">
                      <div className="col-2 col-md-2">
                        <img src={item.Product_Img?`${imgpath()}/public/${item.Product_Img}`:"empty.jpg"} alt="Ecommerce" className="img-fluid"/></div>
                      <div className="col-5 col-md-5">
                        <h6 className="mb-0">{item.Product_Name}</h6>
                        <span><small className="text-muted">₹{item.Sale_Price}</small></span>

                      </div>
                      <div className="col-2 col-md-2 text-center text-muted">
                        <span>{item.Quantity}</span>

                      </div>
                      <div className="col-3 text-lg-end text-start text-md-end col-md-3">
                        <span className="fw-bold">₹{item.Sale_Price * item.Quantity}</span>

                      </div>
                    </div>

                  </li>)}
                  
                 

                  
                  <li className="list-group-item px-4 py-3">
                    <div className="d-flex align-items-center justify-content-between   mb-2">
                      <div>
                        Item Subtotal

                      </div>
                      <div className="fw-bold">
                      ₹{calculateSubtotal()}

                      </div>

                    </div>
                    <div className="d-flex align-items-center justify-content-between  ">
                      <div>
                        Shipping Cost <i className="feather-icon icon-info text-muted" data-bs-toggle="tooltip" aria-label="Default tooltip" data-bs-original-title="Default tooltip"></i>

                      </div>
                      <div className="fw-bold">
                        ₹{calculateSubtotal()>=3000?0:40}

                      </div>

                    </div>

                  </li>
                  <li className="list-group-item px-4 py-3">
                    <div className="d-flex align-items-center justify-content-between fw-bold">
                      <div>
                        Subtotal
                      </div>
                      <div>
                      ₹{calculateSubtotal()>=3000?(calculateSubtotal()*1)+0:(calculateSubtotal()*1)+40}


                      </div>

                    </div>


                  </li>

                </ul>

              </div>


            </div>
         </div>
    </form>

    </div>
   
  )
}
export default CheckoutForm;