import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {CatalogoServes} from '../../../../../services/Catalogos/catalogos.service';
import {NotificationService} from '../../../../../services/shared/notification.service';
import {DashboardService} from "../../../../../services/shared/dashboard.service";
@Component({
  selector: 'app-add-direccion',
  templateUrl: './add-direccion.component.html',
  styleUrls: ['./add-direccion.component.css']
})
export class AddDireccionComponent implements OnInit {

  private departamentos: any;
  private ciudades: any;
  private user : any;

  formAddress: FormGroup = new FormGroup({
    cliente_id: new FormControl(1),
    nombre: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
    apellido: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
    barrio: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
    datos_adicionales: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(60)]),
    celular: new FormControl('', [Validators.required, Validators.minLength(13), Validators.maxLength(13)]),
    direccion: new FormControl('', [Validators.required, Validators.minLength(13), Validators.maxLength(20)]),
    departamento_id: new FormControl('', [Validators.required]),
    ciudad_id: new FormControl('', [Validators.required]),
  });

  restartFormGroup(){
    this.formAddress.setValue({

      nombre: '',
      apellido: '',
      celular: '',
      departamento_id: '',
      ciudad_id: '',
      cliente_id: 0,
      barrio:'',
      datos_adicionales:'',
      direccion:'',
    })
  }


  constructor(private cataloServe :CatalogoServes,private dashboardService:DashboardService, private notificacion: NotificationService) { }




  ngOnInit() {

    //To get the information from  a sessionStorage
    var user = sessionStorage.getItem('userAuth');
    this.user =  JSON.parse(user);
    console.log(this.user);


    this.getDepartamentos();
}


getDepartamentos(){
  this.cataloServe.getDepartamentos().subscribe(
    res =>{

          this.departamentos= res
          console.log(this.departamentos);
         },
    err => console.log(err)
  )
}

 //To get the ciudades for direccion Form
 getCiudades(id:number){
  this.cataloServe.getCiudades(id).subscribe(
    res =>{
         this.ciudades = res
         console.log(res);
    },
    err => console.log(err)
  )

}

onClear(){
  this.formAddress.reset();
  this.restartFormGroup();

 }


ChangeId(selectedId:number){

  this.getCiudades(selectedId);
  console.log(selectedId)
}

onAddAdress(){

  if(this.formAddress.valid){
    console.log(this.formAddress.value);
    this.dashboardService.guardarDirecion(this.formAddress.value).subscribe(

      res => {

        this.formAddress.reset();
        this.restartFormGroup();
        this.notificacion.success('Direccion  guardada satisfactoriamente');
      },
      err => console.log(err)
     )
   }
  }



}
