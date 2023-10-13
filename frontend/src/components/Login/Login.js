import React,{useState} from "react";
import "./Login.css";
import LoginForm from "./LoginForm";
import { apilogin } from '../../services/apiloginandregister/apiloginandregister';
import { useAuth } from "../../services/LoginContext/LoginContext";
import { ToastContainer,toast } from "react-toastify";
const Login = ({handleCloseModal}) => {
  const [formdata,setformdata]=useState({});
  const { login } = useAuth();
  const changeHandler = e => {
    setformdata({...formdata,[e.target.name]:e.target.value});
   }
  const logins=async(event)=>{
    event.preventDefault();
    try {
    var res =await apilogin(formdata);
    localStorage.setItem('rbkstoreapp',JSON.stringify(res.token));
    login();
    handleCloseModal(false);
    toast.success('Successfully logged in');
    
    } catch (error) {
    if (error.response && error.response.status === 401) {
      toast.error('Unauthorized: Please log in or provide valid credentials.');
    } else {
      toast.error('An error occurred. Please try again later.');
    }
  }
  }
  return (
    <div className="Login" data-testid="Login">
      <ToastContainer/>
      <LoginForm  formdata={formdata} changeHandler={changeHandler} login={logins}/>
    </div>
  );
};
export default Login;
