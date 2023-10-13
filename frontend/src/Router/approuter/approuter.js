import React,{lazy,Suspense} from "react";
import { BrowserRouter as Router, Routes, Route,Navigate} from "react-router-dom";
import AuthGuard from "../../services/AuthGuard/AuthGuard";
import ScrollToTop from "./ScrollToTop";
import {LoginProvider}  from "../../services/LoginContext/LoginContext";
import { Provider } from 'react-redux';
import store from "../../services/Cart/store";
import { CartProvider } from "../../services/Cart/CartContext";
//router
import Adminrouter from "../../admin/router/adminrouter/adminrouter";
//core 
const Main = lazy(() => import('../../core/main/main'));
//components
const Home = lazy(() => import('../../components/Home/Home'));
const Shop = lazy(() => import('../../components/shop/shop'));
const Account = lazy(() => import('../../components/Account/Account'));
const Checkout = lazy(() => import('../../components/Checkout/Checkout'));
const Adminlogin = lazy(() => import('../../admin/components/adminlogin/adminlogin'));
const OrderStatus= lazy(() => import('../../components/order-status/order-status'));
const OrderDetails= lazy(() => import('../../components/order-details/order-details'));
const Approuter = () => {

  return (
  <div data-testid="Approuter">
  <Provider store={store}>
  
    <Router>
      <ScrollToTop>
      <Routes>
        <Route exact path="/" element={<Suspense fallback={<>...</>}><CartProvider><LoginProvider><Main /></LoginProvider></CartProvider></Suspense>}>
          <Route path="/home" element={<Suspense fallback={<>...</>}><Home /></Suspense>}/>
          <Route path="/shop" element={<Suspense fallback={<>...</>}><Shop /></Suspense>}/>
          <Route path="/shop/:id" element={<Suspense fallback={<>...</>}><Shop /></Suspense>}/>
          <Route path="/account" element={<Suspense fallback={<>...</>}><AuthGuard allowedRoles={['customer','Admin']}><Account /></AuthGuard></Suspense>}/>
          <Route path="/checkout" element={<Suspense fallback={<>...</>}><AuthGuard allowedRoles={['customer','Admin']}><Checkout /></AuthGuard></Suspense>}/>
          <Route path="/payment" element={<Suspense fallback={<>...</>}><AuthGuard allowedRoles={['customer','Admin']}><OrderStatus /></AuthGuard></Suspense>}/>
          <Route path="/orderdetails/:id" element={<Suspense fallback={<>...</>}><AuthGuard allowedRoles={['customer','Admin']}><OrderDetails /></AuthGuard></Suspense>}/>
          <Route path="/" element={<Navigate to="/home" replace />} />
        </Route>
        <Route path="/admin/admin-login" element={<Suspense fallback={<>...</>}><Adminlogin /></Suspense>}/>
        <Route path="/admin/*" element={<LoginProvider><AuthGuard allowedRoles={['Admin']}><Adminrouter /></AuthGuard></LoginProvider>} />
      </Routes>
      </ScrollToTop>
    </Router>
  
  </Provider>
   
  </div>
  )
};

export default Approuter;
