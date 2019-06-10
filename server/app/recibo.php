<?php

namespace app\model;

use Illuminate\Database\Eloquent\Model;

class recibo extends Model
{
    protected $fillable = [
        'id',
        'detalle_venta_id',
        'nombre',
   ];

     //Relationship One to one

     public function detalle_venta()
     {
         return $this->hasOne('app\Detalle_Venta');
     }
}
