<?php

namespace app\model;

use Illuminate\Database\Eloquent\Model;

class ciudad extends Model
{
    protected $fillable = [
        'id',
        'departamento_id',
        'ciudad',
        'updated_at',
        'created_at',
       
    ];

     //Relationship HasOne (Reverted)
     public function Cliente()
     {
         return $this->belongsTo('app\Cliente');
     }
 
}
