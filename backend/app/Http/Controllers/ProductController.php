<?php

namespace App\Http\Controllers;

use App\Models\Products;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Schema;
class ProductController extends Controller
{

    public function index(Request $request)
    {
        $params = $request->only(['first', 'rows', 'globalFilter']);
        $first = $params['first'] ?? 0;
        $rows = $params['rows'] ?? 10;
        $globalFilter = $params['globalFilter'] ?? '';
    
        $tableColumns = Schema::getColumnListing('products');
        $filter = [];
        if ($globalFilter !== '') {
            $filter = array_filter($tableColumns, function ($field) {
                return $field !== 'id' && $field !== 'created_at' && $field !== 'updated_at' && $field !== 'Product_Img';
            });
    
            $query = Products::query();
            foreach ($filter as $field) {
                $query->orWhere($field, 'like', "%{$globalFilter}%");
            }
        } 
        else {
            $query = Products::query();
        }
        $totalLengthQuery = clone $query;// Create a clone of the query for counting total records
        $response = $query->skip($first)->take($rows)->get();
        $totalLength = $totalLengthQuery->count();
    
        return response()->json(['data' => $response, 'totalLength' => $totalLength]);
    }

    public function create(Request $request)
    {
        

        if ($request->hasFile('Product_Img')) {
            $image = $request->file('Product_Img');
    
            // Define the folder where the image will be stored
            $folderPath = 'uploads/images/Products/';
    
            // Generate a unique filename for the uploaded image
            $fileName = time() . '_' . $image->getClientOriginalName();
    
            // Move the image to the specified folder
            $image->move(public_path($folderPath), $fileName);
    
            // Save the image path to the database
            $saveproduct = new Products();
            $saveproduct->Product_Name = $request->input('Product_Name'); 
            $saveproduct->Category = $request->input('Category'); 
            $saveproduct->Regular_Price = $request->input('Regular_Price'); 
            $saveproduct->Sale_Price = $request->input('Sale_Price'); 
            $saveproduct->Stock = $request->input('Stock');
            $saveproduct->Description = $request->input('Description'); 
            $saveproduct->Status = $request->input('Status');
            $saveproduct->Product_Img = $folderPath . $fileName;
            $saveproduct->save();
            $totalLength = Products::count();
            return response()->json(['data' => $saveproduct,'totalLength' => $totalLength,'message'=>'success']);
        }
    
        return response()->json(['error' => 'Image not found'], 200);


       
    }
    public function insertmany(Request $request){
        
        $saveproduct=Products::insert($request->all());
        $totalLength = Products::count();
        return response()->json(['data' => $saveproduct,'totalLength' => $totalLength,'message'=>'success']);
    }
    public function update(Request $request)
    { 
        $updateproduct = Products::find($request->input('id'));

        if (!$updateproduct) {
            return response()->json(['error' => $request], 404);
        }
    
        if ($request->hasFile('Product_Img')) {
            $image = $request->file('Product_Img');
    
            // Define the folder where the image will be stored
            $folderPath = 'uploads/images/Products/';
    
            // Generate a unique filename for the uploaded image
            $fileName = time() . '_' . $image->getClientOriginalName();
    
            // Move the image to the specified folder
            $image->move(public_path($folderPath), $fileName);
    
            // Delete the old image if exists
       
            if (file_exists(public_path($updateproduct->Product_Img)) && is_file(public_path($updateproduct->Product_Img))) {
                unlink(public_path($updateproduct->Product_Img));
            }
            $updateproduct->Product_Img = $folderPath . $fileName;
        }
    
        // Update other fields if needed
        $updateproduct->Product_Name = $request->input('Product_Name'); 
        $updateproduct->Category = $request->input('Category'); 
        $updateproduct->Regular_Price = $request->input('Regular_Price'); 
        $updateproduct->Sale_Price = $request->input('Sale_Price'); 
        $updateproduct->Stock = $request->input('Stock');
        $updateproduct->Description = $request->input('Description'); 
        $updateproduct->Status = $request->input('Status');
        $updateproduct->save();
        $totalLength = Products::count();
        // Return a success response or do other necessary actions
        return response()->json(['message' => 'success', 'data' => $updateproduct,'totalLength' => $totalLength], 200);
    }
    public function destroy(Request $request)
    {
        $id=$request->input('id');
        $product = Products::findOrFail($id);
        $product->delete();
        $totalLength = Products::count();
        return response()->json(['totalLength' => $totalLength,'message'=>'success']);
    }
    public function search(Request $request)
    {
        $searchQuery = $request->input('id');
        $suggestions = Products::where('id',$searchQuery)->get();
        $totalLength = $suggestions->count();
        return response()->json(['data' =>$suggestions,'totalLength' => $totalLength]);
    }
    public function suggestion(Request $request)
    {
        $searchQuery = $request->input('search');
        $suggestions = Products::where('Product_Name', 'like', "%$searchQuery%")->select('id', 'Product_Name','Product_Img')->get();
        return response()->json(['data' =>$suggestions]);
    }
    public function getofferproducts(){
        $products = Products::where('Category',"Offer")->get();
        return response()->json(['data' =>$products]);
    }
    public function getunique()
    {
        $products = Products::distinct()->pluck('Category');
        return response()->json(['data' => $products]);
    }
    public function getlazy(Request $request)
    {
        $perPage = 10;
        $page = $request->input('page', 1); 
        $searchcategory = $request->input('searchcategory'); 
        $offset = ($page - 1) * $perPage;
        $query = Products::query();
        if(!empty($searchcategory)){
            $query->where('Category', $searchcategory);
        }
        $totalLength = $query->count();
        $products = $query->skip($offset)->take($perPage)->get();
        return response()->json(['data' => $products,'totalLength' => $totalLength]);
    }
}
