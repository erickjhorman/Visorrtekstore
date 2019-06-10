<?php

namespace app\model;

use Illuminate\Database\Eloquent\Model;

class marcas extends Model
{
    protected $fillable = [
        'id',
        'tipo_de_producto_id',
        'marca',
        'updated_at',
        'created_at',
       
    ];
    
    
    
    //Relationship HasOne (Reverted)
     public function producto()
     {
         return $this->belongsTo('app\producto');
     }

     //Relationship many to many (Reverted)
     public function categorias()
     {
         return $this->belongsTo('app\categoria');
     }
}
