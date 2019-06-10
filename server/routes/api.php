<?php



Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {

    Route::post('login', 'AuthController@login');
    Route::post('signup', 'AuthController@signup');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');
    Route::post('sendPasswordResetLink', 'ResetPasswordController@sendEmail');
    Route::post('resetPassword', 'ChangePasswordController@process');

});

//My Rest API
Route::get('catalogos', 'HomeController@index');
Route::get('imagenes', 'HomeController@getImagenes');
Route::get('catalogos/{id}','HomeController@getMarcas');
//Route::get('catalogos/{catalogo}/{marca}/{id}','HomeController@getProductos');
Route::get('catalogos/marca/{id}','HomeController@getProductos');
//Route::get('catalogos/{id}','HomeController@getProductos');
Route::get('catalogos/marca/show/{id}','commentsController@comentarios');
