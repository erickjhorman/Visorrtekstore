export interface CarroCompra {
  id?: number;
  producto_name: string;
  color: number;
  talla: number;
  existencia: number;
  imagen: string;
  precio: number;
  producto_id: number;
  valorVenta: number;
  cantidad: number;
  created_at?: Date;
}
