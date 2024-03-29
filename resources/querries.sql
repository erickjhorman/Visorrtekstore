select DISTINCT 
producto.id_Producto,
Producto.NombreProducto,
tipoProducto.nombreCategoria,
marcas.nombreMarca
from producto 
inner join tipoProducto 
on tipoproducto.id_tipoProducto=producto.Tipo_de_Producto_id
inner join marcas
on  tipoproducto.id_tipoProducto=marcas.tipoProducto_id 
where id_Producto="1"
GROUP BY producto.id_Producto
;

select   
ProveedorProducto.id_ProveedorProducto,
Proveedores.nombreProveedor,
proveedorproducto.Cantidad,
Proveedores.Telefono,
proveedorproducto.material,
Producto.NombreProducto

from ProveedorProducto 
inner join Proveedores 
on Proveedores.tipoIdentificacion_id=Proveedorproducto.Proveedor_id

inner join Producto 
on Producto.Tipo_de_Producto_id=ProveedorProducto.tipoProducto_id
GROUP BY producto.id_Producto
;

SELECT
  student.firstname,
  student.lastname,
  exam.name,
  exam.date,
  grade.grade
FROM grade
 INNER JOIN student
   ON student.studentId = grade.fk_studentId
 INNER JOIN exam
   ON exam.examId = grade.fk_examId
 GROUP BY grade.gradeId
 ORDER BY exam.date

select DISTINCT 
ProveedorProducto.Proveedor_id,
producto.id_Producto,
Producto.NombreProducto,
tipoProducto.nombreCategoria,
Proveedores.nombreProveedor,
ProveedorProducto.Cantidad
from ProveedorProducto 
inner join Proveedores 
on Proveedores.id_Proveedor=ProveedorProducto.Proveedor_id 
inner join Producto
on  Producto.Tipo_de_Producto_id=ProveedorProducto.tipoProducto_id 

inner join tipoProducto
on  tipoProducto.id_tipoProducto=Producto.Tipo_de_Producto_id
GROUP BY producto.id_Producto
;

select DISTINCT 
Proveedores.id_Proveedor,
Proveedores.nombreProveedor,

tipoIdentificacion.identificacion,
Proveedores.celular,
departamento.departamento,
ciudad.ciudad,
Compra.id_compra,
Compra.Valor_Neto,
Compra.Descuento,
Compra.Fecha

from Compra 
inner join Proveedores 
on Proveedores.id_Proveedor=Compra.id_Proveedor 

inner join departamento
on  departamento.id_departamento=Proveedores.departamento_id 

inner join ciudad
on  ciudad.id_ciudad=Proveedores.ciudad_id

inner join tipoIdentificacion
on  tipoIdentificacion.id_tipoIdentificacion=Proveedores.tipoIdentificacion_id
GROUP BY Proveedores.id_Proveedor
;

select DISTINCT 
Detalle_Compra.Valor_Unidad,
Producto.NombreProducto

from Detalle_Compra 
inner join Producto 
on Producto.id_Producto=Detalle_Compra.id_Producto 

GROUP BY Detalle_Compra.Valor_Unidad
;


select DISTINCT 
Detalle_Compra.Valor_Unidad,
Producto.NombreProducto

from Detalle_Compra 
inner join Producto 
on Producto.id_Producto=Detalle_Compra.id_Producto 

GROUP BY Detalle_Compra.Valor_Unidad
;

select DISTINCT 
Cliente.Nombre,
Vendedor.Nombre,
Venta.id_Venta,
Venta.Valor_Neto

from Venta 
inner join Cliente 
on Cliente.id_Cliente=Venta.id_cliente

inner join Vendedor 
on Vendedor.id_Vendedor=Venta.id_Vendedor

GROUP BY Venta.id_Venta
;

select DISTINCT 
Detalle_Venta2.id_detalle_Venta,
Detalle_Venta2.Venta_id,
Detalle_Venta2.Cantidad,
Detalle_Venta2.Valor_Pagar,
Venta.Fecha,
marcas.nombreMarca,
Producto.NombreProducto

from Detalle_Venta2

inner join Venta 
on Venta.id_Venta=Detalle_Venta2.Venta_id

inner join Producto 
on Producto.id_Producto=Detalle_Venta2.Producto_id

inner join marcas
on  marcas.id_marcas=Producto.marca 

GROUP BY Detalle_Venta2.id_detalle_Venta

;


  $Productos =  DB::table('productos')
                 ->join('marcas', 'marcas.id', '=', 'productos.marca_id')
                 ->select('productos.*')
                 ->where('marca_id', '=', $id)
                 ->get();

                 return $Productos;


                 select imagenes.imagen,evento.id,evento.titulo,evento.description FROM evento 
         inner join imagenes  
         on imagenes.id=evento.imagen_id 
     ORDER BY evento.id desc
         LIMIT 5;
       

       select * from (
    SELECT id_hr, hrs_ini, hrs_ter, lunes, martes, miercoles, jueves, viernes, sabado, 
    fecha_registro
    FROM horario
    INNER JOIN usuarios ON horario.rut_usu = usuarios.rut_usu
    WHERE fecha_registro = (SELECT MAX(fecha_registro) FROM horario) ORDER BY id_hr DESC LIMIT 14
) tmp order by tmp.id_hr asc



       
select mensajes.* 
from mensajes
where mensajes.Sala_id = (
select DISTINCT 
salas.id
from salas 
where salas.venta_id = '4'
GROUP BY salas.venta_id)
;


select mensajes.* 
from mensajes
where mensajes.Sala_id = (
select DISTINCT 
salas.id
from salas 
where salas.venta_id = '4'
GROUP BY salas.venta_id)
;

 $mensajeSala = DB::table('salas')
                       ->select('salas.id')
                       ->where('salas.venta_id', '=', $id)
                       ->groupBy('salas.venta_id')
                       ->distinct()
                       ->get();
        
        
        $mensajes = DB::table('mensajes')
            ->select('*')
            ->joinSub()
            ->where('mensajes.Sala_id', '=', $mensajeSala)
            ->get();

       return  $mensajes;


         $mensajeSala = DB::table('mensajes')
        ->whereExists(function ($query) {
            $query->select(DB::raw('salas.id'))
                  ->from('salas')
                  ->WhereIn('salas.venta_id', '=', $id);
        })
        ->get();

        return $mensajeSala;


   ----------------------------------------
   To get all the Featured Products
   select distinct nombre, Cantidad , count(Producto_id) as valor_repetido 
from detalle__ventas
group  BY nombre
ORDER BY valor_repetido DESC LIMIT 0,5;

select distinct nombre, Cantidad, imagen,  count(Producto_id) as valor_repetido 
from detalle__ventas

inner join productos 
on detalle__ventas.Producto_id=productos.id
group  BY nombre
ORDER BY valor_repetido DESC LIMIT 0,5;


select DISTINCT 
catalogo_colores_productos.id,
catalogo_colores_productos.color
from description_productos 
inner join productos
on productos.id=description_productos.Producto_id

inner join catalogo_colores_productos
on catalogo_colores_productos.id=description_productos.color_id
where  description_productos.Producto_id="6"
GROUP BY catalogo_colores_productos.id;


