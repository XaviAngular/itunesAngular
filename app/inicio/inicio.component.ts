import { Component, OnInit } from '@angular/core';
import {ItunesService} from '../itunes.service';
import {GroupByPipe} from '../group-by.pipe';
declare var $:any;

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  providers: [ItunesService]
})
export class InicioComponent implements OnInit {
  
  public searchResults:any;
  public cargando:boolean;

  constructor(private itunesService:ItunesService) {
    this.searchResults=[];
    this.cargando=false;
   }

  ngOnInit() {
  	this.getSongs();


  }
  search(buscar){
    this.cargando=true;
    this.itunesService.getSongsB(buscar)
      .subscribe(
          result => {
            console.log(result);
            this.searchResults=result.results;
            this.cargando=false;

          },
          error =>{
            alert('Error al obtener listado platos');
          }
        )
       
  }
  
  getSongs(){
  	this.itunesService.getSongs()
      .subscribe(
          result => {
            console.log(result);
            this.searchResults=result.results;

          },
          error =>{
            alert('Error al obtener listado platos');
          }
        )
       $('.tooltipped').tooltip({delay: 50});
  }
  


  

}
