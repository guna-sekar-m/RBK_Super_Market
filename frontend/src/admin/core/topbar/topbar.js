import React from 'react';
import { useNavigate } from 'react-router-dom';
import  './topbar.css';
import Navbar from './Navbar';
import {removetoken} from '../../services/Token/token';
const Topbar = () =>{ 
   const navigate=useNavigate();
  const logout = () => {
    removetoken();
    navigate('/admin/admin-login')
  };
  return(
  <header className="sticky-top primary-root-bg header" data-testid="Topbar">
    <Navbar logout={logout}/>
  </header>
)};



export default Topbar;
