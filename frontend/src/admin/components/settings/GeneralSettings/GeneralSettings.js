import React,{useState,useEffect} from 'react';
import './GeneralSettings.css';
import GeneralsettingForm from './GeneralsettingForm';
import { ToastContainer, toast } from 'react-toastify';
import { getwebsettings,updatewebsettings } from '../../../services/apisettings/apisettings';
const GeneralSettings = () =>{
  const [websetting,setwebsetting]=useState({});
  let isMounted=true;
  useEffect(()=>{
    if(isMounted){
      getgeneralwebsetting();
    }
    return () => {
      isMounted = false;
    }
  },[])
  const getgeneralwebsetting=async()=>{
    var res=await getwebsettings();
    setwebsetting(res.data)
  }
  const changewebsettingHandler = e => {
    const file = e.target.files?e.target.files[0]:'';
    var value=file?file:e.target.value;
    setwebsetting({...websetting,[e.target.name]:value});
   }
   const Updatewebsetting=async(event)=>{
      event.preventDefault();
      var res=await updatewebsettings(websetting);
      if(res.message=='success'){
      toast.success('Successfully data updated to the database');
     
      }
      else{
      toast.error('Data not updated to the database');
      };
   }
  return(
  <div className="GeneralSettings" data-testid="GeneralSettings">
   <ToastContainer/>
   <GeneralsettingForm  websetting={websetting} changewebsettingHandler={changewebsettingHandler} Updatewebsetting={Updatewebsetting}/>
  </div>
)};

export default GeneralSettings;
