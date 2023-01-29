import { Component } from '@angular/core';
import { FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/aut/auth.service';
import { Message } from "../../../globalsConst/messagesGlobals";
import { MessageGenericService } from '../../../util.service/message/messageGeneric.Service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  
  formLogin : FormGroup;

  constructor(
    private _router:Router,
    private _authService : AuthService,
    private _fb: UntypedFormBuilder,
    private _messageService : MessageGenericService
    ) 
  {
    this.formLogin = this._fb.group({
      username:['',Validators.required],
      password:['',Validators.required]
    });
  }

  public login():void{
    this._authService.login(this.formLogin.value).subscribe(res=>{
      
      if(res.token != undefined && res.token  != null && res.token != ''){
        this._router.navigateByUrl('/dashboard');
      }else{
        if(res != undefined && res.status != undefined && res.status == 401)
        console.log('Message.Login.faild => ',Message.Login.faild);
        //this._messague.message('Aviso',MessageLogin.loginFaild, 3);

        if(res != undefined && res.status != undefined && res.status == 504)
        console.log('Message.Generics.ConnectError ==> ',Message.Generics.ConnectError)
        this._messageService.message('Aviso',Message.Generics.ConnectError, 3);
      }
    });
  }

  public register():void{
    
    this._router.navigateByUrl('/auth/register');
  }

}
