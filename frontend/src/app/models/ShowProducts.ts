export interface ShowProducts {
  id?: number;
  producto_name: string;
  Descripcion: string;
  id_description_product: number;
  color: string;
  talla: string;
  Existencia: number;
  Forma_id: number;
  Producto: number;
  id_producto: number;
  Producto_id: number;
  ValorMin: number;
  Valor_Venta: number;
  caracteristicas;
  color_id: number;
  estado_producto_id: number;
  imagen: number;
  marca_id: number;
  talla_id: number;
  imagenes: any;
  comentarios: any;
  created_at?: Date;
  updated_at?: Date;
}
