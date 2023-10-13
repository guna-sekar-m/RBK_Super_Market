import React,{useState,useEffect,useRef} from 'react';
import './products.css';
import ProductList from './productlist';
import ImportForm from './importform';
import AddForm from './addform';
import * as  XLSX from 'xlsx';
import { ToastContainer, toast } from 'react-toastify';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { allproducts,newproduct,inertmanyproduct,updateproduct,deleteproduct} from '../../services/apiproducts/apiproducts';
import { getsuggestion } from '../../services/apicategory/apicategory';
const Products = () => {
  const [loading, setLoading] = useState(false);
  const [tabebodydata,settabebodydata]=useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [totalRecords, setTotalRecords] = useState(0);
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(10);
  const [globalFilter, setGlobalFilter] = useState('');
  const [showModal, setShowModal] = useState({show:false,modelname:''});
  const [formdata,setformdata]=useState({});

  //category search
  const [isLoading, setIsLoading] = useState(false);
  const [filteredCategory, setfilteredCategory] = useState([]);
  const [categorydata, setcategorydata] = useState({});
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
    var res=await allproducts({first,rows,globalFilter});
    settabebodydata(res.data);
    setTotalRecords(res.totalLength);
    setLoading(false);
 }

  const save=async(event)=>{
     event.preventDefault();
      var res=await newproduct({...formdata,...{Product_Img:selectedFile==null?formdata.Product_Img:selectedFile},...categorydata});
      if(res.message=='success'){
        toast.success('Successfully data saved to the database');
        settabebodydata(currentArray => [res.data, ...currentArray]);
        setTotalRecords(res.totalLength);
        handleCloseModal();
      }
      else{
        toast.error('Data not saved to the database');
        setTotalRecords(res.totalLength);
        handleCloseModal();
      };
  }
 const importfile=async(event)=>{
  event.preventDefault();
  console.log(formdata)
  var res=await inertmanyproduct(selectedFile);
  if(res.data.message=='success'){
    toast.success('Successfully data saved to the database');
    setTotalRecords(res.totalLength);
    handleCloseModal();
  }
  else{
    toast.error('Data not saved to the database');
    setTotalRecords(res.totalLength);
    handleCloseModal();
  }
 }
 const update=async(event)=>{
  event.preventDefault();
  var res=await updateproduct({...formdata,...{Product_Img:selectedFile==null?formdata.Product_Img:selectedFile},...categorydata?categorydata:false});
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
  var res=await deleteproduct({id:data.id});
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
        Product_Name: row[1],
        category: row[5],
       
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
  //search Category
  const searchCategory = async(event) => {
 console.log(event.query)
    setIsLoading(true);
    var res=await getsuggestion({search:event.query})
    setfilteredCategory(res.data);
    setIsLoading(false);

}
const handleCategoryChange = (selectedCategory) => {
  setcategorydata({Category: selectedCategory.Category_Name });
};

return(
  <div className="Products" data-testid="Products">
     
    <AddForm showModal={showModal.modelname=="newform" || showModal.modelname=="editform"?showModal:false} 
    handleCloseModal={handleCloseModal} formdata={formdata} 
    changeHandler={changeHandler} 
    handleImageChange={handleImageChange} 
    handleCategoryChange ={handleCategoryChange }
    save={save} update={update} filteredCategory={filteredCategory} searchCategory={searchCategory} isLoading={isLoading} />
    <ImportForm showModal={showModal.modelname=="importform"?showModal:false} handleCloseModal={handleCloseModal} handleFile={handleFile} importfile={importfile}/>
    <ToastContainer/>
    <ConfirmDialog />
    <ProductList dt={dt} tabebodydata={tabebodydata} 
    handleClearFilter={handleClearFilter} handleFile={handleFile} serialNumberTemplate={serialNumberTemplate}
    loading={loading} first={first} rows={rows} onPage={onPage} totalRecords={totalRecords} globalFilter={globalFilter} onGlobalFilter={onGlobalFilter}
    handleOpenModal={handleOpenModal} handleEditModal={handleEditModal} handlesubjectlistEditModal={handlesubjectlistEditModal} handleDelete={handleDelete}
    />
  </div>
)};

export default Products;
