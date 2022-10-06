import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { map, Observable, startWith, of } from 'rxjs';
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
      idEstado:new FormControl(),
      Colonia : new FormControl()
  });

  lstMunicipio : MunicipioI[] = [];
  lstEstados : EstadosI[];
  lstCodigoPostal : CodigoPostalI[] = [];
  filteredOptions: Observable<string[]>; 

  constructor(private _router : Router,
    private _snackBar: MatSnackBar, 
    private _municipioService : MunicipioService,
    private _CodPostalService : CodigoPostalService,
    private _EstadoService : EstadosService) { 

      this.lstEstados = [];
      this.filteredOptions = of([]);
    }

  ngOnInit(): void {
    this.CodigoPostasChanges();
    this.EstadoChangues();
    //this.MunicipioChanges();
    this.GetEstados();

    this.filteredOptions = this.ClientForm.controls['Colonia']!.valueChanges.pipe(
      startWith(''),
      map((value:string) => this._filter(value))

    );
  }

  Save():void{
    console.log(this.ClientForm.value)
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.lstCodigoPostal.filter((option:CodigoPostalI) => option.codigo.toString().toLowerCase().includes(filterValue)).map(x=> x.codigo +' - '+x.name);
  }

  private GetEstados():void{
    this._EstadoService.get().subscribe((res: JsonResponceI) => {
      
      this.lstEstados = res.data;

    });
  }

  private CodigoPostasChanges (): void {
    this.ClientForm.get('codigoPostal')!.valueChanges.subscribe((selectedValue:string) => {
      if(selectedValue.length >= 3 && selectedValue.length < 6){
       
        this._CodPostalService.get(0,0,selectedValue,'').subscribe((res:any)=>{
          this.lstCodigoPostal = res.data;

        });
      }

      if(selectedValue.length === 5){
        this._municipioService.find(this.lstCodigoPostal[0].idMunicipio).subscribe((res : JsonResponceI)=>{

          if(res.codeResult === 200 && res.data != null){
            this.lstMunicipio = [res.data];
            this.ClientForm.controls['idMunicipio'].patchValue(this.lstCodigoPostal[0].idMunicipio);
            this.ClientForm.controls['idEstado'].setValue(this.lstMunicipio[0].idEstado);
            
          }
        });
      }
    });
  }

  private EstadoChangues() : void {
    this.ClientForm.get('idEstado')!.valueChanges.subscribe((selectedValue : number) => {
      if((this.lstMunicipio.length === 0 || this.lstMunicipio.length > 1) || (this.lstMunicipio[0].idMunicipio != undefined && this.lstMunicipio[0].idEstado != selectedValue)){
        this.AllMunicipioEstado(selectedValue);
      }
    });
  }

  private AllMunicipioEstado(IdEstado : number) : void {
    this._municipioService.getAllMunicipioEstado(IdEstado).subscribe((res: JsonResponceI)=>{
      if(res.codeResult === 200 && res.data.length > 0){
        this.lstMunicipio = res.data;
      }
    });
  }

  private MunicipioChanges():void{
    this.ClientForm.get('idMunicipio')!.valueChanges.subscribe((selectedValue:Number) => {
      debugger
      /*this._municipioService.find(selectedValue).subscribe((res : JsonResponceI)=>{
        this.lstMunicipio = [res.data];
      });*/
    });
  }


}
