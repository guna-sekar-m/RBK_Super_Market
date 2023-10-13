import React from "react";
import Generalsettings from "./Generalsettings";
import Bannersettings from "./Bannersettings";
import Paymentsettings from "./Paymentsettings";
import Emailsettings from "./Emailsettings";
import SocialLinkssettings from "./SocialLinkssettings";
import BannerList from "./BannerList";
const SettingTabs=(props)=>{
   const {websetting,changewebsettingHandler,Updatewebsetting}=props;

    return(
        <div className="container-fluid">
           <div className="row  mt-2">
            <div className="col-md-12">
                <h5><i className="fa-solid fa-gear"></i> Settings</h5>
            </div>

            <div className="row  mt-2">
            <div className="col-lg-12">
            <ul className="nav nav-pills mb-3 menu-tabs gap-2" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="pills-general-tab" data-bs-toggle="pill" data-bs-target="#pills-general" type="button" role="tab" aria-controls="pills-general" aria-selected="true">General Settings</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-banner-tab" data-bs-toggle="pill" data-bs-target="#pills-banner" type="button" role="tab" aria-controls="pills-banner" aria-selected="false">Banner Settings</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-payment-tab" data-bs-toggle="pill" data-bs-target="#pills-payment" type="button" role="tab" aria-controls="pills-payment" aria-selected="false">Payment Settings</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-email-tab" data-bs-toggle="pill" data-bs-target="#pills-email" type="button" role="tab" aria-controls="pills-email" aria-selected="false">Email Settings</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-social-tab" data-bs-toggle="pill" data-bs-target="#pills-social" type="button" role="tab" aria-controls="pills-social" aria-selected="false">Social Link Settings</button>
                </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-general" role="tabpanel" aria-labelledby="pills-general-tab" tabindex="0">
                    <Generalsettings websetting={websetting} changewebsettingHandler={changewebsettingHandler} Updatewebsetting={Updatewebsetting}/>
                </div>
                <div className="tab-pane fade" id="pills-banner" role="tabpanel" aria-labelledby="pills-banner-tab" tabindex="0">
                    <BannerList/>
                </div>
                <div className="tab-pane fade" id="pills-payment" role="tabpanel" aria-labelledby="pills-payment-tab" tabindex="0">
                    <Paymentsettings/>
                </div>
                <div className="tab-pane fade" id="pills-email" role="tabpanel" aria-labelledby="pills-email-tab" tabindex="0">
                    <Emailsettings/>
                </div>
                <div className="tab-pane fade" id="pills-social" role="tabpanel" aria-labelledby="pills-social-tab" tabindex="0">
                    <SocialLinkssettings/>
                </div>
            </div>
            </div>
            </div>
           </div>
        </div>
     )
}
export default SettingTabs;