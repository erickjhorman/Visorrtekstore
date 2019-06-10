<?php

namespace app\model;

use Illuminate\Database\Eloquent\Model;

class Domicilio extends Model
{
    protected $fillable = [
        'id',
        'cliente_id',
        'departamento_id',
        'ciudad_id',
        'nombre',
        'apellido',
        'barrio',
        'via',
        'numero',
        'celular',

    ];

    //Relationship One to many
    public function venta()
    {
        return $this->belongsTo('app\Venta');
    }

    public function envio()
    {
        return $this->belongsTo('app\envio');
    }
}
