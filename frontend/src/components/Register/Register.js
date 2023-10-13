import React,{useState} from 'react';
import  './Register.css';
import RegisterForm from './RegisterForm';
import { apiregister } from '../../services/apiloginandregister/apiloginandregister';
import { ToastContainer,toast } from "react-toastify";
const Register = ({handleCloseModal}) =>{ 
  const [formdata,setformdata]=useState({});
  const changeHandler = e => {
    setformdata({...formdata,[e.target.name]:e.target.value});
   }
  const register=async(event)=>{
    event.preventDefault();
    try{
    var res =await apiregister(formdata);
    res['message'] == 'Registration successful'?toast.success('Registration Successful'):toast.error('An error occurred. Please try again later.');
    handleCloseModal(false);
    }
    catch(err){
      toast.error('An error occurred. Please try again later.');
    }
  }
  return(
  <div className="Register" data-testid="Register">
    <ToastContainer/>
    <RegisterForm formdata={formdata} changeHandler={changeHandler} register={register}/>
  </div>
)};
export default Register;
