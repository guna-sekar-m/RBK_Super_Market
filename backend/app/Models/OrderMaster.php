<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderMaster extends Model
{
    use HasFactory;
    protected static function booted()
    {
        static::creating(function ($order) {
            $order->order_id = 'ORD' . uniqid();
        });
    }
    protected $fillable = [
        'order_id',
        'user_id',
        'total_amount',
        'shipping_cost',
        'shipping_name',
        'shipping_email',
        'shipping_mobile_number',
        'shipping_address',
        'order_status',
        'order_date',
        'payment_id',
        'payment_type',
        'payment_mode',
        'payment_status',
        'delivery_instructions',
        'status',
     ];
     public function user()
     {
         return $this->belongsTo(User::class);
     }
 
     public function orders()
     {
         return $this->hasMany(Orders::class);
     }
     
}
