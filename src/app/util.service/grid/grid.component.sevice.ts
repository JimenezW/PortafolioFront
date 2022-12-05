import {
    ComponentRef,
    Injectable,
    ViewContainerRef,
  } from '@angular/core';
import { Subject } from 'rxjs';
import { GridColumnI } from 'src/app/models/gridColum.interface';
import { GridRowI } from 'src/app/models/gridRow.interface';
import { GridComponentComponent } from './componet/grid.component';
  
  
  
  @Injectable({ providedIn: 'root' })
  export class GridComponentService {

    private componentRef!: ComponentRef<GridComponentComponent>;
    private componentSubscriber!: Subject<string>;

    constructor(){}
    
    initialize(entry: ViewContainerRef, configure : GridColumnI []){
        this.componentRef = entry.createComponent<GridComponentComponent>(GridComponentComponent);

        this.componentRef.instance.configure = configure;
    }
    
    loandData(dataSource : []){
      this.componentRef.instance.loand(dataSource);
    }
  }



