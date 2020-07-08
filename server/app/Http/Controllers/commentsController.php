<?php

namespace app\Http\Controllers;
use DB;
use Illuminate\Http\Request;
use app\comentarios_producto;
use app\http\Requests\validateComentarioForm;

class commentsController extends Controller
{

  public function getComentarios(){
    $comentarios =  DB::table('comentarios_productos')
            ->join('users', 'users.id', '=', 'comentarios_productos.usuario_id')
            ->join('clientes', 'clientes.usuario_id', '=', 'users.id')
            ->select('comentarios_productos.*','users.nombre','clientes.avatar')
            ->orderBy('id','desc')
            ->get();

     return $comentarios;


  }


   public function saveComentarios(validateComentarioForm $request){

    $id = $request->ProductoId;

    $comentario = new comentarios_producto;
    $comentario->descriptionProducto_id = $id;
    $comentario->usuario_id = $request->UsuarioId;
    $comentario->comentario = $request->comments;


    $comentario->save();
    return response()->json([
        'mensaje' => 'Comentario añadido',
        'descProductId' => $id
     ]);
   }

   }




