import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Torneo } from 'src/app/modules/interfaces-torneo/torneo';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TorneoService {
  URL1: String = 'http://localhost:3000';



  constructor(private http: HttpClient) {
  }

  getTorneos(): Observable<Torneo[]>{
    return this.http.get<Torneo[]>(`${this.URL1}/torneos`);
   }
  
  
   getTorneo(id: string): Observable<Torneo>{
    return this.http.get<Torneo>(`${this.URL1}/torneos/${id}`);
   }
  
  
   crearTorneo(equipo: Torneo): Observable<Torneo>{
    return this.http.post<Torneo>(`${this.URL1}/torneos`, equipo);
   }
  
  
   editTorneo(id: string, equipo: Torneo): Observable<Torneo> {
    return this.http.put<Torneo>(`${this.URL1}/torneos/${id}`, equipo);
  }
  
  
  
   eliminarTorneo(id: string): Observable<Torneo> {
    return this.http.delete<Torneo>(`${this.URL1}/torneos/${id}`);
  }

}
