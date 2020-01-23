export interface Mensaje {
  id?: number;
  sala_id: number;
  usuario_id: number;
  tipoMensaje_id: number;
  mensaje: string;
  url?: String;
  created_at?: Date;
  update_at?: Date;
}
