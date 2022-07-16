import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";
import { UserI } from "../../models/user";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logo = 'https://upload.wikimedia.org/wikipedia/commons/5/50/User_icon-cp.svg';

  form:FormGroup;


  constructor(
    private _authService : AuthService, 
    private _router : Router,
    private _fb:FormBuilder,
    private _snackBar: MatSnackBar) {

      this.form = this._fb.group({
        email:['',Validators.required],
        password:['',Validators.required]
      });

     }

  ngOnInit(): void {
  }

  onLogin():void{
    this._authService.login(this.form.value).subscribe(res=>{
      
      if(res.ok || res.ok === undefined){
        this._router.navigateByUrl('/dashboard');
      }else{
        this._snackBar.open(res.error.message, '', {
          horizontalPosition: 'end',
          verticalPosition: 'top',duration:5*1000
        });
      }
    });
  }

}
