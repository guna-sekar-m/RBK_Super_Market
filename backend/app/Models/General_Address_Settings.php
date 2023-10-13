<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class General_Address_Settings extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'mobilenumber',
        'email',
        'address_line',
        'city',
        'state',
        'zip_code',
        'country'
      ];
}
