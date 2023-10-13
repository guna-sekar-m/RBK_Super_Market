<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Orders extends Model
{
    use HasFactory;
    protected $fillable = [
        'order_id',
        'user_id',
        'Product_Name',
        'Product_Img',
        'Quantity',
        'Sale_Price',
        
    ];
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
