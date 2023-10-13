<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\AccountController;
use App\Http\Controllers\OrderController;
//Authentication
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/adminlogin', [AuthController::class, 'adminlogin']);

//Customers
Route::get('/allcustomers', [CustomerController::class, 'index']);
Route::post('/newcustomer', [CustomerController::class, 'create']);
Route::post('/insertmanycustomer', [CustomerController::class, 'insertmany']);
Route::put('/updatecustomer', [CustomerController::class, 'update']);
Route::delete('/deletecustomer', [CustomerController::class, 'destroy']);
/*--client--*/
Route::get('/getsuggestion', [ProductController::class, 'suggestion']);
Route::get('/searchproduct', [ProductController::class, 'search']);
Route::get('/getproducts', [ProductController::class, 'getlazy']);
Route::get('/getofferproducts', [ProductController::class, 'getofferproducts']);
//Authorize router
Route::group(['middleware' => 'jwt.auth'], function () {
//orders


//Account
/*--Users--*/
Route::get('/getuserbyuserid', [AccountController::class, 'show']);
Route::put('/updateuserdetails', [AccountController::class, 'updateuserdetails']);
/*--Addresss--*/
Route::get('/getshippingaddress', [AccountController::class, 'getshippingaddress']);
Route::post('/saveshippingaddress', [AccountController::class, 'saveshippingaddress']);
Route::put('/updateshippingaddress', [AccountController::class, 'updateshippingaddress']);
Route::delete('/deleteshippingaddress', [AccountController::class, 'deleteshippingaddress']);
//Products
/*--admin--*/
Route::get('/allproducts', [ProductController::class, 'index']);
Route::post('/newproduct', [ProductController::class, 'create']);
Route::post('/insertmanyproduct', [ProductController::class, 'insertmany']);
Route::post('/updateproduct', [ProductController::class, 'update']);
Route::delete('/deleteproduct', [ProductController::class, 'destroy']);
});