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

       public function producto()
       {
           return $this->hasMany('app\CatalogoColoresProductos');
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
           return $this->hasMany('app\comentarios_producto');
       }

       // Relationship to ProductosImagenes
       public function productoImagenes()
       {
           return $this->hasMany('app\ProductosImagenes');
       }


}
