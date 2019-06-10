<?php

namespace app\model;

use Illuminate\Database\Eloquent\Model;

class descriptionProducto extends Model
{
    protected $fillable = [
        'id',
        'producto_id',
        'color_id',
        'talla_id',
        'forma_id',
        'existencia',
        'valor_venta',
        'iva_porcentaje',
        'updated_at',
        'created_at',
       
    ];

   
      //Relationship HasOne (Reverted)
      public function producto()
      {
          return $this->belongsTo('app\producto');
      }

}
