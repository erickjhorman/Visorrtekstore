<?php

namespace app\Http\Controllers;

use Illuminate\Http\Request;
use DB;
class ProcesoCompraController extends Controller

{

    public function getCatalogosTransportadora(){

        $CatalogoTransportadora = DB::table('transportadoras')->select('*')->get();
        return $CatalogoTransportadora;


    }


    public function getCatalogosDirecciones($id){

        $domicilio = DB::table('domicilios')->select('*')->get();
        return $domicilio;


    }

    public function getCatalogosDepartamentos(){

        $departamentos = DB::table('departamentos')->select('*')->get();
        return $departamentos;
    }

    public function getCatalogosCiudades($id){

        $ciudades = DB::table('ciudads')->where('departamento_id' ,'=', $id)->
        get();

        return $ciudades;
    }
}
