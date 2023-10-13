import React from 'react';
import './category.css';

const AddForm=({showModal,handleCloseModal,formdata,changeHandler,handleImageChange,save,update})=>{
  const statusOptions = ['Active', 'Inactive'];
    return(
        <div>
         
        {showModal.show && (
          <form onSubmit={showModal.modelname=="newform"?save:update}>
           <div className="modal d-block fade show" >
           <div className="modal-dialog modal-dialog-centered">
             <div className="modal-content">
               <div className="modal-header">
                 <h5 className="modal-title">Category Form</h5>
                 <button type="button" className="btn-close" onClick={handleCloseModal} aria-label="Close"></button>
               </div>
               <div className="modal-body">
               <div className="mb-3">
                 <label htmlFor="Category_Name" className="form-label">Category Name</label>
                 <input type="text" className="form-control" id="Category_Name" placeholder="Enter Category Name" name='Category_Name' value={formdata.Category_Name} onChange={changeHandler} required />
               </div>
               <div className="mb-3">
                 <label htmlFor="Category_img" className="form-label">Category Image</label>
                 <input type="file" className="form-control" id="Category_img" placeholder="Enter Category Name" name='Category_img' onChange={handleImageChange} />
                
               </div>
               <div className="mb-3">
                <label htmlFor="Status" className="form-label">Status</label>
                <select className="form-select" id="Status" name="Status" value={formdata.Status} onChange={changeHandler} required>
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