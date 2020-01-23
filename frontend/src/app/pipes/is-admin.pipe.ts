import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "isAdmin"
})
export class IsAdminPipe implements PipeTransform {
  transform(values: any[], args?: any): any {
    return values.filter(mensaje => mensaje.usuario_id == 2);
  }
}
