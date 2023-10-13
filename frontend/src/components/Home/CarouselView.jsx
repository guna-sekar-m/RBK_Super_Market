import React from 'react';
import './Home.css';
import imgpath from '../../services/folderpath/folderpath';
const CarouselView = (props) =>{ 
  const {banner}=props
  return(

    <>
 <section className='hero-section'>
 <div className="container">
    <div className="row align-items-center mb-4">
      <div className="col-md-12">
        <div className="card border-0 bg-white">
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
  {banner.map((item,index)=>  
  <button type="button" key={index} data-bs-target="#carouselExampleIndicators" data-bs-slide-to={index} className="active" aria-current="true" aria-label="Slide 1"></button>
  )}
    
  </div>
  <div className="carousel-inner">

    {banner.map((item,index)=> 
    <div className={`carousel-item ${index==0?'active':''}`} key={index}>
        <img src={`${imgpath()}/storage/app/public/${item.banner_image}`} className="d-block w-100 h-100" alt="..."/>
      </div>
    )}
  <div className="position-absolute carousel-content p-5">

<span class="badge text-bg-warning">Wholesale Price</span>

<h2 class="text-dark display-5 fw-bold mt-4">SuperMarket For Fresh Grocery </h2>
<p class="lead">Introduced a new model for online grocery shopping
  and convenient home delivery.</p>
<a href="#!" class="btn btn-dark mt-3" tabindex="-1">Shop Now <i class="feather-icon icon-arrow-right ms-1"></i></a>
</div>
  </div>
  <button className="carousel-control-prev d-none" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next d-none" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </div>
      </div>
    </div>
  </div>
 </section>
 </>
)};

export default CarouselView;
