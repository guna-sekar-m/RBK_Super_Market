<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Firebase\JWT\JWT;
class AuthController extends Controller
{
    public function register(Request $request)
    {
      
        $user = User::create([
            'name'=>$request->fullName,
            'email' => $request->Email,
            'password' => bcrypt($request->Password),
        ]);

        return response()->json(['message' => 'Registration successful']);
    }

    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            
            $payload = [
                'sub' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'role'=>$user->role
                // Add any additional claims you want to include in the JWT payload
            ];
    
            $secret = 'rbkstorekey'; // replace with your actual secret key
            $token = JWT::encode($payload, $secret, 'HS256');
            return response()->json(['token' => $token]);
        }
    
        return response()->json(['error' => 'Invalid username or password'], 401);
    }
    public function adminlogin(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            $user = Auth::User();
            if($user->role=='Admin'){
            $payload = [
                'sub' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'role'=>$user->role
                // Add any additional claims you want to include in the JWT payload
            ];
    
            $secret = 'rbkstorekey'; // replace with your actual secret key
            $token = JWT::encode($payload, $secret, 'HS256');
            return response()->json(['token' => $token,'message'=>'Successfull']);
        }
        else{
            return response()->json(['error' => 'Invalid username or password'], 200);
        }
        }
    
        return response()->json(['error' => 'Invalid username or password'], 200);
    }
}
