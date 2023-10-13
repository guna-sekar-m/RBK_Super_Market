import React, { useEffect } from 'react';
import './order-status.css';
import { NavLink ,useNavigate} from 'react-router-dom';

const OrderStatus = () => {
  const navigate=useNavigate();
  useEffect(()=>{
    if(localStorage.getItem("paymentinit")){
      setTimeout(() => {
        // This function will be executed after 10 seconds
        localStorage.removeItem("paymentinit");
      }, 10000);
    }
    else{
      navigate('/home');
    }
  })
  return(
  <div className="OrderStatus" data-testid="OrderStatus">
     <div className="container mt-5 pt-5">
      <div className="row mt-5 pt-5">
        <div className="col-md-12 text-center">
          <h2><i class="fa-solid fa-circle-check fa-lg text-success"></i> Order Placed</h2>
          <NavLink className='btn btn-primary' to={'/account'}>Go to Orders</NavLink>
        </div>
      </div>
     </div>
  </div>
)};

OrderStatus.propTypes = {};

OrderStatus.defaultProps = {};

export default OrderStatus;
