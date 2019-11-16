<?php

namespace app\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use app\model\Domicilio;
use Illuminate\Support\Facades\Input;

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

        $domicilio->nombre = Input::get('nombre');
        $domicilio->cliente_id = Input::get('idCliente');
        $domicilio->apellido = Input::get('apellido');
        $domicilio->celular = Input::get('celular');
        $domicilio->departamento_id = Input::get('departamento');
        $domicilio->ciudad_id = Input::get('ciudad');
        $domicilio->barrio = Input::get('barrio');
        $domicilio->direccion = Input::get('direccion');
        $domicilio->datos_adicionales = Input::get('datosadicionales');

        $domicilio->save();

        return $domicilio;
    }

    public function mensaje(Request $request)
    {
        return "Mensaje";
    }
}
