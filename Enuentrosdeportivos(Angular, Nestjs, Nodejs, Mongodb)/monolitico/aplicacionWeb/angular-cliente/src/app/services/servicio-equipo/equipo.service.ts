import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Equipo } from 'src/app/modules/interfaces-equipo/equipo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

URL1: String = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

 getEquipos(): Observable<Equipo[]>{
  return this.http.get<Equipo[]>(`${this.URL1}/equipos`);
 }


 getEquipo(id: string): Observable<Equipo>{
  return this.http.get<Equipo>(`${this.URL1}/equipos/${id}`);
 }


 crearEquipo(equipo: Equipo): Observable<Equipo>{
  return this.http.post<Equipo>(`${this.URL1}/equipos`, equipo);
 }


 editEquipo(id: string, equipo: Equipo): Observable<Equipo> {
  return this.http.put<Equipo>(`${this.URL1}/equipos/${id}`, equipo);
}



 eliminarEquipo(id: string): Observable<Equipo> {
  return this.http.delete<Equipo>(`${this.URL1}/equipos/${id}`);
}



}
