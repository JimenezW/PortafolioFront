import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { EstadosI } from 'src/app/models/estados';
import { EstadosService } from '../../services/estados/estados.service';
import {MatPaginator} from '@angular/material/paginator';
import  {MatSort} from '@angular/material/sort'

@Component({
  selector: 'app-catalogs',
  templateUrl: './catalogs.component.html',
  styleUrls: ['./catalogs.component.css']
})
export class CatalogsComponent implements OnInit {

  formCat: FormGroup;
  lstCatalogo: EstadosI[] = [];

  displayedColumns: string[] = ['Lista'];
  dataSource : MatTableDataSource<EstadosI>;

  private paginator!: MatPaginator;
  private sort!: MatSort;

  @ViewChild(MatSort) set matSort(ms: MatSort) {
    this.sort = ms;
    this.setDataSourceAttributes();
  }

  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.setDataSourceAttributes();
  }

  constructor(
    private _fb: FormBuilder,
    private _estadoServ: EstadosService,
    private _changeDet:ChangeDetectorRef) {
    
      this.dataSource = new MatTableDataSource(this.lstCatalogo)
      
      this.formCat = this._fb.group({
        catKey: ['', Validators.required],
        name: ['', Validators.required],
        abbreviate: ['']
      });
      
      //this._changeDet.detectChanges();
  }

  ngOnInit(): void {
    this.getListCatalogo()
  }

  getListCatalogo(): any {
    this._estadoServ.get().subscribe((res) => {
      
      if (res.length != undefined && res.length > 0) {
        this.lstCatalogo = res;
        this.dataSource = new MatTableDataSource(this.lstCatalogo);
        //this._changeDet.detectChanges()
      }
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  setDataSourceAttributes() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    if (this.paginator && this.sort) {
      this.applyFilter('');
    }
  }


}
