<?php

namespace app;

use Illuminate\Database\Eloquent\Model;

class EstadoProducto extends Model
{
    protected $table = 'estados_productos';
    protected $primaryKey = 'id';

    protected $fillable = [
        'id',
        'estado',
        'updated_at',
        'created_at',
    ];
}
