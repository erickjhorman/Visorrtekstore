<?php

namespace app\model;

use Illuminate\Database\Eloquent\Model;

class envio extends Model
{
    protected $fillable = [
        'id',
        'detalle_venta_id',
        'tipo_envio',
        'administrador_id',
        'domicilio_id',
        'nombre',
        'apellido',
        'cedula',
        'telefono',
        'descripcionProducto',

    ];

     //Relationships one to one
     public function detalle_venta()
     {
         return $this->hasOne('app\Detalle_Venta');
     }


     //Relationships one to one
     public function domicilio()
     {
         return $this->hasOne('app\Domicilio');
     }

      //Relationships one to many

      public function admins()
      {
          return $this->hasMany('app\admin');
      }

       //Relationships Inverse
       public function despacho()
    {
        return $this->belongsTo('app\despacho');
    }

}
