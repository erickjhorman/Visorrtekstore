<?php

namespace app\Http\Controllers;
use DB;
use Illuminate\Http\Request;
use app\comentarios;
use app\http\Requests\validateComentarioForm;

class commentsController extends Controller
{

   public function comentarios($id){

    //return $id;


    // $Producto =  DB::table('description_productos')
    // ->join('productos', 'productos.id', '=', 'description_productos.producto_id')
    // ->join('marcas', 'marcas.id', '=', 'productos.marca_id')
    // ->join('comentarios', 'comentarios.id', '=', 'productos.id')
    // ->join('users', 'users.id', '=', 'comentarios.usuario_id')
    // ->select('productos.*','description_productos.*','comentarios.comentario','users.nombre')
    // ->where('description_productos.producto_id', '=', $id)
    // ->get();

    //  $Producto =  DB::table('description_productos')
    // ->join('productos', 'productos.id', '=', 'description_productos.producto_id')
    // ->join('catalogo_colores_productos', 'catalogo_colores_productos.id', '=', 'description_productos.color_id')
    // ->join('catalogo_tallas', 'catalogo_tallas.id', '=', 'description_productos.talla_id')
    // ->join('marcas', 'marcas.id', '=', 'productos.marca_id')
    // ->join('comentarios', 'comentarios.id', '=', 'productos.id')
    // ->join('users', 'users.id', '=', 'comentarios.usuario_id')
    // ->select('productos.*','description_productos.*','comentarios.*','users.nombre',
    // 'catalogo_colores_productos.color','catalogo_tallas.talla','marcas.Marca')
    // ->where('description_productos.producto_id', '=', $id)
    // ->get();

    //  $Producto =  DB::table('description_productos')
    // ->join('productos', 'productos.id', '=', 'description_productos.producto_id')
    // ->join('catalogo_colores_productos', 'catalogo_colores_productos.id', '=', 'description_productos.color_id')
    // ->join('catalogo_tallas', 'catalogo_tallas.id', '=', 'description_productos.talla_id')
    // ->join('marcas', 'marcas.id', '=', 'productos.marca_id')
    // ->join('comentarios', 'comentarios.id', '=', 'productos.id')
    // ->select('productos.*','description_productos.*',
    // 'catalogo_colores_productos.color','catalogo_tallas.talla','marcas.Marca')
    // ->where('description_productos.Producto_id', '=', $id)
    // ->get();

     $Producto =  DB::table('description_productos')
    ->join('productos', 'productos.id', '=', 'description_productos.producto_id')
    ->join('catalogo_colores_productos', 'catalogo_colores_productos.id', '=', 'description_productos.color_id')
    ->join('catalogo_tallas', 'catalogo_tallas.id', '=', 'description_productos.talla_id')
    ->join('marcas', 'marcas.id', '=', 'productos.marca_id')
    ->select('productos.*','description_productos.*',
    'catalogo_colores_productos.color','catalogo_tallas.talla','marcas.Marca')
    ->where('description_productos.Producto_id', '=', $id)
    ->get();




    //  $Producto =  DB::table('comentarios')
    //  ->select('comentarios.*')
    //  ->where('comentarios.producto_id', '=', $id)
    //  ->get();

    return $Producto;

  }

  public function getComentarios($id){
    $comentarios =  DB::table('comentarios')
    ->join('users', 'users.id', '=', 'comentarios.usuario_id')
    ->select('comentarios.*','users.nombre')
    ->orderBy('id','desc')
    ->where('comentarios.producto_id', '=', $id)
    ->limit(5)
    ->get();
    return $comentarios;
  }


   public function SaveComentarios(validateComentarioForm $request){

    $comentario = new comentarios;
    $comentario->producto_id = $request->producto_id;
    $comentario->usuario_id = $request->usuario_id;
    $comentario->comentario = $request->comentario;


    $comentario->save();
    return "Guardado";
   }

   }




