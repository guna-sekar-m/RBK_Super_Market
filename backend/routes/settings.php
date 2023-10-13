<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SettingsController;

Route::get('getwebsettings', [SettingsController::class, 'getwebsettings']);
Route::get('getbannersettings', [SettingsController::class, 'getbannersettings']);
Route::group(['middleware' => 'jwt.auth'], function () {
    Route::post('Updatewebsettings', [SettingsController::class, 'Updatewebsettings']);
    Route::post('savebannerimages', [SettingsController::class, 'savebannerimages']);
});

