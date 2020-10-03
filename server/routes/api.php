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
    Route::get('/get-mensaje-usuario/{id}', 'ProcesoCompraController@getMensajeUsuario');
    Route::get('/get-all-mensaje-usuarios/{id}', 'ProcesoCompraController@getAllMensajeUsuarios');
    Route::post('/mensaje', 'ChatController@enviarMensaje');
});

//My Rest API
Route::get('catalogos', 'HomeController@index');
Route::get('productosDestacados', 'HomeController@productosDestacados');
Route::get('imagenes-productos-destacados/{id?}', 'HomeController@imagenesProductos');
Route::get('testimonio-ventas', 'HomeController@testimonioVentas');
Route::get('imagenes', 'HomeController@getImagenes');
Route::get('catalogos/{id}', 'HomeController@getMarcas');

Route::group([
    'middleware' => 'api',
    ], function ($router) {
    Route::get('catalogos/marca/show/preguntas/get-questions-answers', 'PreguntaController@fetchQuestions');
    Route::post('catalogos/marca/show/preguntas', 'PreguntaController@saveQuestions');
    Route::post('catalogos/marca/show/preguntas/answers', 'PreguntaController@replayQuestions');
});

Route::get('catalogos/marca/{id}', 'HomeController@getProductos');
Route::get('catalogos/marca/colores/{id}', 'HomeController@getColorsProducts');
Route::get('catalogos/marca/show/{id}', 'catalogosController@showCatalogos');
Route::get('catalogos/marca/show/comentario/get-comments', 'commentsController@getComentarios');
Route::post('catalogos/marca/show/comentario', 'commentsController@saveComentarios');
Route::post('charges', 'StripePaymentController@saveToken');
Route::get('dashboard/compras/{id}', 'StripePaymentController@getCompras');
Route::post('procesoCompra/addDireccion', 'ProcesoCompraController@addDireccion');
Route::post('procesoCompra/mensaje', 'ProcesoCompraController@storeFirstMensaje');

//Api for Chat
// Route::resources([
// 'chat' => 'ChatController',
// ]);

Route::resource('mensaje', 'ChatController')->only([
    'index', 'create', 'store'
]);



