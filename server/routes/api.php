<?php

use Illuminate\Support\Facades\Route;

Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {

    Route::post('admin/login', 'AuthController@login');
    Route::post('login', 'AuthController@login');
    Route::post('signup', 'AuthController@signup');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');
    Route::post('sendPasswordResetLink', 'ResetPasswordController@sendEmail');
    Route::post('resetPassword', 'ChangePasswordController@process');
});

Route::group(
    [
        'middleware' => 'api',
        'prefix' => 'user'
    ],
    function ($router) {

        Route::get('transportadora', 'ProcesoCompraController@getCatalogosTransportadora');
        Route::get('direcciones/{id}', 'ProcesoCompraController@getCatalogosDirecciones');
        Route::get('departamentos', 'ProcesoCompraController@getCatalogosDepartamentos');
        Route::get('departamentos/ciudades/{id}', 'ProcesoCompraController@getCatalogosCiudades');
    }
);

Route::group([
    'middleware' => 'api',
    'prefix' => 'dashboard'
], function ($router) {
    Route::get('/datos-personales/{id}', 'dashboarUsuarioControlador@index');
    Route::put('/datos-personales/{id}', 'dashboarUsuarioControlador@update');
    Route::post('/datos-personales/addDireccion', 'dashboarUsuarioControlador@store');
    Route::get('/datos-personales/getDireccion/{id}', 'dashboarUsuarioControlador@getDireccion');
});

Route::group([
    'middleware' => 'api',
    'prefix' => 'admin'
], function ($router) {
    Route::get('/list-ventas', 'dashboarAdminControlador@index');
});



//My Rest API
Route::get('catalogos', 'HomeController@index');
Route::get('catalogos/productosDestacados', 'HomeController@productosDestacados');
Route::get('imagenes', 'HomeController@getImagenes');
Route::get('catalogos/{id}', 'HomeController@getMarcas');
//Route::get('catalogos/{catalogo}/{marca}/{id}','HomeController@getProductos');
Route::get('catalogos/marca/{id}', 'HomeController@getProductos');
//Route::get('catalogos/{id}','HomeController@getProductos');
//Route::get('catalogos/marca/show/{id}','commentsController@comentarios');
Route::get('catalogos/marca/show/{id}', 'commentsController@comentarios');
Route::get('catalogos/marca/show/comentario/{id}', 'commentsController@getComentarios');
Route::post('catalogos/marca/show/comentario', 'commentsController@SaveComentarios');
Route::post('v1/charges', 'stripePaymentController@saveToken');
Route::get('dashboard/compras/{id}', 'stripePaymentController@getCompras');
Route::post('procesoCompra/addDireccion', 'ProcesoCompraController@addDireccion');
