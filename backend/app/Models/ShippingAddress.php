<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ShippingAddress extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'first_name',
        'last_name',
        'email',
        'mobilenumber',
        'address', 
        'city', 
        'state', 
        'country', 
        'postal_code',
        'business_name',
        'status'
     ];
     public function user()
     {
         return $this->belongsTo(User::class);
     }
}
