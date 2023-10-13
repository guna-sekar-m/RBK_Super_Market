import React from 'react';
import './orders.css';

const AddForm=({showModal,handleCloseModal,formdata,changeHandler,save,update})=>{
  const OrderstatusOptions = ['Order Placed', 'Order Accepted','Order Declined','Order Cancelled by Customer','Order Cancelled by Vendor','Order Processing','Order Packed','Order on the way','Order Delivered'];
   const PaymentstatusOptions=['Paid','Unpaid'];
  return(
        <div>
         
        {showModal.show && (
          <form onSubmit={showModal.modelname=="newform"?save:update}>
           <div className="modal d-block fade show" >
           <div className="modal-dialog modal-dialog-centered">
             <div className="modal-content">
               <div className="modal-header">
                 <h5 className="modal-title">Order Form</h5>
                 <button type="button" className="btn-close" onClick={handleCloseModal} aria-label="Close"></button>
               </div>
               <div className="modal-body">
  
               <div className="mb-3">
                <label htmlFor="status" className="form-label">Order Status</label>
                <select className="form-select" id="status" name="order_status" value={formdata.order_status} onChange={changeHandler} >
                 <option value="">Select Order Status</option>
                   {OrderstatusOptions.map((status, index) => (
                    <option key={index} value={status}>{status}</option>
                    ))}
                </select>
               </div>
               <div className="mb-3">
                 <label htmlFor="payment_id" className="form-label">Payment ID</label>
                 <input type="text" className="form-control" id="payment_id" placeholder="Enter Payment ID" name='payment_id' value={formdata.payment_id} onChange={changeHandler} />
               </div>
               <div className="mb-3">
                 <label htmlFor="payment_type" className="form-label">Payment Type</label>
                 <input type="text" className="form-control" id="payment_type" placeholder="Enter Payment Type" name='payment_type' value={formdata.payment_type} onChange={changeHandler} />
               </div>
      
               <div className="mb-3">
                <label htmlFor="payment_status" className="form-label">Payment Status</label>
                <select className="form-select" id="status" name="payment_status" value={formdata.payment_status} onChange={changeHandler}>
                 <option value="">Select Order Status</option>
                   {PaymentstatusOptions.map((status, index) => (
                    <option key={index} value={status}>{status}</option>
                    ))}
                </select>
               </div>


               </div>
               <div className="modal-footer">
                 <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleCloseModal}>Close</button>
                 <button type="submit" className="btn btn-primary">Save</button>
               </div>
             </div>
           </div>
         </div>
         </form>
        )}
      </div>
    )
}
export default AddForm;