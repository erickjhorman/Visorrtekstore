<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    //return view('welcome');

    $user = app\Pregunta::findOrfail(1);
    //$users = app\Pregunta::with('pregunta_respuesta')->get();


    foreach ($user->respuestas as $role) {
        echo $role->pregunta_respuesta->respuesta_id;
    }

    //To save a record
    // $salas = app\Sala::findOrfail(1);
    // $salas->Users()->attach(1);

    //To remove a record
    // $salas = app\Sala::findOrfail(1);
    // $salas->Users()->detach(1);

    //To insert only one record
    // $salas = app\Sala::findOrfail(1);
    // $salas->Users()->sync(1);

    // $colores =  DB::table('catalogo_colores_productos')
    // ->leftJoin('productos', 'productos.id', '=', 'catalogo_colores_productos.id')
    // ->select('catalogo_colores_productos.color')
    // ->distinct()
    // ->get();

    //  return $colores;

    //$user = app\Respuesta::find(1);



    $userData = DB::table('users')
    ->join('clientes', 'usuario_id', '=', 'users.id')
    ->select('clientes.nombre','clientes.apellido')
    ->where('users.email', '=', 'erickjhorman@gmail.com')
    ->get();

    //return $userData;
});

Auth::routes();

//Route::get('/home', 'HomeController@index')->name('home');
