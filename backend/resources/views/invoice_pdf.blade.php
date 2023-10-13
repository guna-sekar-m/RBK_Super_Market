<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>How To Generate Invoice PDF In Laravel 9 - Techsolutionstuff</title>
</head>
<style>
    body{
        font-family: 'Roboto Condensed', sans-serif;
    }
    .m-0{
        margin: 0px;
    }
    .p-0{
        padding: 0px;
    }
    .pt-5{
        padding-top:5px;
    }
    .mt-10{
        margin-top:10px;
    }
    .text-center{
        text-align:center !important;
    }
    .w-100{
        width: 100%;
    }
    .w-50{
        width:50%;   
    }
    .w-85{
        width:85%;   
    }
    .w-15{
        width:15%;   
    }
    .logo img{
        width:200px;
        height:60px;        
    }
    .gray-color{
        color:#5D5D5D;
    }
    .text-bold{
        font-weight: bold;
    }
    .border{
        border:1px solid black;
    }
    table tr,th,td{
        border: 1px solid #d2d2d2;
        border-collapse:collapse;
        padding:7px 8px;
    }
    table tr th{
        background: #F4F4F4;
        font-size:15px;
    }
    table tr td{
        font-size:13px;
    }
    table{
        border-collapse:collapse;
    }
    .box-text p{
        line-height:10px;
    }
    .float-left{
        float:left;
    }
    .total-part{
        font-size:16px;
        line-height:12px;
    }
    .total-right p{
        padding-right:20px;
    }
</style>
<body>
<div class="head-title">
    <h1 class="text-center m-0 p-0">Invoice</h1>
</div>
<div class="add-detail mt-10">
    <div class="w-50 float-left mt-10">
    
        <p class="m-0 pt-5 text-bold w-100">Order Id - <span class="gray-color">{{$orderMaster->order_id}}</span></p>
        <p class="m-0 pt-5 text-bold w-100">Order Date - <span class="gray-color">{{$orderMaster->order_date}}</span></p>
    </div>
    <div class="w-50 float-left logo mt-10">
        <img src="{{ asset('logo/logo.png') }}" alt="Logo" height="50">
    </div>
    <div style="clear: both;"></div>
</div>
<div class="table-section bill-tbl w-100 mt-10">
    <table class="table w-100 mt-10">
        <tr>
            <th class="w-50">From</th>
            <th class="w-50">To</th>
        </tr>
        <tr>
            <td>
                <div class="box-text">
                  <p className="card-text">RBK Super Market</p>
                  
                </div>
            </td>
            <td>
                <div class="box-text">
                <p className="card-text">{{$orderMaster->shipping_name}}</p>
                   <p>{{$orderMaster->shipping_address}}</p>
                   <p className="card-text"><b className="fw-semibold">Email</b> {{$orderMaster->shipping_email}}</p>
                   <p><b className="fw-semibold">Mobile number</b> {{$orderMaster->shipping_mobile_number}}</p>
                </div>
            </td>
        </tr>
    </table>
</div>
<div class="table-section bill-tbl w-100 mt-10">
    <table class="table w-100 mt-10">
        <tr>
            <th class="w-50">Payment Method</th>
            <th class="w-50">Shipping Method</th>
        </tr>
        <tr>
            <td>{{$orderMaster->payment_mode}}</td>
            <td>Shipping Cost - <span style="font-family: DejaVu Sans; sans-serif;">&#8377;</span>{{$orderMaster->shipping_cost}}</td>
        </tr>
    </table>
</div>
<div class="table-section bill-tbl w-100 mt-10">
    <table class="table w-100 mt-10">
        <tr>
            <th className="w-10">#</th>
            <th className="w-50">Product Name</th>
            <th className="w-50">Quantity</th>
            <th className="w-50">Price</th>
            <th className="w-50">Total</th>
        </tr>
 
        @foreach($orders as $index => $item)
        <tr>
            <td>{{ $index + 1}}</td>
            <td>{{ $item['Product_Name'] }}</td>
            <td>{{ $item['Quantity'] }}</td>
            <td><span style="font-family: DejaVu Sans; sans-serif;">&#8377;</span>{{ $item['Sale_Price'] }}</td>
            <td><span style="font-family: DejaVu Sans; sans-serif;">&#8377;</span>{{ intval($item['Sale_Price']) * intval($item['Quantity']) }}</td>
          </tr>
        @endforeach
        <tr>
            <td colspan="7">
                <div class="total-part">
                    <div class="total-left w-85 float-left" align="right">
                       <p>Sub Total</p>
                        <p>Shipping Cost</p>
                        <p>Total Payable</p>
                    </div>
                    <div class="total-right w-15 float-left text-bold" align="right">
                    <p><span style="font-family: DejaVu Sans; sans-serif;">&#8377;</span>{{$orderMaster->total_amount}}</p>
                       <p><span style="font-family: DejaVu Sans; sans-serif;">&#8377;</span>{{$orderMaster->shipping_cost}}</p>
                        <p><span style="font-family: DejaVu Sans; sans-serif;">&#8377;</span>{{ $orderMaster->total_amount+$orderMaster->shipping_cost }}</p>
                    </div>
                    <div style="clear: both;"></div>
                </div> 
            </td>
        </tr>
    </table>
</div>
</html>