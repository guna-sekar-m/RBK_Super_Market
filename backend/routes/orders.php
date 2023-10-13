<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\OrderController;
Route::group(['middleware' => 'jwt.auth'], function () {
    Route::get('/getallorders', [OrderController::class, 'getallorders']);
    Route::post('/saveorders', [OrderController::class, 'saveorders']);
    Route::get('/getordersmasterbyuserid', [OrderController::class, 'getordersmasterbyuserid']);
    Route::get('/orderview', [OrderController::class, 'orderview']);
    Route::put('/updateordermaster', [OrderController::class, 'updateordermaster']);
    
});
Route::get('invoice', [OrderController::class, 'Invoice']);