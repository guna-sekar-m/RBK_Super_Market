import React from "react";
import Register from '../../components/Register/Register';
import Login from "../../components/Login/Login";
const AccountForm=({showModal,handleCloseModal,accountform,accountformshoworhide,setlogin})=>{
    return(
      <>
      {showModal.show && (
        <div className="modal fade d-block show" id="exampleModal" data-bs-backdrop="true" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
         <div className="modal-dialog modal-dialog-centered">
             <div className="modal-content p-4">
               <div className="modal-header border-0">
                 <h5 className="modal-title fs-3 fw-bold" id="userModalLabel">{accountform==true?'Sign Up':"Sign in"}</h5>
                 <button type="button" className="btn-close" onClick={handleCloseModal}></button>
               </div>
             <div className="modal-body">
                {accountform==true?<Register handleCloseModal={handleCloseModal}/>:<Login setlogin={setlogin} handleCloseModal={handleCloseModal}/>}
             </div>
           <div className="modal-footer border-0 justify-content-center">
              {accountform==true?'Already have an account?':"Don't Have an Account?"} <a role="button" className="text-primary text-decoration-none" onClick={accountformshoworhide}>{accountform==true?'Sign in':"Sign Up"}</a>
           </div>
          </div>
        </div>
     </div>
   )}
</>
    )
}
export default AccountForm;