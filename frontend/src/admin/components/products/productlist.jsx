import React from "react";
import './products.css';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toolbar } from 'primereact/toolbar';
import imgpath from "../../../services/folderpath/folderpath";
const ProductList=(props) =>{
  const { dt,tabebodydata,handleClearFilter,serialNumberTemplate,loading,first,rows,onPage,totalRecords,globalFilter,onGlobalFilter,
    handleOpenModal,handleEditModal,
    handlesubjectlistEditModal,handleDelete}=props
        const endtemplate = (
          <>
      
          <div className='d-flex justify-content-end flex-wrap gap-1'>
            
            <button onClick={()=>handleOpenModal('newform')} className='btn btn-primary'><i className="fa-solid fa-plus"></i> New</button>
            <button onClick={()=>handleOpenModal('importform')} className='btn btn-primary'><i className="fa-solid fa-cloud-arrow-up"></i> Import</button>
             <button onClick={handleClearFilter} className='btn btn-primary'><i className="fa-solid fa-filter"></i> Clear Filter</button>
            <span className="p-input-icon-left">
              <input type="input" className="form-control" placeholder="Global Filter"  onChange={onGlobalFilter}/>
            </span>
          </div>
          </>
        );
         const ActionTemplate=(rowData)=>(
            <>
            <div className="dropdown z-0">
              <a className="text-dark" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             <i className="fa-solid fa-ellipsis-vertical"></i>
             </a>
            <ul className="dropdown-menu dropdown-menu-end">
                <li><a className="dropdown-item fw-400" href="#" onClick={()=>handleEditModal(rowData)}><i className="fa-solid fa-pen-to-square me-3"></i>Edit</a></li>
                <li><a className="dropdown-item fw-400" href="#" onClick={()=>handleDelete(rowData)}><i className="fa-solid fa-trash me-3"></i>Delete</a></li>
           </ul>
          </div>
            </>
         );
         const imageBodyTemplate = (product) => {
          return <img src={`${imgpath()}/public/${product.Product_Img}`} alt={product.Product_Img} className="img-fluid shadow-2 rounded" height="100" width="100"/>;
      };
        return (
        <section>
          <div className="container-fluid">
            <div className="row">
            <div className="col-md-12 mt-5">
              <div className="card">
                <div className="card-body">
              <Toolbar className="mb-0 border-0 bg-white"  end={endtemplate}></Toolbar>
              <DataTable ref={dt}  value={tabebodydata} dataKey="id" paginator showGridlines rows={rows} rowsPerPageOptions={[10, 25, 50,100,500,1000]}
               size={'small'}
               scrollable 
               scrollHeight="550px"
               emptyMessage="No records found"
               paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
               currentPageReportTemplate="Showing {first} to {last} of {totalRecords} records"
               loading={loading}
               lazy
               responsive="true"
               first={first}
               onPage={onPage}
               totalRecords={totalRecords}
               globalFilter={globalFilter}
               >
                <Column field="Action" header="Action" body={ActionTemplate}/>
                <Column field="Index" header="S.No" body={serialNumberTemplate}/>
                <Column field="Product_Name" header="Name"/>
                <Column field="Product_Img" header="Image" body={imageBodyTemplate}/>
                <Column field="Category" header="Category"/>
                <Column field="Regular_Price" header="Regular Price"/>
                <Column field="Sale_Price" header="Sale Price"/>
                <Column field="Stock" header="Stock"/>
                <Column field="Description" header="Description"/>
                <Column field="Status" header="Status"/>
              </DataTable>
              </div>
            </div>
          </div>
          </div>
          </div>
        
        </section>
        )
}
export default ProductList;