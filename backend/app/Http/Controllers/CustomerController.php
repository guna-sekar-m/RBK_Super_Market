<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Schema;
class CustomerController extends Controller
{
    public function index(Request $request)
    {
        $params = $request->only(['first', 'rows', 'globalFilter']);
        $first = $params['first'] ?? 0;
        $rows = $params['rows'] ?? 10;
        $globalFilter = $params['globalFilter'] ?? '';
    
        $tableColumns = Schema::getColumnListing('users');
        $filter = [];
        if ($globalFilter !== '') {
            $filter = array_filter($tableColumns, function ($field) {
                return $field !== 'id' && $field !== 'created_at' && $field !== 'updated_at';
            });
    
            $query = User::query();
            foreach ($filter as $field) {
                $query->orWhere($field, 'like', "%{$globalFilter}%");
            }
        } 
        else {
            $query = User::query();
        }
        $totalLengthQuery = clone $query;// Create a clone of the query for counting total records
        $response = $query->skip($first)->take($rows)->get();
        $totalLength = $totalLengthQuery->count();
    
        return response()->json(['data' => $response, 'totalLength' => $totalLength]);
    }

    public function create(Request $request)
    {
        $saveproduct=User::create($request->all());
        $totalLength = User::count();
        return response()->json(['data' => $saveproduct,'totalLength' => $totalLength,'message'=>'success']);
    }
    public function insertmany(Request $request){
        $saveproduct=User::insert($request->all());
        $totalLength = User::count();
        return response()->json(['data' => $saveproduct,'totalLength' => $totalLength,'message'=>'success']);
    }
    public function update(Request $request)
    { 
        $id=$request->input('id');
        $User = User::findOrFail($id);
        $User->update($request->all());
        $totalLength = User::count();
        return response()->json(['data' => $User,'totalLength' => $totalLength,'message'=>'success']);
    }
    public function destroy(Request $request)
    {
        $id=$request->input('id');
        $product = User::findOrFail($id);
        $product->delete();
        $totalLength = User::count();
        return response()->json(['totalLength' => $totalLength,'message'=>'success']);
    }
}
