import React,{useState,useEffect,useRef} from 'react';
import './Account.css';
import UserProfile from './UserProfile';
import { ToastContainer, toast } from 'react-toastify';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { getordersmasterbyuserid } from "../../services/apiorders/apiorders";
import { getuserbyuserid,updateuserdetails,getshippingaddress,saveshippingaddress,updateshippingaddress,deleteshippingaddress} from "../../services/apiaccount/apiaccount";
import axios from 'axios';
import { Modal } from 'bootstrap';
import Spinner from '../../modules/spinner/Spinner';
const Account = () =>{ 
  const [ordersdata,setordersdata]=useState([]);
  const [settings,setsettings]=useState([]);
  const [shippingaddress,setshippingaddress]=useState([]);
  const [formdata,setformdata]=useState({});
  const [isspinnerLoading, setisspinnerLoading] = useState(true);
  const modalRef = useRef();
  let isMounted=true;
  useEffect(()=>{
    if (isMounted) {
      fetchData();
    }
    return () => {
      isMounted = false;
    };
  },[]);
  const fetchData = async () => {
    try {
      const request1 = await getordersmasterbyuserid();
      const request2 = await getuserbyuserid();
      const request3 = await getshippingaddress();
      const responses = await axios.all([request1, request2,request3]);
      setordersdata(responses[0].data);
      setsettings(responses[1].data);
      setshippingaddress(responses[2].data);
      setisspinnerLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  //forms change handler
  const changeHandler = e => {
    setformdata({...formdata,[e.target.name]:e.target.value});
   }
   const settingchangeHandler = e => {
    setsettings({...settings,[e.target.name]:e.target.value});
   }
   //user details
  const UpdateUserdetails=async(event)=>{
    event.preventDefault();
    var res=await updateuserdetails(settings);
      if(res.message==='success'){

        toast.success("Data has been updated successfully")
        }
        else{
        toast.error('Data not updated to the database');
        };
  }
   //address
  const SaveShippingAddress=async(event)=>{
    event.preventDefault();
    if(formdata.id){
      var res=await updateshippingaddress(formdata);
      if(res.message==='success'){
        var index=shippingaddress.findIndex(d=>d.id===res.data.id);
        shippingaddress[index] = res.data;
        setshippingaddress([...shippingaddress]);
        setformdata({});
        toast.success("Data has been updated successfully")
        handleaddressclosemodal();
    
        }
        else{
        toast.error('Data not updated to the database');
        handleaddressclosemodal();
        };
    }
    else{
      var res=await saveshippingaddress(formdata);
      setshippingaddress(currentArray => [res.data, ...currentArray]);
      setformdata({});
      toast.success("Data has been saved successfully")
      handleaddressclosemodal();
    }


  }
  
  const editaddressopenmodal=(data)=>{
    setformdata({});
    setformdata(data);
  }
  const UpdateShippingAddress=async(event)=>{
    event.preventDefault();
    var res=await updateshippingaddress(formdata);
    if(res.message==='success'){
      var index=shippingaddress.findIndex(d=>d.id===res.data.id);
      shippingaddress[index] = res.data;
      setshippingaddress([...shippingaddress]);
      toast.success("Data has been updated successfully")
      handleaddressclosemodal();
  
      }
      else{
      toast.error('Data not updated to the database');
      handleaddressclosemodal();
      };
  }

  const accept = async(data) => {
    var res=await deleteshippingaddress({id:data.id});
    if(res.message=='success'){
      setshippingaddress((prevItems) => prevItems.filter(item => item.id !== data.id));
      toast.success('Successfully data deleted to the database');
    }
    else{
      toast.error('Data not deleted to the database');
    };
   }
  
   const DeleteShippingAddress=async(data)=>{
    confirmDialog({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      acceptClassName: 'p-button-danger',
      accept:() => accept(data),
    });
   }
   

const handleaddressopenmodal=()=>{

  if (modalRef.current) {
    const modal = new Modal(modalRef.current);
    modal.show();
    setformdata({});
  }
}
const handleaddressclosemodal=()=>{
  setformdata({});
  if (modalRef.current) {
    const modal = Modal.getInstance(modalRef.current);
    if (modal) {
      modal.hide();
    }
  }
}

  const handleCheckoutClick = () => {
    document.getElementById('btn-close1').click();
  };
  
  return (
  <div className="Account" data-testid="Account">
    <ToastContainer/>
    <ConfirmDialog />
    {isspinnerLoading ?<Spinner />: <UserProfile 
    handleCheckoutClick={handleCheckoutClick} 
    //orders data
    ordersdata={ordersdata}
    //user details
    settings={settings} 
    settingchangeHandler={settingchangeHandler}
    UpdateUserdetails={UpdateUserdetails}
    //address
    formdata={formdata} 
    changeHandler={changeHandler} 
    modalRef={modalRef}
    shippingaddress={shippingaddress}
    handleaddressopenmodal={handleaddressopenmodal}
    handleaddressclosemodal={handleaddressclosemodal}
    SaveShippingAddress={SaveShippingAddress}
    editaddressopenmodal={editaddressopenmodal}
    DeleteShippingAddress={DeleteShippingAddress}
    UpdateShippingAddress={UpdateShippingAddress}
    />}
  </div>
)};

export default Account;
