<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\ShippingAddress;
use Illuminate\Http\Request;

class AccountController extends Controller
{


    //users

    public function show(Request $request)
    {
        $decodedToken = $request->jwt;
        $userId = $decodedToken->sub;
        $user = User::find($userId);
        return response()->json(['data' =>  $user]);
    }

    public function updateuserdetails(Request $request)
    {
        $id=$request->input('id');
        $User = User::findOrFail($id);
        $User->update($request->all());
        return response()->json(['data' => $User,'message'=>'success']);
    }
    //shipping address
    public function getshippingaddress(Request $request){
        $decodedToken = $request->jwt;
        $userId = $decodedToken->email;
        $shipaddress=ShippingAddress::where('user_id', $userId)->get();
        return response()->json(["data"=>$shipaddress]);

    }
    public function saveshippingaddress(Request $request)
    {
        $decodedToken = $request->jwt;
        $userId = $decodedToken->email;
        $request->merge(['user_id' => $userId]);
        $ress=ShippingAddress::create($request->all());
        return response()->json(['data' => $ress]);
    }
    public function updateshippingaddress(Request $request)
    {
        $id=$request->input('id');
        $User = ShippingAddress::findOrFail($id);
        $User->update($request->all());
        return response()->json(['data' => $User,'message'=>'success']);
    }
    public function deleteshippingaddress(Request $request)
    {
        $id=$request->input('id');
        $product = ShippingAddress::findOrFail($id);
        $product->delete();
        return response()->json(['message'=>'success']);
    }
  
  
}
