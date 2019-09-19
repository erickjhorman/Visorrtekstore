<?php

namespace app\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use app\model\Cliente;
use app\model\Domicilio;
use Illuminate\Support\Facades\Input;
class dashboarUsuarioControlador extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($id)
    {
         $Clientes =  DB::table('clientes')
        ->select('clientes.*')
        ->where('usuario_id', '=', $id)
        ->get();

        return $Clientes;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {



        $domicilio = new Domicilio();


        $domicilio->cliente_id = $request->cliente_id;
        $domicilio->departamento_id = $request->departamento_id;
        $domicilio->ciudad_id = $request->ciudad_id;
        $domicilio->nombre = $request->nombre;
        $domicilio->apellido = $request->apellido;
        $domicilio->barrio = $request->barrio;
        $domicilio->direccion = $request->direccion;
        $domicilio->celular = $request->celular;
        $domicilio->datos_adicionales = $request->datos_adicionales;

        $domicilio->save();
        return $domicilio;
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

        $cliente = Cliente::where('usuario_id','=',$id)->firstOrFail();
        // $cliente = Cliente::find($id);
        $input = $request->all();
        return $input;


        for ($i=0; $i<count($input) ; $i++) {
            $tipoIdentificacion_id = $input['tipoIdentificacion_id'];
            $departamento_id = $input['departamento_id'];
            $ciudad_id = $input['ciudad_id'];
            $nombre = $input['nombre'];
            $apellido =  $input['apellido'];
            $telefono = $input['telefono'];
            $celular = $input['celular'];
           }


        $cliente->tipoIdentificacion_id = $tipoIdentificacion_id;
        $cliente->departamento_id = $departamento_id;
        $cliente->ciudad_id =  $ciudad_id;
        $cliente->nombre =   $nombre;
        $cliente->apellido =  $apellido;
        $cliente->telefono = $telefono;
        $cliente->celular =  $celular;
        $cliente->save();



        // $clienteUpdated = DB::table('clientes')
        //                   ->where('usuario_id','=','$id')
        //                   ->get();

        //$clienteUpdated->update($request->all());


        //return "actualizado";



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
