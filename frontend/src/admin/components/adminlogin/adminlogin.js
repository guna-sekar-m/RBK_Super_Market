import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './adminlogin.css';
import LoginForm from './LoginForm';
import { apilogin } from '../../services/apilogin/apilogin';
import { ToastContainer, toast } from 'react-toastify';
const Adminlogin = () =>{ 
  const navigate=useNavigate();
  const [formdata,setformdata]=useState({});
  const changeHandler = e => {
    setformdata({...formdata,[e.target.name]:e.target.value});
   }
   const login=async(event)=>{
    event.preventDefault();
    var res=await apilogin(formdata);
    if(res.message=='Successfull'){
      localStorage.setItem('rbkstoreapp',JSON.stringify(res.token));
      navigate('/admin/dashboard');
    }
    else{
      toast.error('Invalid email or password', {position: "top-right",autoClose: 5000,hideProgressBar: false,closeOnClick: true,pauseOnHover: true,
        draggable: true, 
        progress: undefined,
        theme: "light",
      });
    }
   }
  return(
  <div className="Adminlogin vh-100 d-flex justify-content-center align-items-center" data-testid="Adminlogin">
    <LoginForm formdata={formdata} changeHandler={changeHandler} login={login}/>
    <ToastContainer/>
  </div>
)};

export default Adminlogin;
