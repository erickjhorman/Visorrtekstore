import { Component, OnInit ,Inject } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDialogRef,MAT_DIALOG_DATA} from '@angular/material';
import { MatTableDataSource } from '@angular/material'; //To get the information to store in the table
import {CatalogoServes} from '../../../../services/Catalogos/catalogos.service';
import {FormDireccioneUsuarioComponent} from '../procesoCompra/form-direccione-usuario/form-direccione-usuario.component';
import {FormTransportadoraComponent} from '../procesoCompra/form-transportadora/form-transportadora.component';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {SharedService} from '../../../../services/shared/shared.service';
import {PagoService} from '../../../../services/pagos/pago.service';
import {Router} from "@angular/router";


@Component({
  selector: 'app-proceso-compra',
  templateUrl: './proceso-compra.component.html',
  styleUrls: ['./proceso-compra.component.css']
})

export class ProcesoCompraComponent implements OnInit {

  private user : any;
  valuesArrayCompras: any;
  precio_total: number;
  valuesFormDireccione: any;
  valuesFormTransportadora: any;

  private transportadora: any;
  private departamentos: any;
  private ciudades: any;
  isLinear = false;
  show = false;

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  forthFormGroup: FormGroup;

  constructor( @Inject(MAT_DIALOG_DATA) public data: any , private _formBuilder: FormBuilder,private dialogRef: MatDialogRef<ProcesoCompraComponent>,
  private  cataServes: CatalogoServes , private dialog: MatDialog , private sharedService: SharedService, private pagosServices: PagoService,private router:Router )  {
  console.log(data);

  //To share the form in preceso compra componenet
 this.sharedService.formValues.subscribe(valuesForm => {
  this.valuesFormDireccione = valuesForm
  console.log(this.valuesFormDireccione);

  });

   //To share the form in preceso compra componenet
 this.sharedService.formValuesTransportadora.subscribe(valuesForm => {
  this.valuesFormTransportadora = valuesForm
  console.log(this.valuesFormTransportadora);





  });


}





  //Code for create the table with information
  listData :  MatTableDataSource<any>;
  displayedColumns: string[] = ['Nombre','cantidad','valorventa'];


  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });


    this.createTableToshow();


    //To get the information from  a sessionStorage
    var user = sessionStorage.getItem('userAuth');
    this.user =  JSON.parse(user);
    console.log(this.user);

  }



  createTableToshow(){
    const finalArrayTotalItem =this.data
    this.listData = new MatTableDataSource(finalArrayTotalItem);

  }

  getTotalPrice(){
  for (let i = 0; i <this.data.length; i++) {
     this.precio_total = this.data[i].Total;
    return this.precio_total;
  }

  }


  //Get nombre transportadora
  getTransportadora(){
  this.cataServes.getTransportadoras().subscribe(
   res => {
    this.transportadora= res
    this.onCreateDialogTransportadora(this.transportadora);
   },
   err => console.log(err)


  )
  }

  //To get the deparment for direccion Form
  getDepartamentos(){
    this.cataServes.getDepartamentos().subscribe(
      res =>{

            this.departamentos= res
            this.onCreateDialogDireccionUsuario(this.departamentos);


      },
      err => console.log(err)
    )
  }

  getCiudades(id:number){
    this.cataServes.getCiudades(id).subscribe(
      res =>{
           this.ciudades = res
      },
      err => console.log(err)
    )

  }


  //Dialog para transportadora
  onCreateDialogTransportadora(transportadora:any){
    const dialogConfig = new  MatDialogConfig();
    //console.log("1 paso" + productoShow)
    let t = transportadora
    //console.log("Create productos" + showProductos)
    dialogConfig.disableClose = true;
    //dialogConfig.autoFocus = true;
    dialogConfig.width = "400px";
    dialogConfig.height = "400px";
   // dialogConfig.data = {name : 'Erick'}
    dialogConfig.data = t;
    this.dialog.open(FormTransportadoraComponent, dialogConfig,)
    this.dialog.afterAllClosed.subscribe(res => {
     //this.ocultarItemSelleccionado = true;
    //console.log("Respuesta" + this.ocultarItemSelleccionado);
    });
  }

    //Dialog para direccion usuario
    onCreateDialogDireccionUsuario(departamentos:any){
      const dialogConfig = new  MatDialogConfig();
      let  d  = departamentos;
      dialogConfig.disableClose = true;
      //dialogConfig.autoFocus = true;
      dialogConfig.width = "600px";
      dialogConfig.height = "400px";
     // dialogConfig.data = {name : 'Erick'}
      dialogConfig.data = d;
      this.dialog.open(FormDireccioneUsuarioComponent, dialogConfig,)
      this.dialog.afterAllClosed.subscribe(res => {
       //this.ocultarItemSelleccionado = true;
      //console.log("Respuesta" + this.ocultarItemSelleccionado);
      });
    }

    onClose(){
    this.dialogRef.close();
   }


   redirigeDashboard(){
   this.dialogRef.close();
   this.router.navigateByUrl('/dashboard');  //To redirect to another component
   }

   enviarMensajeVendedor(){
   this.show = !this.show;
   }


}

