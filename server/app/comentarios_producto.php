<?php

namespace app;

use Illuminate\Database\Eloquent\Model;

class comentarios_producto extends Model
{
    protected $fillable = [
        'producto_id',
        'usuario_id',
        'comentario',
        'updated_at',
        'created_at',

    ];

    // protected $guarded = ['id'];  //To protect this field to be acceded and modify

    public function producto()
    {
        return $this->belongsTo('app\descriptionProducto');
    }

    public function user()
    {
        return $this->belongsTo('app\User');
    }

}
