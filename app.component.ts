
import { Component, Vi
  ewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-proveedores',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',////
})

export class AppComponent {
  displayedColumns: string[] = ['position', 'name', 'email'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}

export interface Proveedor {
  id: number;
  name: string;
  position: number;
  "saldo": number,
  "estado": string,
  "type": "proveedor",
}

const ELEMENT_DATA: Proveedor[] = [
  { position: 1, name: 'John', id: 1, "saldo": 40 , estado: null, "type": "proveedor" },
  { position: 2, name: 'John', id: 1, "saldo": 40 , estado: null, "type": "proveedor" },
  { position: 3, name: 'John', id: 1, "saldo": 40 , estado: null, "type": "proveedor" },
  { position: 4, name: 'John', id: 1, "saldo": 40 , estado: null, "type": "proveedor" },
  { position: 5, name: 'John', id: 1, "saldo": 40 , estado: null, "type": "proveedor" },
  
  
];