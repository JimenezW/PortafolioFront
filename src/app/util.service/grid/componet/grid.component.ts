import { AfterViewInit, ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { GridColumnI } from "src/app/models/gridColum.interface";

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponentComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @Input() configure: GridColumnI[] = [];


  dataSource = new MatTableDataSource([]);
  columnsToDisplay: string[] = [];

  constructor(private cdr: ChangeDetectorRef) {
  }


  ngOnInit(): void {
    this.columnsToDisplay = this.configure.map(item => { return item.field });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  loand(dataSource : []){
    this.dataSource.data = dataSource;
    this.cdr.detectChanges();
  }



}