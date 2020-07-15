<?php

namespace app\Http\Controllers;
use app\http\Requests\StoreMensajeChat;
use Illuminate\Http\Request;
use app\Sala;
use Symfony\Component\HttpFoundation\Response;
use app\Mensaje;
use Illuminate\Support\Facades\Validator;


class ChatController extends Controller
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
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    public function enviarMensaje(Request $request){




        $validator = Validator::make($request->all(), [
            'sala_id' => 'required',
            'usuario_id' => 'required',
            'mensaje' => 'required', 'string', 'max:30',

        ]);
            $mensaje = new Mensaje();

            $mensaje->Sala_id =  $request->sala_id;
            $mensaje->usuario_id =$request->usuario_id;
            $mensaje->tipoMensaje_id = null;
            $mensaje->mensaje = $request->mensaje;

            $mensaje->save();


        }



}
