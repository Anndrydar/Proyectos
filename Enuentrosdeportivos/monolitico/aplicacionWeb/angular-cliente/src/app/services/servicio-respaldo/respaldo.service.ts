import { HttpClient } from '@angular/common/http';
import { Equipo } from 'src/app/modules/interfaces-equipo/equipo';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Torneo } from 'src/app/modules/interfaces-torneo/torneo';
import { Partido } from 'src/app/modules/interfaces-partido/partido';

@Injectable({
  providedIn: 'root'
})
export class RespaldoService {

 URL2: String = 'http://localhost:9000';

  constructor(private http: HttpClient) { }

  //Bloque equipos
  getEquipo(): Observable<Equipo[]>{
   return this.http.get<Equipo[]>(`${this.URL2}/micro/equipos`);
  }
  
  crearEquipo(equipo: Equipo): Observable<Equipo>{
    return this.http.post<Equipo>(`${this.URL2}/micro/equipos`, equipo);
   }


   eliminarEquipo(id: string): Observable< Equipo[]>{
    return this.http.delete<Equipo[]>(`${this.URL2}/micro/equipos/${id}`)
    }


//Bloque torneos
getTorneo(): Observable<Torneo[]>{
  return this.http.get<Torneo[]>(`${this.URL2}/micro/torneos`);
 }

 crearTorneo(torneo: Torneo): Observable<Torneo>{
  return this.http.post<Torneo>(`${this.URL2}/micro/torneos`, torneo);
 }


 eliminarTorneo(id: string): Observable< Torneo[]>{
  return this.http.delete<Torneo[]>(`${this.URL2}/micro/torneos/${id}`)
  }


//Bloque partidos
getPartido(): Observable<Partido[]>{
  return this.http.get<Partido[]>(`${this.URL2}/micro/partidos`);
 }

 crearPartido(partido: Partido): Observable<Torneo>{
  return this.http.post<Torneo>(`${this.URL2}/micro/partidos`, partido);
 }

 eliminarPartido(id: string): Observable< Partido[]>{
  return this.http.delete<Partido[]>(`${this.URL2}/micro/partidos/${id}`)
  }


}
