import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { INavbarData } from '../helper';

@Component({
  selector: 'app-sublevel-menu',
  template: `
    <ul *ngIf="collapsed && data.items && data.items.length > 0" class="sublevel-nav"
      [@submenus]="expanded 
      ? {value:'visible', 
          params:{transitionParms:'400ms cubic-bezier(0.86,0,0.07,1)', height : '*'}} 
      : {value:'hidden',
        params:{transitionParms:'400ms cubic-bezier(0.86,0,0.07,1)', height : '0'}}"
          >
      <li *ngFor="let item of data.items" class="sublevel-nav-item">
        <a class="sublevel-nav-link"
        (click)="handleClick(item)"
        *ngIf="!item.items || (item.items && item.items.length > 0)"
        >
          <i class="sublevel-link-icon fa fa-circle"></i>
          <span class="sublevel-link-text" *ngIf="collapsed">{{item.label}}</span>
          <i *ngIf="item.items && collapsed" class="menu-collapse-icon"
              [ngClass]="!item.expanded ? 'fad fa-angle-right' : 'fad fa-angle-down'"]></i>
        </a>
        <a class="sublevel-nav-link"
          *ngIf="!item.items || (item.items && item.items.length === 0)"
          [routerLink]="[item.routeLink]"
          routerLinkActive="active-sublevel"
          [routerLinkActiveOptions]="{exact:true}"
        >
          <i class="sublevel-link-icon fa fa-circle"></i>
          <span class="sublevel-link-text" *ngIf="collapsed">{{item.label}}</span>
        </a>
        <div *ngIf="item.items && item.items.length > 0">
          <app-sublevel-menu
            [data]="item"
            [collapsed]="collapsed"
            [multiple]="multiple"
            [expanded]="item.expanded"
          ></app-sublevel-menu>
        </div>
      </li>
    </ul>
  `,
  styleUrls: ['../navbar.component.css'],
  animations:[
    trigger('submenus',[
      state('hidden', style({
        height:'0',
        overflow:'hidden'
      })),
      state('visible', style({
        height:'*'
      })),
      transition('visible <=> hidden', [style({overflow:'hidden'}), animate('{{transitionParms}}')]),
      transition('void => *',animate(0))
    ])
  ]
})
export class SublevelMenuComponent implements OnInit {
  

  @Input() data : INavbarData = {
    routeLink:'',
    icon:'',
    label:'',
    subMenu : false,
    items: [],
    expanded : false
  };

  @Input() collapsed = false;
  @Input() animating : boolean | undefined;
  @Input() expanded : boolean | undefined;
  @Input() multiple: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(item : INavbarData):void{
    if(!this.multiple){
      if(this.data.subMenu){
        for(let modelitem of this.data.items){
          if(item !== modelitem && modelitem.expanded){
            modelitem.expanded = false;
          }
        }
      }
    }
    item.expanded = !item.expanded;

  }
  

}
