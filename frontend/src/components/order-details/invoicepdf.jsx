import React from "react";
import './invoicepdf.css'
const InvoicePdf=({orderdetails,orderid})=>{

return (
    <div className="p-3">
    <div className="head-title">
    <h1 className="text-center m-0 p-0">Invoice</h1>
</div>
<div className="add-detail mt-10">
    <div className="w-50 float-left mt-10">
        <p className="m-0 text-bold w-100">Order Id - <span className="gray-color">{orderid}</span></p>
        <p className="m-0 text-bold w-100">Order Date - <span className="gray-color">{orderdetails['ordersmaster'][0].order_date}</span></p>
    </div>
    <div className="w-50 float-left logo mt-10">
        <img src="https://techsolutionstuff.com/frontTheme/assets/img/logo_200_60_dark.png" alt="Logo"/>
    </div>
    <div className="clearboth"></div>
</div>
<div className="table-section bill-tbl w-100 mt-10">
    <table className="table w-100 mt-10">
        <tr>
            <th className="w-50">From</th>
            <th className="w-50">To</th>
        </tr>
        <tr>
            <td>
                <div className="box-text">
                 <p className="card-text">RBK Super Market</p>
                </div>
            </td>
            <td>
                <div className="box-text">
                <p className="card-text">{orderdetails['ordersmaster'][0].shipping_name}</p>
                   <p>{orderdetails['ordersmaster'][0].shipping_address}</p>
                   <p className="card-text"><b className="fw-semibold">Email</b> {orderdetails['ordersmaster'][0].shipping_email}</p>
                   <p><b className="fw-semibold">Mobile number</b> {orderdetails['ordersmaster'][0].shipping_mobile_number}</p>
                </div>
            </td>
        </tr>
    </table>
</div>
<div className="table-section bill-tbl w-100 mt-10">
    <table className="table w-100 mt-10">
        <tr>
            <th className="w-50">Payment Method</th>
            <th className="w-50">Shipping Method</th>
        </tr>
        <tr>
            <td>{orderdetails['ordersmaster'][0].payment_mode}</td>
            <td>Shipping Cost - ₹{orderdetails['ordersmaster'][0].shipping_cost}</td>
        </tr>
    </table>
</div>
<div className="table-section bill-tbl w-100 mt-10">
    <table className="table w-100 mt-10">
        <tr>
            <th className="w-10">#</th>
            <th className="w-50">Product Name</th>
            <th className="w-50">Quantity</th>
            <th className="w-50">Price</th>
            <th className="w-50">Total</th>
        
        </tr>

        {orderdetails['orders'].map((item,index)=>
        <tr key={index}>
            <td>{index+1}</td>
            <td>{item.Product_Name}</td>    
            <td>{item.Quantity}</td>
            <td>₹{item.Sale_Price}</td>
            <td>₹{item.Sale_Price*item.Quantity}</td>
        </tr>)}
       
        <tr>
            <td colspan="7">
                <div className="total-part">
                    <div className="total-left w-85 float-left" align="right">
                        <p>Sub Total</p>
                        <p>Shipping Cost</p>
                        <p>Total Payable</p>
                    </div>
                    <div className="total-right w-15 float-left text-bold" align="right">
                       <p>₹{orderdetails['ordersmaster'][0].total_amount}</p>
                       <p>₹{orderdetails['ordersmaster'][0].shipping_cost}</p>
                        <p>₹{orderdetails['ordersmaster'][0].total_amount + orderdetails['ordersmaster'][0].shipping_cost}</p>
                    </div>
                    <div className="clearboth"></div>
                </div> 
            </td>
        </tr>
    </table>
</div>
</div>
);
}
export default InvoicePdf;