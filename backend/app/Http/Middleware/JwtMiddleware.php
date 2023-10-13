<?php

namespace App\Http\Middleware;

use Closure;
use Exception;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class JwtMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next)
    {
        $token = $request->bearerToken();
        if (!$token) {
            // Unauthorized - Token not provided
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        try {
            $decoded = JWT::decode($token, new Key('rbkstorekey', 'HS256'));
            // Optionally, you can add additional checks or validations here, such as checking user roles or permissions.
            // For example:
            // if (!$decoded->user->isAdmin) {
            //     return response()->json(['error' => 'Unauthorized'], 403);
            // }

            // Store the decoded token in the request for further use
            $request->jwt = $decoded;
        } catch (Exception $e) {
            // Unauthorized - Invalid token
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return $next($request);
    }
}
