import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import { useAuth } from '../../services/LoginContext/LoginContext';
import { useCart } from '../../services/Cart/CartContext';
import imgpath from '../../services/folderpath/folderpath';
const Navbar = (props) => {
const {typeaheadRef,typeaheadRef1,websetting,handleSuggestion,searchInput,suggestions,isLoading,handleSearch,handleOpenModal,handleCollapse}=props;
const { isLoggedIn } = useAuth();
const { cartItems} = useCart();
return (

<nav className="navbar navbar-expand-lg">
    <div className="container">
      <NavLink className="navbar-brand" href="#" to={'/home'} onClick={handleCollapse}>
      <img src={`${imgpath()}/storage/app/public/${websetting.logo}`} alt="Logo" height="50" class="d-inline-block align-text-top"/>
      
      </NavLink>
      <button className="navbar-toggler bg-white d-none" id="navbarBtn" type="button"  data-bs-toggle="collapse" data-bs-target="#header01" aria-controls="header01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

     
      <div className="collapse navbar-collapse" id="header01">
          
      <div className="d-lg-flex mt-3 mt-lg-0 mb-3 mb-lg-0  mx-4 d-none d-lg-block w-100 input-group">
      <AsyncTypeahead  id="async-example" ref={typeaheadRef} isLoading={isLoading} labelKey="Product_Name" minLength={1} onSearch={handleSuggestion} options={suggestions} placeholder="Search for a products..."
      renderMenuItemChildren={(option) => (
        <div onClick={() => handleSearch(option)}>
        <span><img src={`${imgpath()}/public/${option.Product_Img}`} alt={option.Product_Img} className="shadow-2 rounded" height="50"/>{option.Product_Name}</span>
      </div>
      )}
     />
      </div>
        <ul className="navbar-nav">
          <li className="nav-item me-4"><NavLink to="/home" className="nav-link" onClick={handleCollapse}>Home </NavLink></li>
          <li className="nav-item me-4"><NavLink to="/shop" className="nav-link" onClick={handleCollapse}><i className="fa-solid fa-basket-shopping"></i></NavLink></li>
          {!isLoggedIn?
          <li className="nav-item me-4">
          <a
            className="nav-link"
            role="button"
            onClick={() => {handleOpenModal('accountform');handleCollapse()}}
          >
            Login
          </a>
        </li>
          : <li className="nav-item me-4"><NavLink className="nav-link" role="button" to={'/account'} onClick={handleCollapse}>Account</NavLink></li>
          }
          <li className="nav-item me-4 ">
          <a className="position-relative nav-link" href="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
            <i className="fa-solid fa-cart-shopping"></i>
           {cartItems&&cartItems!=0? <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cartItems.length}</span>:false}
          </a>
          </li>
        </ul>
        
      </div>
      <div className="d-lg-flex mt-3 mt-lg-0 mb-lg-3 mb-lg-0 d-block d-lg-none form-group w-100">
      <AsyncTypeahead  id="async-example" ref={typeaheadRef1} isLoading={isLoading} labelKey="Product_Name" minLength={1} onSearch={handleSuggestion} options={suggestions} placeholder="Search for a products..."
      renderMenuItemChildren={(option) => (
        <div onClick={() => handleSearch(option)}>
        <span><img src={`${imgpath()}/public/${option.Product_Img}`} alt={option.Product_Img} className="shadow-2 rounded" height="50"/>{option.Product_Name}</span>
      </div>
      )}
     />
    </div>
    </div>
  </nav>


  )};
  export default Navbar;
