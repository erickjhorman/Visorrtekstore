<?php

namespace app\model;

use Illuminate\Database\Eloquent\Model;

class despacho extends Model
{
    protected $fillable = [
        'id',
        'envio_id',
        'transportadora_id',
        'fecha_ingreso',
        'fecha_salida',
        'hora_salida',
        'fecha_llegada',
        'hora_llegada',
        'estado_despacho',
        'updated_at',
        'created_at',

    ];

     //Relationships one to many

     public function envios()
     {
         return $this->hasMany('app\envio');
     }

     public function transportadora()
     {
         return $this->hasMany('app\transportadora');
     }




}
