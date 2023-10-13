import React from "react";
const Settings=({settings,settingchangeHandler,UpdateUserdetails})=>{
    return(
        <section>
    
        <div className="container">
          <div className="row">
            
      
            <div className="col-lg-12 col-md-12 col-12">
              <div className="py-6 p-md-6 p-lg-10">
                
                <div>
                  
                  <h4 className="mb-4">Account details</h4>
       
                      
                      <form onSubmit={UpdateUserdetails} className="row row-cols-1 row-cols-lg-2">
                       
                        <div className="mb-3 col">
                          <label className="form-label">Name</label>
                          <input type="text" className="form-control" placeholder="jitu chauhan" value={settings.name} onChange={settingchangeHandler} name="name"/>
                        </div>
                       
                        <div className="mb-3 col">
                          <label className="form-label">Email</label>
                          <input type="email" className="form-control" placeholder="example@gmail.com" value={settings.email} onChange={settingchangeHandler} name="email"/>
                        </div>
                       
                        <div className="mb-3 col">
                          <label className="form-label">Phone</label>
                          <input type="text" className="form-control" placeholder="Phone number" value={settings.phone} onChange={settingchangeHandler} name="phone"/>
                        </div>
                        <div className="mb-3 col">
                              <label className="form-label">New Password</label>
                              <input type="password" className="form-control" placeholder="**********" value={settings.password} onChange={settingchangeHandler} name="password"/>
                       </div>
                        <div className="mb-3 col-md-12">
                          <button className="btn btn-primary" type="submit">Save Details</button>
                        </div>
                      </form>
                    
                </div>
    
            
            
              </div>
            </div>
          </div>
        </div>
      </section>  
    )
}
export default Settings;