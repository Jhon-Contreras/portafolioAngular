import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;
  // dclaramos private http e importamos HttpClient para realizar peticiones al archivo JSON
  constructor( private http: HttpClient) {
    // console.log('Servicio de infoPagina listo');

    // LEER ARCHIVO JSON
    this.http.get('assets/data/data-pagina.json')
      .subscribe( (resp:InfoPagina) =>{
        this.cargada = true;
        this.info = resp;
        console.log(resp);
      
    });

   }
}
