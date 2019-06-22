<?php

namespace app\model;

use Illuminate\Database\Eloquent\Model;

class CatalogoTallas extends Model
{
    // protected $fillable = [
    //     'id',
    //     'talla',
    //     'created_at',
    //     'updated_at',
    // ];
   //This field can not be edited
    protected $guarded = ['id'];

     //Relationship HasOne (Reverted)
     public function descripcionProducto()
     {
         return $this->belongsTo('app\descriptionProducto');
     }


}
