import React from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "../../services/Cart/CartContext";
import { useAuth } from "../../services/LoginContext/LoginContext";
import imgpath from "../../services/folderpath/folderpath";
const Cartview=({handleCheckoutClick,closeoffcanvas})=>{
  const { cartItems,handleUpdateCartItem, handleRemoveFromCart } = useCart();
  const { isLoggedIn } = useAuth();
    return(
        <div className="">
      <div className="alert alert-danger p-2" role="alert">
       {isLoggedIn? "Start Checkout now":"Login to Checkout!"}
      </div>
      <ul className="list-group list-group-flush">
        
        <li className="list-group-item py-3 ps-0 border-top">
          
       { cartItems &&cartItems.map((item, index)=> <div className="row align-items-center">

            <div className="col-12 col-md-7 col-lg-7 mb-2">
              <div className="d-flex">
              <img src={item.Product_Img?`${imgpath()}/public/${item.Product_Img}`:"empty.jpg"} alt="Ecommerce" className="icon-shape icon-xxl"/>
                <div className="ms-3">
              
              <a href="#!" className="text-decoration-none text-inherit text-dark">
                <h6 className="mb-0 fs-7">{item.Product_Name}</h6>
              </a>
              <span className="fw-bold text-center">₹{item.Sale_Price}</span>
            
              <div className="mt-2 small"> <a href="#!" className="text-decoration-none text-inherit"  onClick={() => handleRemoveFromCart(index)}> <span className="me-1 align-text-bottom">
              <i className="fa-solid fa-trash-can text-danger"></i></span><span className="text-muted">Remove</span></a></div>
                  </div>
                </div>
            </div>
        
            <div className="col-12 col-md-3 col-lg-3">
              
              <div className="input-group mt-2 mt-lg-0">
                
                <input type="button" value="-" className="button-minus  btn  btn-sm" onClick={() => handleUpdateCartItem(index, item.Quantity - 1)}/>
                
                <input type="number" step="1" max="10" value={item.Quantity} name="Quantity" className="quantity-field form-control w-30"/>
                <input type="button" value="+" className="button-plus btn btn-sm " onClick={() => handleUpdateCartItem(index, item.Quantity + 1)}/>
              </div>
              
            </div>
            <div className="col-12 col-md-2 col-lg-2">
               <span className="fw-bold text-center">₹{item.Sale_Price * item.Quantity}</span>
            </div>
          
           
          </div>)}

        </li>
      </ul>
      
      <div className="d-flex justify-content-between mt-4">
        <NavLink href="#!" className="btn btn-primary" to={'/shop'} onClick={()=>{handleCheckoutClick();closeoffcanvas()}} >Continue Shopping</NavLink>
        {cartItems&&cartItems.length>0&&(<NavLink  className="btn btn-dark"  to={'/checkout'} onClick={()=>{handleCheckoutClick();closeoffcanvas()}}> Checkout</NavLink>)}
      </div>

    </div>
    )
}
export default Cartview;