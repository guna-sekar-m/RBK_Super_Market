import React,{useState,useEffect} from 'react';
import MainView from './mainview';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import LogoSpinner from '../../modules/logospinner/Logospinner';
import { getwebsettings } from '../../services/apisettings/apisettings';
const Main = () =>{
  const [isspinnerLoading, setisspinnerLoading] = useState(true);
  const [websetting,setwebsetting]=useState({});
  let isMounted=true;
  useEffect(() => {
    if(isMounted){
      getwebsettingvdata();
    }
   return () => {
    isMounted = false;
    }
  },[]);

  const getwebsettingvdata=async()=>{
    var res=await getwebsettings();
    setwebsetting(res.data);
    document.title = res.data&&res.data.website_name?res.data.website_name:'';
    setisspinnerLoading(false);
  }
return (
  <div className="Main" data-testid="Main">
   {isspinnerLoading?<LogoSpinner/>:(
    <>
    <Header websetting={websetting}/>
    <MainView />
    <Footer />
    </>
  )}
   </div>
);
};

export default Main;
