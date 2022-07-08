import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";
import { UserI } from "../../models/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _authService : AuthService, private _router : Router) { }

  ngOnInit(): void {
  }

  onLogin(form:any):void{
    this._authService.login(form.value).subscribe(res=>{
      this._router.navigateByUrl('/auth');
    });
  }

}
