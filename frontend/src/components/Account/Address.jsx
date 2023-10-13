import React from "react";
const Address=({formdata,changeHandler,modalRef,shippingaddress,handleaddressopenmodal,handleaddressclosemodal,SaveShippingAddress,editaddressopenmodal,UpdateShippingAddress,DeleteShippingAddress})=>{
  
    return(
    <section>
    <div className="container">
      <div className="row">
        
        <div className="col-lg-12 col-md-12 col-12">
          <div className="py-3 p-md-3">
            <div className="d-flex justify-content-between mb-5 flex-wrap">
           
              <h4 className="mb-0 me-5">Address</h4>
        
              <a href="#" className="btn btn-outline-primary" onClick={handleaddressopenmodal}>Add a
                new address </a>
            </div>
            <div className="row mt-3">
            {shippingaddress.map((data, index) => ( <div className="col-md-12 mb-4" key={index}>
              
                <div className="card h-100">
                  <div className="card-body">
                  <div className="form-check mb-4">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="homeRadio" checked={data.status=="Yes"}/>
                    <label className="form-check-label text-dark fw-semi-bold" for="homeRadio">
                      {data.business_name}
                    </label>
                  </div>
                
                  <p className="mb-6"><b>{data.first_name} {data.last_name}</b><br/>
                  <i class="fa-solid fa-envelope"></i> {data.email}, <br/>
                  <i class="fa-solid fa-mobile"></i> {data.mobilenumber}, <br/>
                  <i class="fa-solid fa-location-dot"></i> {data.address}, <br/>
                   {data.city},{data.state},<br/>
                   {data.country},{data.postal_code}
                   </p>
                
                  <div className="mt-4">
                    <a href="#" className="text-inherit text-decoration-none"  onClick={()=>{handleaddressopenmodal();editaddressopenmodal(data);}}><i class="fa-solid fa-pen"></i> Edit </a>
                    <a href="#" className="text-danger ms-3 text-decoration-none" onClick={()=>DeleteShippingAddress(data)}><i class="fa-solid fa-trash-can"></i> Delete
                    </a>
                    </div>
                  </div>
                </div>
              </div>))}
              
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="addressModal" data-bs-backdrop="static" data-bs-keyboard="false" ref={modalRef}>
    <div class="modal-dialog modal-dialog-centered">
      
      <div class="modal-content">

        <div class="modal-body p-6">
          <div class="d-flex justify-content-between mb-5">
            <div>
              
              <h5 class="mb-1" id="addAddressModalLabel"> Shipping Address</h5>
              <p class="small mb-0">Shipping address for your order delivery.</p>
            </div>
            <div>
             
              <button type="button" class="btn-close" onClick={handleaddressclosemodal} aria-label="Close"></button>
            </div>
          </div>
          
          <form class="row g-3" onSubmit={SaveShippingAddress}>
            
            <div class="col-12">
              
              <input type="text" class="form-control" placeholder="First name" aria-label="First name"  name="first_name" value={formdata.first_name} onChange={changeHandler} required/>
            </div>
             
            <div class="col-12">
              
              <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" name="last_name" value={formdata.last_name} onChange={changeHandler} required/>
            </div>
            <div class="col-12">
              
              <input type="email" class="form-control" placeholder="Email" aria-label="Email" name="email" value={formdata.email} onChange={changeHandler} required/>
            </div>
            <div class="col-12">
              
              <input type="text" class="form-control" pattern="[0-9]{10}"  placeholder="Mobile Number" aria-label="Mobile Number" name="mobilenumber" value={formdata.mobilenumber} onChange={changeHandler} required/>
            </div>
 
            <div class="col-12">

              <input type="text" class="form-control" placeholder="Address Line" name="address" value={formdata.address} onChange={changeHandler} required/>
            </div>
             
            <div class="col-12">

              <input type="text" class="form-control" placeholder="City" name="city" value={formdata.city} onChange={changeHandler} required/>
            </div>
             
            <div class="col-12">
 
              <select class="form-select" name="state" value={formdata.state} onChange={changeHandler} required>
                <option selected="" > Select State</option>
                <option value="Tamil Nadu"> Tamil Nadu</option>
              </select>
            </div>
             
            <div class="col-12">
              <select class="form-select" name="country" value={formdata.country} onChange={changeHandler} required>
              <option selected="" >Select Country</option>
                <option  value="India">India</option>
              </select>
            </div>
             
            <div class="col-12">

              <input type="text" class="form-control" placeholder="Zip Code" name="postal_code" value={formdata.postal_code} onChange={changeHandler} required/>
            </div>
             
            <div class="col-12">

              <input type="text" class="form-control" placeholder="Business Name" name="business_name" value={formdata.business_name} onChange={changeHandler} required/>
            </div>
             
            <div class="col-12">
       
              <div class="form-check">
                <input class="form-check-input" type="checkbox"  id="flexCheckDefault" name="status" value="Yes" onChange={changeHandler} checked={formdata.status=="Yes"?true:""}/>
                <label class="form-check-label" for="flexCheckDefault">
                  Set as Default
                </label>
              </div>
            </div>
             
            <div class="col-12 text-end">
              <button type="button" class="btn btn-outline-primary me-2" onClick={handleaddressclosemodal}>Cancel</button>
              <button class="btn btn-primary" type="submit">Save Address</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  </section>
    )
}
export default Address;
