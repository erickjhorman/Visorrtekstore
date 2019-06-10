<?php

namespace app\model;

use Illuminate\Database\Eloquent\Model;

class Cliente extends Model
{
    protected $fillable = [
        'id',
        'usuario_id',
        'identificacion_id',
        'departamento_id',
        'tarjeta_id',
        'ciudad_id',
        'avatar',
        'nombre',
        'telefono',
        'celular',
        'correo',
        'updated_at',
        'created_at',

    ];

    //Relationship One to one
    public function Cliente()
    {
        return $this->hasOne('app\tipoIdentificacion');
    }

    public function departamento()
    {
        return $this->hasOne('app\departamento');
    }

    public function ciudad()
    {
        return $this->hasOne('app\ciudad');
    }

    public function catalogoTallas()
    {
        return $this->hasOne('app\CatalogoTallas');
    }

    public function catalogoEstilos()
    {
        return $this->hasOne('app\CatalogoEstilos');
    }

    public function catalogoColoresProducto()
    {
        return $this->hasOne('app\CatalogoColoresProducto');
    }


       //Relationship One to many

       public function tipoTarjetas()
       {
           return $this->hasMany('app\tipoTarjeta');
       }

       public function ventas()
       {
           return $this->belongsTo('app\Venta');
       }

          //Relationship many to many


}
