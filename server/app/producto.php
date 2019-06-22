<?php

namespace app\model;

use Illuminate\Database\Eloquent\Model;

class producto extends Model
{

    protected $fillable = [
        'id',
        'tipo_de_producto_id',
        'marca_id',
        'talla_id',
        'producto',
        'descripcion',
        'updated_at',
        'created_at',

    ];


       //Relationship One to many

       public function descriptionProductos()
       {
           return $this->hasMany('app\descriptionProducto');
       }


       public function marcas()
       {
           return $this->hasMany('app\marcas');
       }


       public function CatalogoTallas()
       {
           return $this->hasMany('app\CatalogoTallas');
       }


       public function comentario()
       {
           return $this->hasMany('app\comentario');
       }

}
