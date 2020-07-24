<?php

namespace app;
use Illuminate\Database\Eloquent\Relations\Pivot;
use Illuminate\Database\Eloquent\Model;

class PreguntaRespuesta extends Pivot
{
    protected $fillable = [
        'id_pregunta_respuesta',
        'pregunta_id',
        'respuesta_id',
        'created_at',
        'updated_at'
    ];

    protected $table = "pregunta_respuesta"; // <-- El nombre personalizado
    public $incrementing = true;
}
