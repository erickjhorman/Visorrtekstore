<?php

namespace app\model;

use Illuminate\Database\Eloquent\Model;

class franqicia extends Model
{
    protected $fillable = [
        'id',
        'franqicias',
        'imagen',
        'fecha_ingreso',
        'fecha_salida',
        'hora_salida',
        'fecha_llegada',
        'hora_llegada',
        'estado_despacho',
        'updated_at',
        'created_at',
       
    ];
}
