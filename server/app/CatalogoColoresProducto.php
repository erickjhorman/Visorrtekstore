<?php

namespace app\model;
use Illuminate\Database\Eloquent\Model;

class CatalogoColoresProducto extends Model
{
    protected $fillable = [
        'id',
        'producto_id',
        'color',
        'created_at',
        'updated_at',
    ];

       //Relationship HasOne (Reverted)
       public function descripcionProducto()
       {
           return $this->belongsTo('app\descriptionProducto');
       }

       public function productos()
       {
           return $this->belongsTo('app\producto');
       }


}
