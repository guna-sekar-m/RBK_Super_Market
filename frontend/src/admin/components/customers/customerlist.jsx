import React from "react";
import './customers.css';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toolbar } from 'primereact/toolbar';
const Customerlist=(props)=>{
    const { dt,tabebodydata,handleClearFilter,serialNumberTemplate,loading,first,rows,onPage,totalRecords,globalFilter,onGlobalFilter,
        handleOpenModal,handleEditModal,
        handlesubjectlistEditModal,handleDelete}=props
        const endtemplate = (
            <>
        
            <div className='d-flex justify-content-end flex-wrap gap-1'>
              
              <button onClick={()=>handleOpenModal('newform')} className='btn btn-primary'><i className="fa-solid fa-plus"></i> New</button>
              <button onClick={()=>handleOpenModal('importform')} className='btn btn-primary d-none'><i className="fa-solid fa-cloud-arrow-up"></i> Import</button>
               <button onClick={handleClearFilter} className='btn btn-primary'><i className="fa-solid fa-filter"></i> Clear Filter</button>
              <span className="p-input-icon-left">
                <input type="input" className="form-control" placeholder="Global Filter"  onChange={onGlobalFilter}/>
              </span>
            </div>
            </>
          );
           const ActionTemplate=(rowData)=>(
              <>
              <div className="dropdown">
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
    return(
      <section>
          <div className="container-fluid">
            <div className="row">
            <div className="col-md-12">
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
                <Column field="name" header="Name" ></Column>
                <Column field="email" header="Email"></Column>
                <Column field="phone" header="Phone"></Column>
                <Column field="address" header="Address"></Column>
                <Column field="city" header="City"></Column>
                <Column field="state" header="State"></Column>
                <Column field="country" header="Country"></Column>
                <Column field="postal_code" header="Postal Code"></Column>
                <Column field="status" header="status"></Column>
              </DataTable>
              </div>
            </div>
          </div>
        
        </section>
     )
}
export default Customerlist;