<?php

namespace app;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\Pivot;

class UsuarioSala extends Model
{
    protected $primaryKey = 'id';

    protected $fillable = [
        'Sala_id',
        'usuario_id',
    ];
}
