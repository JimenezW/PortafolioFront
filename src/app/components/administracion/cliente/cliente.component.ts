import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CodigoPostalI } from 'src/app/models/codigoPostal.interface';
import { EstadosI } from 'src/app/models/estados';
import { JsonResponceI } from 'src/app/models/JsonResponse';
import { MunicipioI } from 'src/app/models/municipios';
import { CodigoPostalService } from 'src/app/services/codigoPostal/codigo-postal.service';
import { EstadosService } from 'src/app/services/estados/estados.service';
import { MunicipioService } from 'src/app/services/municipios/municipio.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  ClientForm = new FormGroup({
      name:new FormControl('',[Validators.required]),
      apellidoP:new FormControl(),
      apellidoM:new FormControl(),
      edad:new FormControl(),
      calle:new FormControl(),
      numInt:new FormControl(),
      numExt:new FormControl(),
      codigoPostal:new FormControl('',[Validators.maxLength(5)]),
      descripcion:new FormControl(),
      idLocalidad :new FormControl(),
      idMunicipio:new FormControl(),
      idEstado:new FormControl()
  });

  lstMunicipio : MunicipioI[] = [];
  lstEstados : EstadosI[];
  lstCodigoPostal : CodigoPostalI[] = [];

  constructor(private _router : Router,
    private _snackBar: MatSnackBar, 
    private _municipioService : MunicipioService,
    private _CodPostalService : CodigoPostalService,
    private _EstadoService : EstadosService) { 

      this.lstEstados = [];
      
    }

  ngOnInit(): void {
    this.CodigoPostasChanges();
    this.GetEstados();
  }

  private GetEstados():void{
    this._EstadoService.get().subscribe((res: JsonResponceI) => {
      
      this.lstEstados = res.data;
      console.log(this.lstEstados)

    });
  }

  private CodigoPostasChanges (): void {
    this.ClientForm.get('codigoPostal')!.valueChanges.subscribe((selectedValue:string) => {
      if(selectedValue.length >= 3 && selectedValue.length < 6){
       
        this._CodPostalService.get(0,0,selectedValue,'').subscribe((res:any)=>{
          this.lstCodigoPostal = res.data;

        });
      }
    });
  }

  private MunicipioChanges():void{
    this.ClientForm.get('idMunicipio')!.valueChanges.subscribe((selectedValue:string) => {
      
    });
  }


}
