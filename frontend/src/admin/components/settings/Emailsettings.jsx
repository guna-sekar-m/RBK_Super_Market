import React from "react";
const Emailsettings=()=>{
    return(
    <div className="row">
    <div className="col-md-6">
      <div className="card border-0">
        <div className="card-header bg-white">
          <h5>Email Details</h5>
        </div>
        <div className="card-body">
            <form action="">
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label fw-semibold">Email From Address <span className="text-danger">*</span></label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="example@gmail.com" required/>
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label fw-semibold">Email App Password <span className="text-danger">*</span></label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="******" required/>
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label fw-semibold">Emails From Name <span className="text-danger">*</span></label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Foods Store" required/>
                </div>

                <button className="btn btn-primary">Update</button>
            </form>
      
        </div>
      </div>
    </div>
</div>
)
}
export default Emailsettings;