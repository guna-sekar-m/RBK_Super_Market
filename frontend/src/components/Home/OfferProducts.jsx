import React from "react";
import { useCart } from "../../services/Cart/CartContext";
import imgpath from "../../services/folderpath/folderpath";
const OfferProducts=(props)=>{
  const {offerproducts}=props;
  const {handleAddToCart} = useCart();
  return(
    <div className="container" >
        <div className="row">
            <div className="col-md-12">
             <h4>Top Offers</h4>
            </div>
        </div>
        <div className="row g-4 row-cols-lg-4 row-cols-xl-5 row-cols-1 row-cols-md-2 mt-1 mb-lg-5">
        {offerproducts.map((item,index) => (
          <div className="col" key={index}>
            <div className="card card-product h-100">
              <div className="card-body">
                <div className="text-center position-relative"> 
                <div className=" position-absolute top-0 start-0">
                    <span className={item.Status=="Stockout"||item.Stock==0?"badge bg-danger":"badge bg-success"}>{item.Status=="Stockout"||item.Stock==0?'Stockout':'Sale'}</span>
                  </div>
                <a href="#!"><img  src={item.Product_Img?`${imgpath()}/public/${item.Product_Img}`:"empty.jpg"} alt="Grocery Ecommerce Template" className="mb-3 img-fluid"/></a>
                  <div className="card-product-action d-none">
                    <a href="#!" className="btn-action text-decoration-none me-1" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                        <i className="fa-regular fa-eye" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Quick View" data-bs-original-title="Quick View"></i></a>
                    <a href="../pages/shop-wishlist.html" className="btn-action text-decoration-none" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Wishlist" data-bs-original-title="Wishlist">
                        <i className="fa-regular fa-heart"></i></a>
                  
                  </div>
                </div>
                <div className="text-small mb-1"><a href="#!" className="text-decoration-none text-muted"><small>{item.Category?item.Category:'-'}</small></a></div>
                <h2 className="fs-6"><a href="#!" className="text-inherit text-decoration-none">{item.Product_Name} </a></h2>
                <div className="text-warning d-none">

                  <small> <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-half"></i></small> <span className="text-muted small">4.5 (67)</span>
                </div>
                
              </div>
              <div className="card-footer d-flex justify-content-between align-items-center bg-white border-top-0">
                  <div><span className="text-dark fw-bold">₹{item.Sale_Price?item.Sale_Price:0}</span> <span className="text-decoration-line-through text-muted">₹{item.Regular_Price?item.Regular_Price:0}</span>
                  </div>
                  <div>
                    {item.Status=="Stockout"||item.Stock==0? '':(
                    <a  className="btn btn-primary btn-sm" onClick={()=>handleAddToCart({id:item.id,Product_Name:item.Product_Name,Product_Img:item.Product_Img,Quantity:1,Sale_Price:item.Sale_Price?item.Sale_Price:0})}>
                  <i className="fa-solid fa-plus"></i> Add</a>
                   )}
                  </div>
                </div>
            </div>
            
          </div>
           ))}
        </div>
    </div>
  )
}
export default OfferProducts;