import React from 'react';
import './Footer.css';
import { NavLink } from 'react-router-dom';
import { useCart } from '../../services/Cart/CartContext';
import { useAuth } from '../../services/LoginContext/LoginContext';
const MobileFooter = ({handleOpenModal,handleCollapse}) => {
  const {cartItems}=useCart();
  const { isLoggedIn } = useAuth();
  return(

<footer className="mobile-footer py-3 mt-5">
  <div className="container">
    <div className="row">
      <div className="col-4 text-center border-end">
       
        <NavLink href="#" className="text-decoration-none text-dark" to={'/home'}><i className="fa-solid fa-house fa-l"></i> Home</NavLink>
      </div>
      <div className="col-4 text-center border-end">
       
        {!isLoggedIn?
         
          <a
          className="text-decoration-none text-dark"
            role="button"
            onClick={() => {handleOpenModal('accountform');handleCollapse()}}
          >
            <i class="fa-solid fa-user"></i> Account
          </a>
       
          : <NavLink className="text-decoration-none text-dark" role="button" to={'/account'} onClick={handleCollapse}><i class="fa-solid fa-user"></i> Account</NavLink>
          }
      </div>
      <div className="col-4 text-center border-end">
   
        <a href="#" className="text-decoration-none text-dark position-relative" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i class="fa-solid fa-cart-shopping"></i> Cart 
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        {cartItems&&cartItems!=0?cartItems.length:false}
   
          </span>
        
        </a>
      </div>
    </div>
  </div>
</footer>

)};



export default MobileFooter;