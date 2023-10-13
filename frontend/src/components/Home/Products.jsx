import React from 'react';
import './Home.css';

const Products = () => (
    <>
 <section className='products-section mt-4'>
 <div className="container">
    <div className="row align-items-center mb-5">
      <div className="col-md-12">
        <div className="card border-0  bg-white">
        <div className="card-body">
          <h4 className="card-title">Popular Products</h4>
          <div className="row g-4 row-cols-lg-5 row-cols-1 row-cols-md-3 mt-2">
     
          <div className="col">
            <div className="card card-product">
              <div className="card-body">
                <div className="text-center position-relative"> 
                <div className=" position-absolute top-0 start-0">
                    <span className="badge bg-danger">Sale</span>
                  </div>
                <a href="./pages/shop-single.html"><img src="empty.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid"/></a>
                  <div className="card-product-action">
                    <a href="#!" className="btn-action text-decoration-none me-1" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                        <i className="fa-regular fa-eye" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Quick View" data-bs-original-title="Quick View"></i></a>
                    <a href="../pages/shop-wishlist.html" className="btn-action text-decoration-none" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Wishlist" data-bs-original-title="Wishlist">
                        <i className="fa-regular fa-heart"></i></a>
                  
                  </div>
                </div>
                <div className="text-small mb-1"><a href="#!" className="text-decoration-none text-muted"><small>Snack &amp;
                      Munchies</small></a></div>
                <h2 className="fs-6"><a href="./pages/shop-single.html" className="text-inherit text-decoration-none">Slurrp
                    Millet Chocolate </a></h2>
                <div className="text-warning">

                  <small> <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-half"></i></small> <span className="text-muted small">4.5 (67)</span>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div><span className="text-dark">$3</span> <span className="text-decoration-line-through text-muted">$5</span>
                  </div>
                  <div><a href="#!" className="btn btn-primary btn-sm">
                  <i className="fa-solid fa-plus"></i> Add</a></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card card-product">
              <div className="card-body">
                <div className="text-center position-relative"> 
                <div className=" position-absolute top-0 start-0">
                    <span className="badge bg-success">14%</span>
                  </div>
                <a href="./pages/shop-single.html"><img src="https://freshcart.codescandy.com/assets/images/products/product-img-4.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid"/></a>
                <div className="card-product-action">
                    <a href="#!" className="btn-action text-decoration-none me-1" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                        <i className="fa-regular fa-eye" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Quick View" data-bs-original-title="Quick View"></i></a>
                    <a href="../pages/shop-wishlist.html" className="btn-action text-decoration-none" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Wishlist" data-bs-original-title="Wishlist">
                        <i className="fa-regular fa-heart"></i></a>
                  
                  </div>
                </div>
                <div className="text-small mb-1"><a href="#!" className="text-decoration-none text-muted"><small>Snack &amp;
                      Munchies</small></a></div>
                <h2 className="fs-6"><a href="./pages/shop-single.html" className="text-inherit text-decoration-none">Slurrp
                    Millet Chocolate </a></h2>
                <div className="text-warning">

                  <small> <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-half"></i></small> <span className="text-muted small">4.5 (67)</span>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div><span className="text-dark">$3</span> <span className="text-decoration-line-through text-muted">$5</span>
                  </div>
                  <div><a href="#!" className="btn btn-primary btn-sm">
                  <i className="fa-solid fa-plus"></i> Add</a></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card card-product">
              <div className="card-body">
                <div className="text-center position-relative"> <a href="./pages/shop-single.html"><img src="https://freshcart.codescandy.com/assets/images/products/product-img-4.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid"/></a>
                <div className="card-product-action">
                    <a href="#!" className="btn-action text-decoration-none me-1" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                        <i className="fa-regular fa-eye" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Quick View" data-bs-original-title="Quick View"></i></a>
                    <a href="../pages/shop-wishlist.html" className="btn-action text-decoration-none" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Wishlist" data-bs-original-title="Wishlist">
                        <i className="fa-regular fa-heart"></i></a>
                  
                  </div>
                </div>
                <div className="text-small mb-1"><a href="#!" className="text-decoration-none text-muted"><small>Snack &amp;
                      Munchies</small></a></div>
                <h2 className="fs-6"><a href="./pages/shop-single.html" className="text-inherit text-decoration-none">Slurrp
                    Millet Chocolate </a></h2>
                <div className="text-warning">

                  <small> <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-half"></i></small> <span className="text-muted small">4.5 (67)</span>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div><span className="text-dark">$3</span> <span className="text-decoration-line-through text-muted">$5</span>
                  </div>
                  <div><a href="#!" className="btn btn-primary btn-sm">
                  <i className="fa-solid fa-plus"></i> Add</a></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card card-product">
              <div className="card-body">
                <div className="text-center position-relative"> <a href="./pages/shop-single.html"><img src="https://freshcart.codescandy.com/assets/images/products/product-img-4.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid"/></a>
                <div className="card-product-action">
                    <a href="#!" className="btn-action text-decoration-none me-1" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                        <i className="fa-regular fa-eye" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Quick View" data-bs-original-title="Quick View"></i></a>
                    <a href="../pages/shop-wishlist.html" className="btn-action text-decoration-none" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Wishlist" data-bs-original-title="Wishlist">
                        <i className="fa-regular fa-heart"></i></a>
                  
                  </div>
                </div>
                <div className="text-small mb-1"><a href="#!" className="text-decoration-none text-muted"><small>Snack &amp;
                      Munchies</small></a></div>
                <h2 className="fs-6"><a href="./pages/shop-single.html" className="text-inherit text-decoration-none">Slurrp
                    Millet Chocolate </a></h2>
                <div className="text-warning">

                  <small> <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-half"></i></small> <span className="text-muted small">4.5 (67)</span>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div><span className="text-dark">$3</span> <span className="text-decoration-line-through text-muted">$5</span>
                  </div>
                  <div><a href="#!" className="btn btn-primary btn-sm">
                  <i className="fa-solid fa-plus"></i> Add</a></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card card-product">
              <div className="card-body">
                <div className="text-center position-relative"> <a href="./pages/shop-single.html"><img src="https://freshcart.codescandy.com/assets/images/products/product-img-4.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid"/></a>
                <div className="card-product-action">
                    <a href="#!" className="btn-action text-decoration-none me-1" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                        <i className="fa-regular fa-eye" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Quick View" data-bs-original-title="Quick View"></i></a>
                    <a href="../pages/shop-wishlist.html" className="btn-action text-decoration-none" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Wishlist" data-bs-original-title="Wishlist">
                        <i className="fa-regular fa-heart"></i></a>
                  
                  </div>
                </div>
                <div className="text-small mb-1"><a href="#!" className="text-decoration-none text-muted"><small>Snack &amp;
                      Munchies</small></a></div>
                <h2 className="fs-6"><a href="./pages/shop-single.html" className="text-inherit text-decoration-none">Slurrp
                    Millet Chocolate </a></h2>
                <div className="text-warning">

                  <small> <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-half"></i></small> <span className="text-muted small">4.5 (67)</span>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div><span className="text-dark">$3</span> <span className="text-decoration-line-through text-muted">$5</span>
                  </div>
                  <div><a href="#!" className="btn btn-primary btn-sm">
                  <i className="fa-solid fa-plus"></i> Add</a></div>
                </div>
              </div>
            </div>
          </div>
         
          
         
        </div>
          </div>
        </div>
        </div>
    </div>
  </div>
 </section>
 
 </>
);

export default Products;
