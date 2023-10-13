import React from 'react';
import './Logospinner.css';
const LogoSpinner = () => {
  return (

    <div id="preloader-active">
    <div class="preloader d-flex align-items-center justify-content-center">
        <div class="preloader-inner position-relative">
            <div class="preloader-circle"></div>
            <div class="preloader-img pere-text">
                <img src="RBK Icon.png" alt=""  className="img-fluid"/>
            </div>
        </div>
    </div>
  </div>

  );
};

export default LogoSpinner;
