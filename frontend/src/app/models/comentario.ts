export interface Comentario {
  id?: number;
  producto_id: number;
  usuario_id: number;
  comentario:  number;
  estado:number;
  created_at?:Date;
  update_at?:Date;
}
