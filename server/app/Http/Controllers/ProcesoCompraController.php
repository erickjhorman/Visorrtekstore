<?php

namespace app\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use app\model\Domicilio;
use app\Sala;
use app\UsuarioSala;
use app\Mensaje;



class ProcesoCompraController extends Controller

{

    public function getCatalogosTransportadora()
    {

        $CatalogoTransportadora = DB::table('transportadoras')->select('*')->get();
        return $CatalogoTransportadora;
    }


    public function getCatalogosDirecciones($id)
    {

        $domicilio = DB::table('domicilios')->select('*')->get();
        return $domicilio;
    }

    public function getCatalogosDepartamentos()
    {

        $departamentos = DB::table('departamentos')->select('*')->get();
        return $departamentos;
    }

    public function getCatalogosCiudades($id)
    {

        $ciudades = DB::table('ciudads')->where('departamento_id', '=', $id)->get();

        return $ciudades;
    }

    public function addDireccion(Request $request)
    {

        $domicilio = new Domicilio();

        $domicilio->nombre = $request->input::get('nombre');
        $domicilio->cliente_id =  $request->input::get('idCliente');
        $domicilio->apellido =  $request->input::get('apellido');
        $domicilio->celular =  $request->input::get('celular');
        $domicilio->departamento_id =  $request->input::get('departamento');
        $domicilio->ciudad_id =  $request->input::get('ciudad');
        $domicilio->barrio =  $request->input::get('barrio');
        $domicilio->direccion =  $request->input::get('direccion');
        $domicilio->datos_adicionales =  $request->input::get('datosadicionales');

        $domicilio->save();

        return $domicilio;
    }

    public function storeFirstMensaje(Request $request)
    {

        $validateData = $request->validate([
            'idCliente' => ['required', 'max:3'],
            'mensaje' => ['required', 'max:500'],

        ]);


        $last_venta = DB::table('ventas')->max('id');

        $sala = new Sala();
        $sala->tipoSala_id = 2;
        $sala->venta_id = $last_venta;

        $sala->save();

        //$lastSalaId = DB::select('select MAX(id) AS id FROM salas');
        $lastSalaId = DB::table('salas')->max('id');
        $salaUsuario = new UsuarioSala();

        $salaUsuario->Sala_id = $lastSalaId;
        $salaUsuario->usuario_id = $validateData['idCliente'];

        $salaUsuario->save();

        $mensaje = new Mensaje();

        $mensaje->Sala_id = $lastSalaId;
        $mensaje->usuario_id = $validateData['idCliente'];
        $mensaje->tipoMensaje_id = null;
        $mensaje->mensaje = $request->input('mensaje');

        $mensaje->save();
    }

    

    public function getMensajeUsuario($id)
    {

        //$solicitantes = DB::select('select id,nombre,apellido, numeroIdentificacion from solicitantes where id =(SELECT max(id) FROM solicitantes)');
        $mensaje = DB::table('mensajes')->select('*')
            ->where('usuario_id', '=', 1)
            ->get();

        return  $mensaje;
    }


    public function  getAllMensajeUsuarios($id) {

        //$solicitantes = DB::select('select id,nombre,apellido, numeroIdentificacion from solicitantes where id =(SELECT max(id) FROM solicitantes)');
        
        //  $salaVentas = DB::table('salas')
        
        // ->select('salas.id')
        // ->where('salas.venta_id', $id)
        // ->groupBy('salas.id');
        
       
        // $mensajes = DB::table('mensajes','clientes.avatar')
        // ->join('clientes', 'clientes.usuario_id', '=', 'mensajes.usuario_id')
        // ->joinSub($salaVentas, 'm', function ($join) {
        //      $join->on('mensajes.Sala_id', '=', 'm.id');
        //  })->get();

        //  return $mensajes;

          
         $salaVentas = DB::table('salas')
        
        ->select('salas.id')
        ->where('salas.venta_id', $id);
        
         $mensajes = DB::table('mensajes')
         ->join('clientes', 'clientes.id', '=', 'mensajes.usuario_id')
         
       
         ->joinSub($salaVentas, 'm', function ($join) {
        
            $join->on('mensajes.Sala_id', '=', 'm.id');
            
           
         })->get();
         

         return $mensajes;
     }

}
