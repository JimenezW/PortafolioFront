import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  ClientForm : FormGroup;

  constructor(private _router : Router,
    private _fb:FormBuilder,
    private _snackBar: MatSnackBar) { 
      this.ClientForm = this._fb.group({
        name:['',Validators.required],
        apellidoP:[''],
        apellidoM:[''],
        edad:[''],
        calle:[''],
        numInt:[''],
        numExt:[''],
        codigoPostal:[''],
        descripcion:[''],
        idLocalidad :[''],
        idMunicipio:[''],
        idEstado:['']
      });
    }

  ngOnInit(): void {
  }

}
