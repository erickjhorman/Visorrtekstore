<?php

namespace app\model;

use Illuminate\Database\Eloquent\Model;

class tarjetaInfo extends Model
{
    protected $fillable = [
        'id',
        'tipoIdentificacion_id',
        'numero',
        'nombre',
        'apellido',
        'fecha_expedicion',
        'cedula',
    ];
}
