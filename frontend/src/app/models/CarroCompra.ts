export interface CarroCompra {
  id?: number;
  producto: string;
  color: number;
  talla: number;
  existencia: number;
  precio: number;
  producto_id: number;
  valorVenta: number;
  cantidad: number;
  created_at?: Date;
}
