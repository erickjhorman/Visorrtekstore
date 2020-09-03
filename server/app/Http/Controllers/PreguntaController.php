<?php

namespace app\Http\Controllers;

use Illuminate\Http\Request;
use app\http\Requests\StoreQuestionProduct;
use app\http\Requests\StoreAnswerQuestionProduct;
use app\Pregunta;
use app\PreguntaRespuesta;
use app\Respuesta;
use app\Events\QuestionSent;
use app\Events\QuestionAnswerSent;
use DB;
class PreguntaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */


     public function index()
    {
        //
    }

   /**
 * Fetch all messages
 *
 * @return Message
 */
    public function fetchQuestions()
   {


   return  DB::transaction(function () {

     $result =  DB::table('pregunta_respuesta')
        ->LeftJoin('preguntas', 'preguntas.id', '=', 'pregunta_respuesta.pregunta_id')
        ->LeftJoin('respuestas', 'respuestas.id', '=', 'pregunta_respuesta.respuesta_id')
        ->LeftJoin('users', 'users.id', '=', 'preguntas.usuario_id')
        ->LeftJoin('clientes', 'clientes.usuario_id', '=', 'users.id')
        ->select('pregunta_respuesta.*','preguntas.pregunta','respuestas.respuesta','respuestas.created_at','clientes.avatar','clientes.nombre','users.id','pregunta_respuesta.created_at')
        ->orderBy('pregunta_respuesta.id','asc')
        ->limit(7)
        ->get();

        return  $result;

     });
}

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function saveQuestions(StoreQuestionProduct $request)
    {
        //return $request->all();
        $validated = $request->validated();
        $pregunta = Pregunta::create($validated);

        //$Pregunta = new Pregunta(['pregunta' => $validated['pregunta']]);
        $pregunta->respuestas()->attach(0, ['pregunta_id' => $pregunta['id']]);

        // To send an event to the server
        broadcast(new QuestionSent($this->fetchQuestions()))->toOthers();

         return ['status' => 'Message Sent!'];

        // $id = DB::table('preguntas')
        // ->insertGetId($validated);

        //$id2 = DB::table('preguntas')->insert($validated);
        // $last_id = DB::getPDO()->lastInsertId();


        //$Pregunta = Pregunta::find(13);


        //return response()->json(['id' => $Pregunta->id]);
    }

    public function replayQuestions(StoreAnswerQuestionProduct $request){



          $validated = $request->validated();
          $idPregunta = $validated['preguntaId'];

          $response = Respuesta::create($validated);


          $idRespuesta =  $response->id;

          // These are the atributes to update
          $attributes = [
            'respuesta_id' => $idRespuesta,
            'updated_at' => now()
        ];

        // update pregunta_respuesta table
         DB::table('pregunta_respuesta')
              ->where('pregunta_id', $idPregunta)
              ->update($attributes);




         // To send an event to the server
         broadcast(new QuestionAnswerSent($this->fetchQuestions()))->toOthers();

         return response()->json(['message' => 'Answer successfully sent']);


    }


    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
