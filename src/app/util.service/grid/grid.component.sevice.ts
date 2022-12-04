import {
    ComponentFactoryResolver,
    ComponentRef,
    Injectable,
    ViewContainerRef,
  } from '@angular/core';
import { Subject } from 'rxjs';
import { GridComponentComponent } from './componet/grid.component';
  
  
  
  @Injectable({ providedIn: 'root' })
  export class GridComponentService {

    private componentRef!: ComponentRef<GridComponentComponent>;
    private componentSubscriber!: Subject<string>;

    constructor(private resolver: 
        ComponentFactoryResolver){}
    
    mostrarGrid(entry: ViewContainerRef){
        this.componentRef = entry.createComponent<GridComponentComponent>(GridComponentComponent);
        //let factory = this.resolver.resolveComponentFactory(GridComponentComponent);
        debugger
        //this.componentRef = entry.createComponent(factory);
    }
    
  }



