import React, { useEffect,lazy,Suspense } from 'react';
import { Routes, Route,Navigate} from "react-router-dom";
import Topbar from '../../core/topbar/topbar';
import './main.css';
//components
const Dashboard=lazy(() => import('../../components/dashboard/dashboard'));
const Products=lazy(() => import('../../components/products/products'));
const Customers=lazy(() => import('../../components/customers/customers'));
const Category=lazy(() => import('../../components/category/category'));
const Orders=lazy(() => import('../../components/orders/orders'));
const OrderDetails=lazy(() => import('../../../components/order-details/order-details'));
const Settings=lazy(() => import('../../components/settings/settings'));
const Adminrouter = () =>{ 
  useEffect(()=>{
  const body=document.querySelector('body');
  body.classList.add("bg-light");
  },[])
  return(
  <div data-testid="Adminrouter">
    <Topbar/>
    <main className="mb-5" id="my-container">
      <Routes>
          <Route path="/dashboard" element={<Suspense fallback={<>...</>}><Dashboard /></Suspense>}/>
          <Route path="/products" element={<Suspense fallback={<>...</>}><Products /></Suspense>}/>
          <Route path="/category" element={<Suspense fallback={<>...</>}><Category /></Suspense>}/>
          <Route path="/customers" element={<Suspense fallback={<>...</>}><Customers /></Suspense>}/>
          <Route path="/orders" element={<Suspense fallback={<>...</>}><Orders /></Suspense>}/>
          <Route path="/settings" element={<Suspense fallback={<>...</>}><Settings /></Suspense>}/>
        
          <Route path="/orderdetails/:id" element={<Suspense fallback={<>...</>}><OrderDetails /></Suspense>}/>
          <Route path="/" element={<Navigate to="/admin/admin-login" replace />} />
      </Routes>
    </main>
  </div>
)};
export default Adminrouter;
