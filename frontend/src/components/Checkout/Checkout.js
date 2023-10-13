import React,{useState,useEffect,useRef} from 'react';
import  './Checkout.css';
import CheckoutForm from './CheckoutForm';
import { useNavigate } from 'react-router-dom';
import { getshippingaddress } from '../../services/apiaccount/apiaccount';
import { getuserdetails } from '../../services/Token/token';
import { saveorders } from '../../services/apiorders/apiorders';
import { ToastContainer,toast } from "react-toastify";
import { useCart } from "../../services/Cart/CartContext";
import Spinner from '../../modules/spinner/Spinner';
import { Modal } from 'bootstrap';
const Checkout = () => {
  const navigate=useNavigate();
  const [shippingaddress,setshippingaddress]=useState([]);
  const [checkoutformdata,setcheckoutformdata]=useState({});
  const [isspinnerLoading, setisspinnerLoading] = useState(false);
  const {handleClearCart}=useCart();
  const modalRef = useRef();
  let isMounted=true;
  useEffect(()=>{
    if (isMounted) {
      fetchData();
    }
    return () => {
      isMounted = false;
    };
  },[]);
  const fetchData = async () => {
    try {
      const request3 = await getshippingaddress();
      setshippingaddress(request3.data);
  
    } catch (error) {
      console.error(error);
    }
  };
  const handleChange = (e) => {
  
    setcheckoutformdata({...checkoutformdata,[e.target.name]: e.target.value});
  }
  const checkout=async(e,cartItems,calculateSubtotal)=>{
    setisspinnerLoading(true);
    e.preventDefault();

    if(checkoutformdata&&checkoutformdata.Address==undefined){
      toast.warn('Select a delivery address');
      setisspinnerLoading(false);
    }else{
      const orders=cartItems.map((item)=>({...item,user_id:getuserdetails().email}));
      console.log(checkoutformdata)
      const ordermaster={
      total_amount:calculateSubtotal,
      shipping_cost:calculateSubtotal>=3000?0:40,
      user_id:getuserdetails().email,payment_mode:"Cash on Delivery",
      shipping_name:checkoutformdata.Address.first_name +" "+ checkoutformdata.Address.last_name,
      shipping_email:checkoutformdata.Address.email,
      shipping_mobile_number:checkoutformdata.Address.mobilenumber,
      shipping_address:checkoutformdata.Address.address+","+ checkoutformdata.Address.city+"-"+ checkoutformdata.Address.postal_code+","+ checkoutformdata.Address.state+","+checkoutformdata.Address.country,
      delivery_instructions:checkoutformdata.Delivery_Instructions
    }
    localStorage.setItem("paymentinit",true);
      var res=await saveorders({orders:orders,ordermaster:ordermaster});
      if(res.data=='Successfully Order Placed'){
        setisspinnerLoading(false);
        toast.success('Order Successfully Placed');
        handleClearCart();
        navigate('/payment');
      }
      else{
        setisspinnerLoading(false);
        toast.error('Failed to place the order');
      }
    }
  }

  return(
  <div className="Checkout" data-testid="Checkout">
    <ToastContainer/>
    {isspinnerLoading ?<Spinner />:<CheckoutForm shippingaddress={shippingaddress} handleChange={handleChange} checkoutformdata={checkoutformdata} checkout={checkout} />}
  </div>
  )
};

export default Checkout;
