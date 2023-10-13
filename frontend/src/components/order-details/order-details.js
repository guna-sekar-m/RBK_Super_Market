import React,{useState,useEffect,useRef} from 'react';
import { useParams } from 'react-router-dom';
import './order-details.css';
import OrderView from './OrderView';
import Spinner from '../../modules/spinner/Spinner';
import { getorderview } from '../../services/apiorders/apiorders';
import InvoicePdf from './invoicepdf';
import html2pdf from 'html2pdf.js/dist/html2pdf';
const OrderDetails = () =>{
  const {id}=useParams();
  const [isspinnerLoading, setisspinnerLoading] = useState(true);
  const [orderdetails,setorderdetails]=useState({});
  const pdfTemplateRef = useRef(null);
  let isMounted=true;
  useEffect(() => {
    if(isMounted){
    orderviewdata(id);
    }
    return () => {
      isMounted = false;
      }
  }, []);
  const orderviewdata=async(id)=>{
    var res=await getorderview({id});
    setorderdetails(res);
    setisspinnerLoading(false);
  }
  const getCurrentTimeWithSeconds = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
  
    return `${year}${month}${day}_${hours}${minutes}${seconds}`;
  };
  const handleGeneratePdf =() => {
    const element = pdfTemplateRef.current;
    const options = {
      filename: `${id}-${getCurrentTimeWithSeconds()}.pdf`,
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter' },
    };
    html2pdf().set(options).from(element).save();
  };
  return(
  <div className="OrderDetails" data-testid="OrderDetails">
    {isspinnerLoading ?<Spinner />:
    (<><OrderView orderdetails={orderdetails} orderid={id} handleGeneratePdf={handleGeneratePdf}/>
    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
   <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Invoice PDF</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body"></div>
    <div ref={pdfTemplateRef}>
    <InvoicePdf orderdetails={orderdetails} orderid={id}/>
    </div>
    </div>
     
    </div>
  </div></>)}
  </div>
)};



export default OrderDetails;
