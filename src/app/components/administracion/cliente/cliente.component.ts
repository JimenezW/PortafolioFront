import { Component, OnInit, Output, ViewContainerRef, ViewChild } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { map, Observable, startWith, of } from 'rxjs';
import { CodigoPostalI } from 'src/app/models/codigoPostal.interface';
import { EstadosI } from 'src/app/models/estados';
import { GridColumnI } from 'src/app/models/gridColum.interface';
import { GridRowI } from 'src/app/models/gridRow.interface';
import { JsonResponceI } from 'src/app/models/JsonResponse';
import { MunicipioI } from 'src/app/models/municipios';
import { ClientService } from 'src/app/services/cliente/client.service';
import { CodigoPostalService } from 'src/app/services/codigoPostal/codigo-postal.service';
import { EstadosService } from 'src/app/services/estados/estados.service';
import { MunicipioService } from 'src/app/services/municipios/municipio.service';
import { GridComponentComponent } from 'src/app/util.service/grid/componet/grid.component';
import { GridComponentService } from 'src/app/util.service/grid/grid.component.sevice';
import { ClientInterfaceI } from "../../../models/client.interface";

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
      idCodigoPostal:new FormControl(),
      Colonia : new FormControl()
  });

  lstMunicipio : MunicipioI[] = [];
  lstEstados : EstadosI[];
  lstCodigoPostal : CodigoPostalI[] = [];
  filteredOptions: Observable<string[]>; 
  newClient : ClientInterfaceI = {
    idCliente : 0,
    idPersona : 0,
    active : false,
    nombre : '',
    apellidoP : '',
    apellidoM : '',
    edad : 0,
    domicilio : []
  };

  @Output() Element_Data: GridColumnI[] = [
    {field : 'nombre', title : 'Nombre', postion : 1, wight : 100, sortable : false},
    {field : 'edad', title : 'Edad', postion : 2, wight : 25.03, sortable : false},
    {field : 'descripcion', title : 'Domicilio', postion : 3, wight : 25.03, sortable : false},
    {field : 'codigoPostal', title : 'Codigo postal', postion : 4, wight : 25.03, sortable : false},
  ];

  _dataSource : GridRowI[] = [];

  @ViewChild('grid_cliente', { static: true, read: ViewContainerRef })
  viref!: ViewContainerRef;

  constructor(
    private _municipioService : MunicipioService,
    private _CodPostalService : CodigoPostalService,
    private _ClientService : ClientService,
    private _EstadoService : EstadosService,
    private _gridService : GridComponentService) {
      
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

    this.consultar();

    this._gridService.mostrarGrid(this.viref);
    //this.viref.clear();
    //this.viref.createComponent(GridComponentComponent)
  }

  Save():void{

    if(this.ClientForm.invalid)
    return;

    let FormCon = this.ClientForm.value;
    
    this.newClient.nombre = FormCon.name;
    this.newClient.apellidoP = FormCon.apellidoP;
    this.newClient.apellidoM = FormCon.apellidoM;
    this.newClient.active = true;
    this.newClient.edad = FormCon.edad
    this.newClient.domicilio = [
      {
        idDomicilio : 0,
        idEstado : FormCon.idEstado,
        idMunicipio : FormCon.idMunicipio,
        calle : FormCon.calle,
        numInt :FormCon.numInt,
        numExt : FormCon.numExt,
        codigoPostal : FormCon.codigoPostal,
        description : FormCon.descripcion,
        Colonia : ''
      }
    ];

    this._ClientService.save(this.newClient).subscribe(response => {
      debugger
    });
    

  }

  consultar(){
    this._ClientService.consultar(8,'','','').subscribe(res => {
      
      this._dataSource;
    });
  }

  limpiar():void{
    this.ClientForm.reset();
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.lstCodigoPostal.filter((option:CodigoPostalI) => option.name.toString().toLowerCase().includes(filterValue)).map(x=> x.codigo +' - '+x.name);
  }

  private GetEstados():void{
    this._EstadoService.get().subscribe((res: JsonResponceI) => {
      
      this.lstEstados = res.data;

    });
  }

  private CodigoPostasChanges (): void {
    this.ClientForm.get('codigoPostal')!.valueChanges.subscribe((selectedValue:string) => {
      if(selectedValue.length >= 3 && selectedValue.length < 6){
        let idMunicipio = 0;

        if (this.ClientForm.controls['idMunicipio'].value != null && this.ClientForm.controls['idMunicipio'].value != 0)
        idMunicipio = this.ClientForm.controls['idMunicipio'].value;

        this._CodPostalService.get(0, idMunicipio, selectedValue,'').subscribe((res:any)=>{
          this.lstCodigoPostal = res.data;

        });
      }
/*
      if(selectedValue.length === 5){
        this._municipioService.find(this.lstCodigoPostal[0].idMunicipio).subscribe((res : JsonResponceI)=>{

          if(res.codeResult === 200 && res.data != null){
            this.lstMunicipio = [res.data];
            this.ClientForm.controls['idMunicipio'].patchValue(this.lstCodigoPostal[0].idMunicipio);
            this.ClientForm.controls['idEstado'].setValue(this.lstMunicipio[0].idEstado);
            
          }
        });
      }*/
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
function ViewChield(grid_cliente: any) {
  throw new Error('Function not implemented.');
}

