import React from 'react';
import './products.css';
import { AutoComplete } from 'primereact/autocomplete';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';    
const AddForm=({showModal,handleCloseModal,formdata,changeHandler,handleImageChange,handleCategoryChange,save,update,filteredCategory,searchCategory,isLoading})=>{
  const statusOptions = ['Sale','Stockout','Inactive'];
    return(
        <div>
         
        {showModal.show && (
          <form onSubmit={showModal.modelname=="newform"?save:update}>
           <div className="modal d-block fade show" >
           <div className="modal-dialog modal-dialog-centered">
             <div className="modal-content">
               <div className="modal-header">
                 <h5 className="modal-title">Product Form</h5>
                 <button type="button" className="btn-close" onClick={handleCloseModal} aria-label="Close"></button>
               </div>
               <div className="modal-body">
               <div className="mb-3">
                 <label htmlFor="Product_Name" className="form-label">Product Name</label>
                 <input type="text" className="form-control" id="Product_Name" placeholder="Enter Product Name" name='Product_Name' value={formdata.Product_Name} onChange={changeHandler} required />
               </div>
               <div className="mb-3">
                 <label htmlFor="Product_Img" className="form-label">Product Image</label>
                 <input type="file" className="form-control" id="Product_Img" placeholder="Enter Product Image" name='Product_Img' onChange={handleImageChange} />
                
               </div>
               <div className="mb-3">
                 <label htmlFor="Category_Name" className="form-label">Product Category</label>
                 <AsyncTypeahead  id="async-example" isLoading={isLoading} labelKey="Category_Name" minLength={1} onSearch={searchCategory} options={filteredCategory} placeholder="Search for a products..."
      
                  renderMenuItemChildren={(option) => (
                   <div onClick={() => handleCategoryChange(option)}>
                   <span>{option.Category_Name}

            
                   </span>
                  </div>
                  )}
                 />
               </div>
               <div className="mb-3">
                 <label htmlFor="Regular_Price" className="form-label">Regular Price</label>
                 <input type="text" className="form-control" id="Regular_Price" placeholder="Enter Regular Price" name='Regular_Price' value={formdata.Regular_Price} onChange={changeHandler} required />
               </div>
               <div className="mb-3">
                 <label htmlFor="Sale_Price" className="form-label">Sale Price</label>
                 <input type="text" className="form-control" id="Sale_Price" placeholder="Enter Sale Price" name='Sale_Price' value={formdata.Sale_Price} onChange={changeHandler} required />
               </div>
               <div className="mb-3">
                 <label htmlFor="Stock" className="form-label">Stock</label>
                 <input type="text" className="form-control" id="Stock" placeholder="Enter Stock" name='Stock' value={formdata.Stock} onChange={changeHandler} required />
               </div>
               <div className="mb-3">
                 <label htmlFor="Sale_Price" className="form-label">Description</label>
                 <textarea className="form-control" id="Description" placeholder="Enter Description" name='Description' value={formdata.Description} onChange={changeHandler} required ></textarea>
               </div>
               <div className="mb-3">
                <label htmlFor="status" className="form-label">Status</label>
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