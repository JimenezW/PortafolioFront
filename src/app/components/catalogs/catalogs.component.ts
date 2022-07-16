import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EstadosService } from '../../services/estados/estados.service';

@Component({
  selector: 'app-catalogs',
  templateUrl: './catalogs.component.html',
  styleUrls: ['./catalogs.component.css']
})
export class CatalogsComponent implements OnInit {

  formCat:FormGroup;

  constructor(
    private _fb:FormBuilder,
    private _estadoServ:EstadosService) { 
    this.formCat = this._fb.group({
      catKey:['',Validators.required],
      name:['',Validators.required],
      abbreviate:['']
    });
  }

  ngOnInit(): void {
    this._estadoServ.get().subscribe((res)=>{
      console.log('catalg resp => ',res)
    });
  }

}
