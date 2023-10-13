<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Products extends Model
{
    use HasFactory;
    protected $fillable = [
       
        'Product_Name',
        'Product_Img',
        'Category',
        'Regular_Price',
        'Sale_Price',
        'Stock',
        'Description',
        'Status'
    ];
}
