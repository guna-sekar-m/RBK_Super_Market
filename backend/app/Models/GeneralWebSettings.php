<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GeneralWebSettings extends Model
{
    use HasFactory;
    protected $fillable = [
        'website_name',
        'logo',
        'favicon',
        'website_general_color'
      ];
 
}
