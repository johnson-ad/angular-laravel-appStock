<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Produit extends Model
{
    use HasFactory;
    protected $fillabe = array('id', 'reference', 'description', 'quantite', 'prix');

    public static $rules = array(
        'id' => 'required|integer',
        'reference' => 'required|String',
        'description' => 'required|text',
        'quantite' => 'required|integer',
        'prix' => 'required|double'
    );
}
