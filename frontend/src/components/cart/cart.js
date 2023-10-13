import React from 'react';
import './cart.css';
import Cartview from './Cartview';
const Cart = ({closeoffcanvas}) =>{ 

  const handleCheckoutClick = () => {
    const offcanvasElement = document.getElementById('offcanvasRight');
    if (offcanvasElement && offcanvasElement.classList !== undefined) {
      offcanvasElement.classList.remove('show');
  
      // Remove the backdrop shadow
      const backdropElement = document.getElementsByClassName('offcanvas-backdrop')[0];
      if (backdropElement && backdropElement.classList !== undefined) {
        backdropElement.classList.remove('show');
      }
    }
  };
  
  return(
  <div className="Cart" data-testid="Cart">

      <Cartview handleCheckoutClick={handleCheckoutClick} closeoffcanvas={closeoffcanvas}/>
   
  </div>
)};
export default Cart;
