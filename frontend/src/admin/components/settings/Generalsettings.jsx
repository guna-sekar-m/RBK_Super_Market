import React from "react";
import imgpath from "../../../services/folderpath/folderpath";
const Generalsettings=(props)=>{
    const {websetting,changewebsettingHandler,Updatewebsetting}=props;
    return(
        <div className="row">
            <div className="col-md-6">
              <div className="card border-0 mb-3">
                <div className="card-header bg-white">
                  <h5>Website Basic Details</h5>
                </div>
                <div className="card-body">
                    <form onSubmit={Updatewebsetting}>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label fw-semibold">Website Name <span className="text-danger">*</span></label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Foods Store" name="website_name" value={websetting.website_name} onChange={changewebsettingHandler} required/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label fw-semibold">Logo <span className="text-danger">*</span></label>
                            <input type="file" className="form-control" id="exampleFormControlInput1" placeholder="Foods Store" name="logo"  onChange={changewebsettingHandler}/>
                            <p className="settings-size">
                            Recommended image size is <span>150px x 150px</span>
                            </p>
                            <div className="uploadlogo">
                              <img src={`${imgpath()}/storage/app/public/${websetting.logo}`} alt=""  height="50" className="border border-primary p-1 rounded"/>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label fw-semibold">Favicon <span className="text-danger">*</span></label>
                            <input type="file" className="form-control" id="exampleFormControlInput1" placeholder="Foods Store" name="favicon"  onChange={changewebsettingHandler}/>
                            <p className="settings-size">
                            Recommended image size is
                            <span>16px x 16px or 32px x 32px</span> and  Accepted formats: only png and ico
                             </p>
                             <div className="uploadlogo">
                              <img src={`${imgpath()}/storage/app/public/${websetting.favicon}`} alt=""  height="50" className="border border-primary p-1 rounded"/>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label for="exampleColorInput" class="form-label fw-semibold">Website General Color</label>
                            <input type="color" class="form-control form-control-color" id="exampleColorInput" title="Choose your color" name="website_general_color" value={websetting.website_general_color} onChange={changewebsettingHandler}/>
                        </div>
                        <button className="btn btn-primary" type="submit">Update</button>
                    </form>
              
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card border-0">
                <div className="card-header bg-white">
                  <h5>Billing Address Details</h5>
                </div>
                <div className="card-body">
                    <form className="row">
                    <div className="col-md-6 mb-3">
                            <label for="exampleFormControlInput1" className="form-label fw-semibold">Name <span className="text-danger">*</span></label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Foods Store" required/>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label for="exampleFormControlInput1" className="form-label fw-semibold">Mobile Number <span className="text-danger">*</span></label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Foods Store" required/>
                        </div>
                        <div className="col-md-12 mb-3"> 
                            <label for="exampleFormControlInput1" className="form-label fw-semibold">Email <span className="text-danger">*</span></label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Foods Store" required/>
                        </div>
                        <div className="col-md-12 mb-3"> 
                            <label for="exampleFormControlInput1" className="form-label fw-semibold">Address Line <span className="text-danger">*</span></label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Foods Store" required/>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label for="exampleFormControlInput1" className="form-label fw-semibold">City <span className="text-danger">*</span></label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Foods Store" required/>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label for="exampleFormControlInput1" className="form-label fw-semibold">State/Province <span className="text-danger">*</span></label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Foods Store" required/>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label for="exampleFormControlInput1" className="form-label fw-semibold">Zip/Postal Code <span className="text-danger">*</span></label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Foods Store" required/>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label for="exampleFormControlInput1" className="form-label fw-semibold">Country <span className="text-danger">*</span></label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Foods Store" required/>
                        </div>
                        <div className="col-md-12">
                        <button className="btn btn-primary">Update</button>
                        </div>
                    </form>
              
                </div>
              </div>
            </div>
        </div>
    )
}
export default  Generalsettings;