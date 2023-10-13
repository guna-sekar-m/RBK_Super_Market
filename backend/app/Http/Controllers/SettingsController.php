<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\GeneralWebSettings;
use App\Models\General_Address_Settings;
use App\Models\BannerSettings;
class SettingsController extends Controller
{

    //Web Settings
    public function getwebsettings()
    {
        $general_web_settings = GeneralWebSettings::first();
        return response()->json(['data' => $general_web_settings]);
    }
    public function Updatewebsettings(Request $request)
    {
       $id=$request->input('id');
        $general_web_settings = GeneralWebSettings::findOrFail($id);
        if ($request->hasFile('logo')) {
            $logoFile = $request->file('logo');
            $logoPath = $this->storeFile($logoFile, 'uploads/images/logo','logo');
            $general_web_settings->logo = $logoPath;
        }
    
        if ($request->hasFile('favicon')) {
            $faviconFile = $request->file('favicon');
            $faviconPath = $this->storeFile($faviconFile, 'uploads/images/favicon','favicon');
            $general_web_settings->favicon = $faviconPath;
        }

        $general_web_settings->update([
            'website_name' => $request->input('website_name'),
            'website_general_color' => $request->input('website_general_color')
        ]);
        return response()->json(['message' => 'success']);
    }
    private function storeFile($file, $folder,$customName)
   {
    $extension = $file->getClientOriginalExtension();
    $filename = $customName . '.' . $extension;
    
    $path = $file->storeAs($folder, $filename, 'public');
    return $path;
   }
   //banner setting

   public function getbannersettings()
   {
       $banner_settings = BannerSettings::get();
       return response()->json(['data' => $banner_settings]);
   }
   public function savebannerimages(Request $request)
   {
       if ($request->hasFile('banner_image')) {
           foreach ($request->file('banner_image') as $file) {
               $imagePath = $file->store('banner_images', 'public');
               BannerSettings::create([
                   'banner_image' => $imagePath,
               ]);
           }
       }
       
       return response()->json(['message' => 'success']);
   }
   
}
