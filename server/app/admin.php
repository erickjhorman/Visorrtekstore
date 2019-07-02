<?php

namespace app\model;

use Illuminate\Database\Eloquent\Model;
use Tymon\JWTAuth\Contracts\JWTSubject;

class admin extends Authenticatable implements JWTSubject
{
    use Notifiable;

    protected $fillable = [
        'id',
        'tipoIdentificacion_id',
        'nombre',
        'email',
        'direccion',
        'telefono',
        'numero',
        'password',
        'created_at',
        'updated_at',
    ];


    public function tipoIdentificacionfk()
    {
        return $this->hasOne('app\tipoIdentificacion');
    }

    public function ventas()
    {
        return $this->belongsTo('app\envio');
    }
}
