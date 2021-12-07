import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource, _MatTableDataSource } from '@angular/material/table';

@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent {
title = 'proyecto04';
columnas: string[] = ['codigo','descripcion','precio'];

datos: Articulo[] = [new Articulo(1,'zapatos',35000),
                    new Articulo(2,"polera",5000),
                    new Articulo(3,"pantalos",20000)
];

dataSource:any;

ngOnInit(){
this.dataSource = new MatTableDataSource(this.datos)
}

filtrar(event: Event){
const filtro = (event.target as HTMLInputElement).value;
this.dataSource.filter = filtro.trim()

}

}

export class Articulo{
constructor (public codigo: number, public descripcion: string,
public precio: number){

}

}