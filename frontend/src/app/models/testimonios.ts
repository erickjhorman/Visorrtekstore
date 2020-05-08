export interface Testimonio {
  id: number;
  usuario_id: number;
  testimonio: string;
  nombre: string;
  apellido: string;
  imagen: string;
  avatar: string;
  created_at?: Date;
  update_at?: Date;
}
