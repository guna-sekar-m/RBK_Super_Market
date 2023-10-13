import React, { useState,useEffect } from "react";
import Cart from "../../components/cart/cart";
const Cartmenu=({closeoffcanvas})=>{
  const [width, setWidth]   = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
 }
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  const isMobile = width <= 768;
    return(
        <div className={`offcanvas offcanvas-end offcanvas-size-xl ${isMobile?'w-100':''}`} tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div className="offcanvas-header border-bottom">
    <h5 className="offcanvas-title" id="offcanvasRightLabel">Shop Cart</h5>
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" id="btn-close"></button>
  </div>
  <div className="offcanvas-body">
    <Cart closeoffcanvas={closeoffcanvas}/>
  </div>
</div>
    )
}
export default Cartmenu;