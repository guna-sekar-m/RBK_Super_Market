import React,{useState,useEffect,useRef} from 'react';
import'./orders.css';
import OrdersList from './OrdersList';
import AddForm from './addform';
import * as  XLSX from 'xlsx';
import { ToastContainer, toast } from 'react-toastify';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { allcategory,savecategory,updatecategory,deletecategory } from '../../services/apicategory/apicategory';
import { allorders,updateordermaster } from '../../services/apiorders/apiorders';
const Orders = () =>{ 
  const [loading, setLoading] = useState(false);
  const [tabebodydata,settabebodydata]=useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [totalRecords, setTotalRecords] = useState(0);
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(10);
  const [globalFilter, setGlobalFilter] = useState('');
  const [showModal, setShowModal] = useState({show:false,modelname:''});
  const [formdata,setformdata]=useState({});;
  const dt = useRef(null);
  let isMounted=true;
  useEffect(() => {
    if(isMounted){
    getdata();
    }
   return () => {
    isMounted = false;
    }
  },[first, rows,globalFilter]);
  
 const getdata=async()=>{
    setLoading(true);
    var res=await allorders({first,rows,globalFilter});
    settabebodydata(res.data);
    setTotalRecords(res.totalLength);
    setLoading(false);
 }

  const save=async(event)=>{
     event.preventDefault();
   
  }

 const update=async(event)=>{
  event.preventDefault();
  var res=await updateordermaster(formdata);
  if(res.message=='success'){
  var index=tabebodydata.findIndex(d=>d.id==res.data.id);
  tabebodydata[index] = res.data;
  settabebodydata([...tabebodydata]);
  setTotalRecords(res.totalLength);
  toast.success('Successfully data updated to the database');
  handleCloseModal();
  }
  else{
  toast.error('Data not updated to the database');
  setTotalRecords(res.totalLength);
  handleCloseModal();
  };
 }
 const accept = async(data) => {
  var res=await deletecategory({id:data.id});
  if(res.message=='success'){
    settabebodydata((prevItems) => prevItems.filter(item => item.id !== data.id));
    setTotalRecords(res.totalLength);
    toast.success('Successfully data deleted to the database');
    handleCloseModal();
  }
  else{
    toast.error('Data not deleted to the database');
    setTotalRecords(res.totalLength);
    handleCloseModal();
  };
 }

 const handleDelete=async(data)=>{
  confirmDialog({
    message: 'Do you want to delete this record?',
    header: 'Delete Confirmation',
    icon: 'pi pi-info-circle',
    acceptClassName: 'p-button-danger',
    accept:() => accept(data),
  });
 }
 const handleFile = (event) => {
  const file = event.target.files[0];
  const fileReader = new FileReader();
  fileReader.onload = async(e) => {
    const data = new Uint8Array(e.target.result);
    const workbook = XLSX.read(data, { type: 'array' });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
    const headers = jsonData[0];

    // Remove the first row from the data array
    const dataArray = jsonData.slice(1);
    
    // Convert the data array to JSON format
    const result = dataArray.map((row) => {
      // Create the final JSON object for the row
      const jsonRow = {
        customer_Name: row[1],
       
      };
    
      return jsonRow;
    });
    console.log(result)
    setSelectedFile(result);
   
  }
  fileReader.readAsArrayBuffer(file);

};


const handleClearFilter=(event)=>{

  setGlobalFilter('');
}

  const generateSerialNumber = (rowIndex) => rowIndex + 1;

  const serialNumberTemplate = (rowData, column) => {
    return generateSerialNumber(column.rowIndex);
  };
  const onPage = (event) => {
    setFirst(event.first);
    setRows(event.rows);
  };
  const onGlobalFilter = (e) => {
    setGlobalFilter(e.target.value);
  };
  const changeHandler = e => {
    setformdata({...formdata,[e.target.name]:e.target.value});
   }
   const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };
  const handleOpenModal = (e) => {
    setformdata({});
    setSelectedFile(null);
    setShowModal({show:true,modelname:e});
  };
  const handleEditModal = (rowData) => {
    setformdata({});
    setSelectedFile(null);
    setShowModal({show:true,modelname:"editform"});
    setformdata(rowData);
  
  };
  const handlesubjectlistEditModal= (rowData) => {
    setformdata({});
    setSelectedFile(null);
    setShowModal({show:true,modelname:"subjectlistform"});
    setformdata(rowData.Subjectlist);
  
  };
  const handleCloseModal = () => {
    setShowModal({show:false});
  };

  return(
  <div className="Orders" data-testid="Orders">
   <AddForm showModal={showModal.modelname=="newform" || showModal.modelname=="editform"?showModal:false} handleCloseModal={handleCloseModal} formdata={formdata} changeHandler={changeHandler} handleImageChange={handleImageChange} save={save} update={update}  />
    <ToastContainer/>
    <ConfirmDialog />
    <OrdersList dt={dt} tabebodydata={tabebodydata} 
    handleClearFilter={handleClearFilter} handleFile={handleFile} serialNumberTemplate={serialNumberTemplate}
    loading={loading} first={first} rows={rows} onPage={onPage} totalRecords={totalRecords} globalFilter={globalFilter} onGlobalFilter={onGlobalFilter}
    handleOpenModal={handleOpenModal} handleEditModal={handleEditModal} handlesubjectlistEditModal={handlesubjectlistEditModal} handleDelete={handleDelete}
    />
  </div>
)};
export default Orders;
