php artisan make:model tipoProducto --migration
php artisan make:model marcas --migration
php artisan make:model tipoIdentificacion --migration
php artisan make:model CatalogoTallas --migration
php artisan make:model CatalogoColoresProducto --migration
php artisan make:model CatalogoEstilos --migration
php artisan make:model departamento --migration
php artisan make:model ciudad --migration
php artisan make:model Producto --migration
php artisan make:model descriptionProducto --migration
php artisan make:model descripcion_usuario --migration
php artisan make:model Vendedor --migration
php artisan make:model Cliente --migration
php artisan make:model Proveedores --migration
php artisan make:model ProveedorProducto --migration
php artisan make:model Compra --migration
php artisan make:model Detalle_Compra --migration
php artisan make:model Venta --migration
php artisan make:model Detalle_Venta --migration
php artisan make:model factura --migration
php artisan make:model recibo --migration
php artisan make:model comentarios --migration
php artisan migrate


New models for chat  
php artisan make:model TipoSala --migration
php artisan make:model TipoMensaje --migration
php artisan make:model Sala --migration
php artisan make:model Mensaje --migration
php artisan make:model UsuarioSala --migration
php artisan make:model TestimonialesProducto --migration
php artisan make:model Testimoniales --migration


// To add a migration 
php artisan make:migration create_estado_producto_table


// To add a migration 
php artisan make:migration  add_estado_producto_to_description_product
php artisan make:migration  add_color_id_to_description_product
php artisan make:migration  add_description_product_to_productos_imagenes


//To modify a migration
php artisan make:migration create_profiles_table --create=profiles

php artisan make:migration add_avatar_to_cliente
php artisan make:migration add_usuario_id_to_cliente
php artisan make:migration add_usuario_to_users
php artisan make:migration add_caracteriticas_to_descripcion_producto
php artisan make:migration remove_producto_id_to_catalogo_colores_productos  --table=catalogo_colores_productos
php artisan make:migration drop_pregunta_respuestas_table

php artisan make:request SignRequest

php artisan make:migration create_comentarios_table 

Renaiming a table 
php artisan make:migration testimoniales
php artisan make:migration rename_testimoniales_producto
