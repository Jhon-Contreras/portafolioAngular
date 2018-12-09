import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;
  equipo: any[];
  // dclaramos private http e importamos HttpClient para realizar peticiones al archivo JSON
  constructor( private http: HttpClient) {


    this.cargarInfo();
    this.cargarEquipo();

   }

   private cargarInfo(){
      // LEER ARCHIVO JSON
      this.http.get('assets/data/data-pagina.json')
      .subscribe( (resp:InfoPagina) =>{
        this.cargada = true;
        this.info = resp;
        
      
      });
   }

   private cargarEquipo(){
      // LEER FIREBASE
      this.http.get('https://angular-html-ab23f.firebaseio.com/equipo.json')
      .subscribe( (resp:any[]) =>{
        this.equipo = resp;
       
        console.log(resp);
      
      });
   }
}
