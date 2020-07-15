<?php

namespace app\Http\Controllers;

use Illuminate\Http\Request;
use app\http\Requests\StoreQuestionProduct;
use app\Pregunta;
use app\PreguntaRespuesta;
use app\Events\QuestionSent;
use DB;
class PreguntaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public $response;

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
     return  $this->response = DB::table('pregunta_respuesta')
      ->LeftJoin('preguntas', 'preguntas.id', '=', 'pregunta_respuesta.pregunta_id')
      ->LeftJoin('respuestas', 'respuestas.id', '=', 'pregunta_respuesta.respuesta_id')
      ->LeftJoin('users', 'users.id', '=', 'preguntas.usuario_id')
      ->LeftJoin('clientes', 'clientes.usuario_id', '=', 'users.id')
      ->select('pregunta_respuesta.*','preguntas.pregunta','respuestas.respuesta','clientes.avatar','clientes.nombre','users.id')
      ->get();


   }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function sendQuestions(StoreQuestionProduct $request)
    {
        //return $request->all();
        $validated = $request->validated();
        $pregunta = Pregunta::create($validated);

        //$Pregunta = new Pregunta(['pregunta' => $validated['pregunta']]);
        $pregunta->respuestas()->attach(0, ['pregunta_id' => $pregunta['id']]);

        // To get valid information of the user to attach with the event
      $response =  DB::table('pregunta_respuesta')
      ->LeftJoin('preguntas', 'preguntas.id', '=', 'pregunta_respuesta.pregunta_id')
      ->LeftJoin('respuestas', 'respuestas.id', '=', 'pregunta_respuesta.respuesta_id')
      ->LeftJoin('users', 'users.id', '=', 'preguntas.usuario_id')
      ->LeftJoin('clientes', 'clientes.usuario_id', '=', 'users.id')
      ->select('pregunta_respuesta.*','preguntas.pregunta','respuestas.respuesta','clientes.avatar','clientes.nombre','clientes.usuario_id')
      ->get();


       // To send an event to the server
          broadcast(new QuestionSent($response))->toOthers();

         return ['status' => 'Message Sent!'];

        // $id = DB::table('preguntas')
        // ->insertGetId($validated);

        //$id2 = DB::table('preguntas')->insert($validated);
        // $last_id = DB::getPDO()->lastInsertId();


        //$Pregunta = Pregunta::find(13);


        //return response()->json(['id' => $Pregunta->id]);
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
