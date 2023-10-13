<?php

namespace App\Http\Controllers;

use App\Models\Orders;
use App\Models\OrderMaster;
use App\Models\User;
use App\Models\Products;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Schema;
use App\Mail\InvoiceMail;
use PDF;
class OrderController extends Controller
{


    public function getallorders(Request $request)
    {
        $params = $request->only(['first', 'rows', 'globalFilter']);
        $first = $params['first'] ?? 0;
        $rows = $params['rows'] ?? 10;
        $globalFilter = $params['globalFilter'] ?? '';
    
        $tableColumns = Schema::getColumnListing('order_masters');
        $filter = [];
        if ($globalFilter !== '') {
            $filter = array_filter($tableColumns, function ($field) {
                return $field !== 'id' && $field !== 'created_at' && $field !== 'updated_at';
            });
    
            $query = OrderMaster::query();
            foreach ($filter as $field) {
                $query->orWhere($field, 'like', "%{$globalFilter}%");
            }
        } 
        else {
            $query = OrderMaster::query();
        }
        $totalLengthQuery = clone $query;// Create a clone of the query for counting total records
        $response = $query->skip($first)->take($rows)->get();
        $totalLength = $totalLengthQuery->count();
    
        return response()->json(['data' => $response, 'totalLength' => $totalLength]);
    }


    public function saveorders(Request $request){
        $reqdata=$request->all();
        $reqdata['ordermaster']['order_status']='Order Placed';
        $orderMaster=OrderMaster::create($reqdata['ordermaster']);
        foreach ($reqdata['orders'] as $orderData) {
            $orderData['order_id'] = $orderMaster->order_id;
            $order = Orders::create($orderData);
            $product = Products::find($orderData['id']);
        if ($product) {
            // Assuming you have a column named 'quantity' in the 'Products' table
            $product->Stock -= $orderData['Quantity'];
            $product->save();
        }
        }
        if ($orderMaster && $order) {
        $orderMasterdata=OrderMaster::where('order_id',$orderMaster->order_id)->first();
        $ordersdata=Orders::where('order_id',$orderMaster->order_id)->get();
        \Mail::to("saranraj@muhabalab.com")->send(new InvoiceMail($orderMasterdata,$ordersdata));
        return response()->json(['data' => 'Successfully Order Placed']);
        }
        else {
            // If order creation fails
            return response()->json(['error' => 'Failed to place the order'], 200);
        }
    }
    public function updateordermaster(Request $request){
        $id=$request->input('id');
        $OrderMaster = OrderMaster::findOrFail($id);
        $OrderMaster->update($request->all());
        $totalLength = OrderMaster::count();
        return response()->json(['data' => $OrderMaster,'totalLength' => $totalLength,'message'=>'success']);
    }

    public function show(Request $request)
    {
        $decodedToken = $request->jwt;
        $userId = $decodedToken->sub;
        $orders = Orders::where('user_id',$userId)->get();
        return response()->json(['data' =>  $orders]);
    }
    public function getordersmasterbyuserid(Request $request)
    {
        $decodedToken = $request->jwt;
        $userId = $decodedToken->email;
        $orders = OrderMaster::where('user_id',$userId)->latest()->get();
        return response()->json(['data' =>  $orders]);
    }
    public function orderview(Request $request)
    {
        $ordersmaster = OrderMaster::where('order_id',$request->query('id'))->get();
        $orders = Orders::where('order_id',$request->query('id'))->get();
        return response()->json(['ordersmaster' =>  $ordersmaster,'orders'=>$orders]);
    }


  
}
