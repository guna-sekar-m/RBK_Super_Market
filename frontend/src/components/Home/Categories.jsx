import React from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css';
import Slider from 'react-slick';
import imgpath from '../../services/folderpath/folderpath';
const Categories = ({category}) =>{
  const NextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <i className="fa-solid fa-arrow-right"></i>
      </div>
    );
  };
  
  const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
       <i className="fa-solid fa-arrow-right"></i>
      </div>
    );
  };
  
  const settings = {
    slidesToShow: 7,
    slidesToScroll: 1,
    centerMode: true,
    infinite: category.length>=7?true:false,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,

        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          centerMode: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
    ],
  };
  return (
    <>
   <section className="Categories-section mb-3">
      <div className="container">
        <div className="card border-0 bg-white h-100 ">
          <div className="card-body">
            <h4 className="card-title pb-3">Categories</h4>
            <Slider {...settings}>
              {category.map((data, index) => (
                <NavLink className="card card-product text-decoration-none slider-card" key={index} to={`/shop?c=${data.Category_Name}`}>
                  <div className="card-body text-center">
                    <img
                      src={data.Category_img?`${imgpath()}/public/${data.Category_img}`:"empty.jpg"}
                      alt="Grocery Ecommerce Template"
                      className="mb-3 img-fluid slider-image text-center"
                    
                    />
                    <div className="text-truncate">
                      {data.Category_Name ? data.Category_Name : "-"}
                    </div>
                  </div>
                </NavLink>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>

 <section className='mb-5'>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 mb-3 mb-lg-0">
            <div>
              <div className="py-5 px-4 bg-white rounded info-1">
                <div>
                  <h3 className="fw-bold mb-1">Fruits &amp; Vegetables
                  </h3>
                  <p className="mb-4"></p>
                  <NavLink href="#!" className="btn btn-dark" to={'/shop'}>Shop Now</NavLink>
                </div>
              </div>

            </div>

          </div>
          <div className="col-12 col-md-6 ">

            <div>
              <div className="py-5 bg-white px-4 rounded info-2" >
                <div>
                  <h3 className="fw-bold mb-1">Freshly Baked
                    Buns
                  </h3>
                  <p className="mb-4"></p>
                  <NavLink href="#!" className="btn btn-dark" to={'/shop'}>Shop Now</NavLink>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
 </>
)};

export default Categories;
