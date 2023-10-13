import React from "react";
import PasswordField from "../../modules/PasswordField/PasswordField";
const RegisterForm=(props)=>{
  const {formdata,changeHandler,register}=props;
    return(
      <form onSubmit={register}>
          <div className="mb-3">
            <label htmlFor="fullName" className="form-label">Name</label>
            <input type="text" className="form-control p-2" id="name" placeholder="Enter Your Name" name="fullName" value={formdata.fullName} onChange={changeHandler} required/>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control p-2" id="email" placeholder="Enter Email address" name="Email" value={formdata.Email} onChange={changeHandler} required/>
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <PasswordField className="form-control p-2" name="Password" value={formdata.Password} onChange={changeHandler}  placeholder="Enter Password" required/>

          </div>
          <button type="submit" className="btn btn-primary">Sign Up</button>
        </form>
    )
}
export default RegisterForm;