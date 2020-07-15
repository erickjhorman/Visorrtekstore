<?php

namespace app;

use Illuminate\Database\Eloquent\Model;

class Pregunta extends Model
{
    protected $fillable = [
        'id_pregunta',
        'usuario_id',
        'pregunta',
        'created_at',
        'updated_at'

    ];

    public function respuestas()
    {
        return $this->belongsToMany(Respuesta::class)
                        ->using('app\PreguntaRespuesta')
                        ->as('pregunta_respuesta')
                        ->withTimestamps()
                        ->withPivot([
                            'id',
                            'respuesta_id',
                            'pregunta_id',
                            'created_at',
                            'updated_at']
                        );

    }
}
