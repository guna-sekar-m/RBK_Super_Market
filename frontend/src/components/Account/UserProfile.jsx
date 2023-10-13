import React from "react";
import { useAuth } from "../../services/LoginContext/LoginContext";
import Orders from "./Orders";
import Settings from "./Settings";
import Address from "./Address";
const UserProfile=(props)=>{
  const {ordersdata,handleCheckoutClick,settings,settingchangeHandler,UpdateUserdetails,formdata,changeHandler,SaveShippingAddress,modalRef,shippingaddress,handleaddressopenmodal,handleaddressclosemodal,editaddressopenmodal,UpdateShippingAddress,DeleteShippingAddress}=props;
const {logout}=useAuth();
    return (
<div className="container">
  <div className="row mt-2 ">
        <div className="col-12">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item"><a href="#!" className='text-decoration-none text-muted'>Home</a></li>
              <li className="breadcrumb-item"><a href="#!" className='text-decoration-none text-muted'>My Account</a></li>
            </ol>
          </nav>
        </div>
      </div>
  <div className="row mt-3">
    <div className="col-md-12">
    <div className="d-lg-none mb-3">
              <button className="btn btn-dark d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#accountmenu" aria-controls="offcanvasResponsive"><i className="fa-solid fa-filter"></i> Account Menu</button>
    </div>

  <div className="d-flex flex-column flex-md-row">
       <div className="offcanvas-lg offcanvas-end" tabIndex="-1" id="accountmenu" aria-labelledby="offcanvasResponsiveLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasResponsiveLabel">My Account</h5>
              <button type="button" id="btn-close1" className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#accountmenu" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
    <div className="nav flex-column nav-pills me-4 w-100" id="v-pills-tab" role="tablist" aria-orientation="vertical">
      <button  onClick={handleCheckoutClick} className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true"><i className="fa-solid fa-bag-shopping"></i> Orders</button>
      <button onClick={handleCheckoutClick} className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false"><i className="fa-solid fa-gear"></i> Settings</button>
      <button onClick={handleCheckoutClick} className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false"><i className="fa-solid fa-location-dot"></i> Address</button>
      <hr />
      <button className="nav-link" id="v-pills-settings-tab" data-bs-dismiss="offcanvas" data-bs-target="#accountmenu" onClick={()=>{logout();handleCheckoutClick()}}><i className="fa-solid fa-right-from-bracket"></i> Logout</button>
    </div>
    </div>
    </div>
    <div className="tab-content border-lg-start" id="v-pills-tabContent">
      <div className="tab-pane fade show active ms-lg-3" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabIndex="0">
      
        <Orders ordersdata={ordersdata}/>
      </div>
      <div className="tab-pane fade ms-lg-3" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabIndex="0">
       <Settings settings={settings} settingchangeHandler={settingchangeHandler} UpdateUserdetails={UpdateUserdetails}/>
      </div>
      <div className="tab-pane fade ms-lg-3" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabIndex="0">
         <Address 

         formdata={formdata} 
         changeHandler={changeHandler} 
         modalRef={modalRef}
         shippingaddress={shippingaddress} 
         handleaddressopenmodal={handleaddressopenmodal}
         handleaddressclosemodal={handleaddressclosemodal}
         SaveShippingAddress={SaveShippingAddress}
         editaddressopenmodal={editaddressopenmodal}
         UpdateShippingAddress={UpdateShippingAddress}
         DeleteShippingAddress={DeleteShippingAddress}
         
         />
      </div>
    </div>
    </div>
   
  </div>
  </div>
</div>

    )
}
export default UserProfile;