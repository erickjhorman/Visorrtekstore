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

    // $user = app\User::findOrfail(1);

    // return $user->Salas;

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

    // return $colores;
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
