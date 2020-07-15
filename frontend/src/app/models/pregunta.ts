export interface Pregunta {
  id?: number;
  usuario_id?: number;
  pregunta_id: number;
  respuesta_id: number;
  pregunta: string;
  respuesta?: string;
  nombre: string;
  avatar: string;
  created_at?: string;
  updated_at?: string;
}
