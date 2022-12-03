import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MessagueGenericService } from 'src/app/util.service/message/messageGeneric.Service';
import { MessageLogin } from 'src/app/globalsConst/message.login';

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
    private _snackBar: MatSnackBar,
    private _messague: MessagueGenericService) {

      this.form = this._fb.group({
        username:['',Validators.required],
        password:['',Validators.required]
      });

     }

  ngOnInit(): void {
  }

  onLogin():void{
    this._authService.login(this.form.value).subscribe(res=>{
      
      if(res.token != undefined && res.token  != null && res.token != ''){
        this._router.navigateByUrl('/dashboard');
      }else{
        if(res != undefined && res.status != undefined && res.status == 401)
        this._messague.message('Aviso',MessageLogin.loginFaild, 3);
      }
    });
  }

  openModal() {
    this._messague.message('Aviso','hola');
  }

}
