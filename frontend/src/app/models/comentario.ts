export class Comentario {

  constructor (
  public id: number,
  public producto_id: number,
  public  usuario_id: number,
  public comentario?: string,
  public created_at?:Date,
  public update_at?:Date

  ){ }

}
