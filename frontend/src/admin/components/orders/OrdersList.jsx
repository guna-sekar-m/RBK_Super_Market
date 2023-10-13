import React from "react";
import { NavLink } from "react-router-dom";
import './orders.css';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toolbar } from 'primereact/toolbar';
const OrdersList=(props)=>{
    const { dt,tabebodydata,handleClearFilter,serialNumberTemplate,loading,first,rows,onPage,totalRecords,globalFilter,onGlobalFilter,
        handleOpenModal,handleEditModal,
        handlesubjectlistEditModal,handleDelete}=props
        const endtemplate = (
            <>
        
            <div className='d-flex justify-content-end flex-wrap gap-1'>

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
                  <li><a className="dropdown-item fw-400" href="#" onClick={()=>handleEditModal(rowData)}><i className="fa-solid fa-pen-to-square me-3 text-primary"></i>Edit</a></li>
                  <li><NavLink className="dropdown-item fw-400" href="#" to={`/admin/orderdetails/${rowData.order_id}`}><i className="fa-solid fa-eye me-3 text-primary"></i>View Order</NavLink></li>
             </ul>
            </div>
              </>
           );
          
    return(
      <section>
          <div className="container-fluid">
            <div className="row">
            <div className="col-md-12 mt-5">
            <div className="card">
                <div className="card-body">
              <Toolbar className="mb-0 border-0 bg-white"  end={endtemplate}></Toolbar>
              <DataTable ref={dt} value={tabebodydata} dataKey="id" paginator showGridlines rows={rows} rowsPerPageOptions={[10, 25, 50,100,500,1000]}
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
                <Column field="order_id" header="Order ID"></Column>
                <Column field="order_date" header="Order Date"></Column>
                <Column field="user_id" header="User ID" ></Column>
                <Column field="shipping_name" header="Shipping Name"></Column>
                <Column field="shipping_email" header="Shipping Email"></Column>
                <Column field="shipping_mobile_number" header="Shipping Mobile"></Column>
                <Column field="shipping_address" header="Shipping Address"></Column>
                <Column field="order_status" header="Order Status"></Column>
                <Column field="payment_id" header="Payment ID"></Column>
                <Column field="payment_type" header="Payment Type"></Column>
                <Column field="payment_mode" header="Payment Mode"></Column>
                <Column field="payment_status" header="Payment Status"></Column>
                <Column field="delivery_instructions" header="Delivery Instructions"></Column>
                
              </DataTable>
              </div>
              </div>
              </div>
            </div>
          </div>
        
        </section>
     )
}
export default OrdersList;