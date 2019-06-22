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


      public function producto()
      {
        return $this->hasOne('app\producto');
      }

        //Relationship HasOne
      public function catalogoColoresProducto()
      {
        return $this->hasOne('app\CatalogoColoresProducto');
      }

      public function catalogoEstilos()
      {
        return $this->hasOne('app\CatalogoEstilos');
      }

      public function catalogoTallas()
    {
        return $this->hasOne('app\CatalogoTallas');
    }

}
