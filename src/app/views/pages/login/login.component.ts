import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/aut/auth.service';
import { MessageTemplateComponent } from 'src/app/util.service/message/component/messageTemplate.component';
import { Message } from "../../../globalsConst/messagesGlobals";
import { MessageGenericService } from '../../../util.service/message/messageGeneric.Service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit  {
  //@ViewChildren (MessageTemplateComponent)  message!: MessageTemplateComponent;

  formLogin : FormGroup;

  constructor(
    private _router:Router,
    private _authService : AuthService,
    private _fb: UntypedFormBuilder,
    private _alert : MessageGenericService
    ) 
  {
    this.formLogin = this._fb.group({
      username:['',Validators.required],
      password:['',Validators.required]
    });
  }
  ngOnInit(): void {
   // console.warn('on init', this.message);
  }
  ngAfterViewInit(): void {
    //console.warn('ngAfterViewInit', this.message);

   // this.message.find(0)?.toggleLiveDemo();

   
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
        //this._messageService.message('Aviso',Message.Generics.ConnectError, 3);
      }
    });
  }

  public register():void{
    
    this._router.navigateByUrl('/auth/register');
  }

  public modal():void{
   this._alert.AClicked('hola');
   this._alert.aClickedEvent.emit('hola')
  }


}
