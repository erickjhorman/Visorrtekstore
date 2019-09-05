export class User {

  constructor(
    public id: number,
    public avatar: string,
    public nombre: string,
    public apellido: string,
    public telefono: string,
    public celular: string,
    public  identificacion_id?: number,
    public  departamento_id?: number,
    public  ciudad_id?: number,

  ) {  }

}
