export class Comentario {
  constructor(
    public idComentario: number,
    public descriptionProducto_id?: number,
    public usuario_id?: number,
    public color_id?: number,
    public comentario?: string,
    public nombre?: string,
    public avatar?: string,
    public createdAt?: Date,
    public update_at?: Date
  ) { }
}
