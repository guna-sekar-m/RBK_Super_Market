import React from "react";
const SocialLinkssettings=()=>{
    return(
    <div className="row">
    <div className="col-md-6">
      <div className="card border-0">
        <div className="card-header bg-white">
          <h5>Social Links</h5>
        </div>
        <div className="card-body">
            <form action="">
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label fw-semibold"><i className="fa-brands fa-facebook"></i> Facebook</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="https://www.facebook.com" required/>
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label fw-semibold"><i class="fa-brands fa-instagram"></i> Instagram</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="https://www.instagram.com" required/>
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label fw-semibold"><i class="fa-brands fa-youtube"></i> Youtube</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="https://www.youtube.com" required/>
                </div>

                <button className="btn btn-primary">Update</button>
            </form>
      
        </div>
      </div>
    </div>
</div>
)
}
export default SocialLinkssettings;