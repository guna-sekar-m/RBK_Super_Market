import React, {useState,useEffect,useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import Navbar from './Navbar';
import AccountForm from './AccountForm';
import Cartmenu from './Cartmenu';
import { getsuggestion } from '../../services/apiproduct/apiproduct';
const Header = ({websetting}) => {
  const navigate=useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [accountform,setaccountform]=useState(true);
  const [suggestions, setSuggestions] = useState([]);
  const [showModal, setShowModal] = useState({show:false,modelname:''});
  const typeaheadRef = useRef(null);
  const typeaheadRef1 = useRef(null);
  const accountformshoworhide=()=>{
    setaccountform(!accountform)
  }
  const handleSuggestion=async(event)=>{
      setIsLoading(true);
      var res=await getsuggestion({search:event.query})
      setSuggestions(res.data);
      setIsLoading(false);
  }
  const handleSearch=async(event)=>{
   navigate(`/shop/${event.id}`)
  }
  const handleOpenModal = (e) => {
    setaccountform(true);
    setShowModal({show:true,modelname:e});
  };
  const handleCloseModal = () => {
    setShowModal({show:false});
  };
  const handleCollapse = () => {
    var nav = document.getElementById("header01");
    var btn = document.getElementById("navbarBtn");
    nav.classList.remove("show");
    btn.classList.add("collapsed");
    typeaheadRef.current.clear();
    typeaheadRef1.current.clear();
  };
  const closeoffcanvas=()=>{
    document.getElementById('btn-close').click();
  }
   
  
  return (
  <>
  
  <header className='sticky-top Header header z-1 py-0' style={{'--header-color': `${websetting.website_general_color}`}} data-testid="Header">
    <Navbar typeaheadRef={typeaheadRef} typeaheadRef1={typeaheadRef1} websetting={websetting} handleSuggestion={handleSuggestion} suggestions={suggestions} isLoading={isLoading} handleSearch={handleSearch} handleOpenModal={handleOpenModal} handleCollapse={handleCollapse}/>
  </header>
    <AccountForm showModal={showModal} handleCloseModal={handleCloseModal} accountform={accountform} accountformshoworhide={accountformshoworhide}/>
    <Cartmenu closeoffcanvas={closeoffcanvas}/>
  
  </>
  );
}

export default Header;
