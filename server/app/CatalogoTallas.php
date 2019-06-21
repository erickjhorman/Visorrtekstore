<?php

namespace app\model;

use Illuminate\Database\Eloquent\Model;

class CatalogoTallas extends Model
{
    protected $fillable = [
        'id',
        'talla',
        'created_at',
        'updated_at',
    ];

     //Relationship HasOne (Reverted)
     public function descripcionProducto()
     {
         return $this->belongsTo('app\descriptionProducto');
     }

       public function descriptionProductos()
        {
            return $this->hasOne('app\descriptionProducto');
        }
}
