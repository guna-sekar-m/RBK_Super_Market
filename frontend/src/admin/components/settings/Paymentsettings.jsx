import React from "react";
const Paymentsettings=()=>{
    return(
    <div className="row">
    <div className="col-md-6">
      <div className="card border-0">
        <div className="card-header bg-white">
          <h5>Payment Methods</h5>
        </div>
        <div className="card-body">
        <form action="">
            <div className="card card-bordered shadow-none">
              <div className="card-body p-6">
                <div className="d-flex">
                    <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="cashonDelivery" value="Cash on Delivery" />
                    <label className="form-check-label ms-2" for="cashonDelivery">
                     </label>
                    </div>
                <div>
                       
                <h5 className="mb-1 h6"> Cash on Delivery</h5>
                <p className="mb-0 small">Pay with cash when your order is delivered.</p>
               </div>
            </div>

            </div>
        
        </div>
        <p><span className="text-danger">*</span> Other methods coming soon</p>
        <button className="btn btn-primary">Update</button>
        </form>
        </div>
      </div>
    </div>
</div>
)
}
export default Paymentsettings;