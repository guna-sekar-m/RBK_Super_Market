import React,{useState} from 'react';
import PropTypes from 'prop-types';
import './Footer.css';
import FooterView from './FooterView';
import MobileFooter from './Mobilefooter';
import AccountForm from '../Header/AccountForm';
const Footer = () =>{ 
  const [accountform,setaccountform]=useState(true);
  const [showModal, setShowModal] = useState({show:false,modelname:''});
  const handleCloseModal = () => {
    setShowModal({show:false});
  };
  const accountformshoworhide=()=>{
    setaccountform(!accountform)
  }
  const handleOpenModal = (e) => {
    setaccountform(true);
    setShowModal({show:true,modelname:e});
  };
  const handleCollapse = () => {
    var nav = document.getElementById("header01");
    var btn = document.getElementById("navbarBtn");
    nav.classList.remove("show");
    btn.classList.add("collapsed");
  };
  return(
  <div className="Footer pt-5 mt-5" data-testid="Footer">
   <FooterView/>
    <div className="pt-5">
   <MobileFooter handleOpenModal={handleOpenModal} handleCollapse={handleCollapse}/>
   </div>
   <AccountForm showModal={showModal} handleCloseModal={handleCloseModal} accountform={accountform} accountformshoworhide={accountformshoworhide}/>
  </div>
)};

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
