<?php

namespace app\model;

use Illuminate\Database\Eloquent\Model;

class factura extends Model
{
    protected $fillable = [
        'id',
        'detalle_venta_id',
        'nombre',
        'nit',


    ];

    public function detalle_venta()
     {
         return $this->hasOne('app\Detalle_Venta');
     }


}
