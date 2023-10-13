import React from 'react';
import './customers.css';

const AddForm=({showModal,handleCloseModal,formdata,changeHandler,save,update})=>{
  const statusOptions = ['Active', 'Inactive'];
    return(
        <div>
         
        {showModal.show && (
          <form onSubmit={showModal.modelname=="newform"?save:update}>
           <div className="modal d-block fade show" >
           <div className="modal-dialog modal-dialog-centered">
             <div className="modal-content">
               <div className="modal-header">
                 <h5 className="modal-title">Customer Form</h5>
                 <button type="button" className="btn-close" onClick={handleCloseModal} aria-label="Close"></button>
               </div>
               <div className="modal-body">
               <div className="mb-3">
                 <label htmlFor="StudentName" className="form-label">Name</label>
                 <input type="text" className="form-control" id="name" placeholder="Enter Name" name='name' value={formdata.name} onChange={changeHandler} required />
               </div>
               <div className="mb-3">
                 <label htmlFor="StudentName" className="form-label">Email</label>
                 <input type="text" className="form-control" id="email" placeholder="Enter Email" name='email' value={formdata.email} onChange={changeHandler} required />
               </div>
               <div className="mb-3">
                 <label htmlFor="StudentName" className="form-label">Password</label>
                 <input type="password" className="form-control" id="password" placeholder="Enter Password" name='password' value={formdata.password} onChange={changeHandler} required />
               </div>
               <div className="mb-3">
                 <label htmlFor="StudentName" className="form-label">Phone</label>
                 <input type="text" className="form-control" id="phone" placeholder="Enter Phonenumber" name='phone' value={formdata.phone} onChange={changeHandler} required />
               </div>
               <div className="mb-3">
                 <label htmlFor="StudentName" className="form-label">Address</label>
                 <input type="text" className="form-control" id="address" placeholder="Enter Address" name='address' value={formdata.address} onChange={changeHandler} required />
               </div>
               <div className="mb-3">
                 <label htmlFor="StudentName" className="form-label">City</label>
                 <input type="text" className="form-control" id="city" placeholder="Enter City" name='city' value={formdata.city} onChange={changeHandler} required />
               </div>
               <div className="mb-3">
                 <label htmlFor="StudentName" className="form-label">State</label>
                 <input type="text" className="form-control" id="state" placeholder="Enter State" name='state' value={formdata.state} onChange={changeHandler} required />
               </div>
               <div className="mb-3">
                 <label htmlFor="StudentName" className="form-label">Country</label>
                 <input type="text" className="form-control" id="country" placeholder="Enter Country" name='country' value={formdata.country} onChange={changeHandler} required />
               </div>
               <div className="mb-3">
                 <label htmlFor="StudentName" className="form-label">Postal Code</label>
                 <input type="text" className="form-control" id="postal_code" placeholder="Enter Postal Code" name='postal_code' value={formdata.postal_code} onChange={changeHandler} required />
               </div>

               <div className="mb-3">
                <label htmlFor="status" className="form-label">Status</label>
                <select className="form-select" id="status" name="status" value={formdata.status} onChange={changeHandler} required>
                 <option value="">Select Status</option>
                   {statusOptions.map((status, index) => (
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