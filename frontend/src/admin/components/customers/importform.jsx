import React from 'react';
import './customers.css';

const ImportForm=({showModal,handleCloseModal,handleFile,importfile})=>{
    
    return(
        <div>
        {showModal.show && (
          <form onSubmit={importfile}>
           <div className="modal d-block fade show" >
           <div className="modal-dialog modal-dialog-centered">
             <div className="modal-content">
               <div className="modal-header">
                 <h5 className="modal-title">Import File</h5>
                 <button type="button" className="btn-close" onClick={handleCloseModal} aria-label="Close"></button>
               </div>
               <div className="modal-body">
               <input type="file" onChange={handleFile} accept=".xlsx" className="form-control"/>
               </div>
               <div className="modal-footer">
                 <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleCloseModal}>Close</button>
                 <button type="submit" className="btn btn-primary">Upload</button>
               </div>
             </div>
           </div>
         </div>
         </form>
        )}
      </div>
    )
}
export default ImportForm;