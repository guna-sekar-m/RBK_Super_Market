<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryController;
//Authorize router
Route::get('/getcategory', [CategoryController::class, 'getcategory']);
Route::group(['middleware' => 'jwt.auth'], function () {

    Route::get('/getallcategory', [CategoryController::class, 'index']);
    Route::post('/savecategory', [CategoryController::class, 'savecategory']);
    Route::post('/updateCategory', [CategoryController::class, 'updateCategory']);
    Route::get('/getsuggestion', [CategoryController::class, 'suggestion']);
    Route::delete('/deletecategory', [CategoryController::class, 'destroy']);
});