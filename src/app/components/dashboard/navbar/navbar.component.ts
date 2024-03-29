
import { animate, keyframes, style, transition, trigger } from '@angular/animations/animations';
import { Component, OnInit, Output, EventEmitter, HostListener } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';
import { INavbarData } from './helper';
//import { EventEmitter } from 'stream';
import { navbarData } from './nav-data';

interface SideNavToggle {
  screenWidth : number,
  collased:boolean
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations:[
    trigger('fadeInOut',[
      transition(':enter',[
        style({opacity:0}),
          animate('350ms',
        style({opacity:1})
        )
      ]),
      transition(':leave',[
        style({opacity:1}),
        animate('350ms',
          style({opacity:0})
        )
      ])
    ]),
    trigger('rotate',[
      transition(':enter',[
        animate('1000ms',
        keyframes([
          style({transform:'rotate(0deg)', offset:'0'}),
          style({transform:'rotate(2turn)', offset:'1'})
        ]))
      ])
    ])
  ]
})

export class NavbarComponent implements OnInit {
  collapsed = false;
  navData = navbarData
  multiple:boolean = false;
  screenWidth = 0;


constructor(private authService : AuthService,private _router : Router,){

}

  @Output() onToggleSideNav : EventEmitter<SideNavToggle> = new EventEmitter();

  @HostListener('window:resize',['$event'])
  onResize(evet : any){
    this.screenWidth = window.innerWidth;
    if(this.screenWidth <= 768){
      this.collapsed = false;
      this.onToggleSideNav.emit({collased : this.collapsed, screenWidth : this.screenWidth});
    }
  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }
  
  toggleCollapse() : void {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({collased : this.collapsed, screenWidth : this.screenWidth});
  }
  closeSidenav() : void {
    this.collapsed = false;
    this.onToggleSideNav.emit({collased : this.collapsed, screenWidth : this.screenWidth});
  }

  handleClick(item : INavbarData):void{
    if(!this.multiple){
        for(let modelitem of this.navData){
          if(item !== modelitem && modelitem.expanded){
            modelitem.expanded = false;
          }
        }
    }
    item.expanded = !item.expanded;

  }

  singOut():void{
    this.authService.logout();
    this._router.navigateByUrl('/');
    
  }

}
