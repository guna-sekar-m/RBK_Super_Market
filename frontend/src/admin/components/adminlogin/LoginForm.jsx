import React from "react";
import PasswordField from "../../../modules/PasswordField/PasswordField";
const LoginForm=(props)=>{
  const {formdata,changeHandler,login}=props;
    return(
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <h3 className="mb-3">Admin Login</h3>
        <form onSubmit={login}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control p-2" id="email" placeholder="Enter Email address" name="email" value={formdata.email} onChange={changeHandler} required/>
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <PasswordField className="form-control p-2" name="password" value={formdata.password} onChange={changeHandler}  placeholder="Enter Password" required/>
          </div>
          <button type="submit" className="btn btn-primary">Sign In</button>
        </form>
        </div>
        </div>
      </div>
    )
}
export default LoginForm;