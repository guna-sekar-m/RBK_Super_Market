<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Schema;
use App\Models\Category;

class CategoryController extends Controller
{
   public function index(Request $request)
   {
       $params = $request->only(['first', 'rows', 'globalFilter']);
       $first = $params['first'] ?? 0;
       $rows = $params['rows'] ?? 10;
       $globalFilter = $params['globalFilter'] ?? '';
   
       $tableColumns = Schema::getColumnListing('categories');
       $filter = [];
       if ($globalFilter !== '') {
           $filter = array_filter($tableColumns, function ($field) {
               return $field !== 'id' && $field !== 'created_at' && $field !== 'updated_at' && $field !== 'Category_img';
           });
   
           $query = Category::query();
           foreach ($filter as $field) {
               $query->orWhere($field, 'like', "%{$globalFilter}%");
           }
       } 
       else {
           $query = Category::query();
       }
       $totalLengthQuery = clone $query;// Create a clone of the query for counting total records
       $response = $query->skip($first)->take($rows)->get();
       $totalLength = $totalLengthQuery->count();
   
       return response()->json(['data' => $response, 'totalLength' => $totalLength]);
   }
   public function savecategory(Request $request)
   {
       if ($request->hasFile('Category_img')) {
           $image = $request->file('Category_img');
   
           // Define the folder where the image will be stored
           $folderPath = 'uploads/images/Category/';
   
           // Generate a unique filename for the uploaded image
           $fileName = time() . '_' . $image->getClientOriginalName();
   
           // Move the image to the specified folder
           $image->move(public_path($folderPath), $fileName);
   
           // Save the image path to the database
           $category = new Category();
           $category->Category_Name = $request->input('Category_Name'); 
           $category->Status = $request->input('Status');// Assuming you have a 'name' field in your request
           $category->Category_img = $folderPath . $fileName;
           $category->save();
           $totalLength = Category::count();
           // Return a success response or do other necessary actions
           return response()->json(['message' => 'success','data'=>$category,'totalLength' => $totalLength], 200);
       }
   
       return response()->json(['error' => 'Image not found'], 200);
   }
   public function updateCategory(Request $request)
  {
    $category = Category::find($request->input('id'));

    if (!$category) {
        return response()->json(['error' => $request], 404);
    }

    if ($request->hasFile('Category_img')) {
        $image = $request->file('Category_img');

        // Define the folder where the image will be stored
        $folderPath = 'uploads/images/Category/';

        // Generate a unique filename for the uploaded image
        $fileName = time() . '_' . $image->getClientOriginalName();

        // Move the image to the specified folder
        $image->move(public_path($folderPath), $fileName);

        // Delete the old image if exists
        if (file_exists(public_path($category->Category_img))) {
            unlink(public_path($category->Category_img));
        }

        $category->Category_img = $folderPath . $fileName;
    }

    // Update other fields if needed
    $category->Category_Name = $request->input('Category_Name');
    $category->Status = $request->input('Status');
    $category->save();

    // Return a success response or do other necessary actions
    return response()->json(['message' => 'success', 'data' => $category], 200);
}
public function suggestion(Request $request)
{
    $searchQuery = $request->input('search');
    $suggestions = Category::where('Category_Name', 'like', "%$searchQuery%")->select('id', 'Category_Name')->get();
    return response()->json(['data' =>$suggestions]);
}
public function getcategory()
{
    $products = Category::where('Status', "Active")->select('Category_Name','Category_img')->get();
    return response()->json(['data' => $products]);
}
public function destroy(Request $request)
{
    $id=$request->input('id');
    $product = Category::findOrFail($id);
    $product->delete();
    $totalLength = Category::count();
    return response()->json(['totalLength' => $totalLength,'message'=>'success']);
}
}
