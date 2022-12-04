import { Component, Inject, Input } from "@angular/core";
import { GridColumnI } from "src/app/models/gridColum.interface";
import { GridRowI } from "src/app/models/gridRow.interface";

@Component({
    selector: 'app-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.css']
  })
  export class GridComponentComponent {

    @Input() dataSource : GridRowI[] = [];
    //@Input() configure : GridColumnI[] = [] ;

    //@Input() dataSource : string = '';
    //@Input() configure : string = '' ;



    constructor(){
        
    }

  }