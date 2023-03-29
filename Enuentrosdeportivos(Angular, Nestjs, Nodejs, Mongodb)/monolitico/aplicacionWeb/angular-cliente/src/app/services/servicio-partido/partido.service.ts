import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Partido } from 'src/app/modules/interfaces-partido/partido';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PartidoService {
  URL1: String = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

getPartidos(): Observable< Partido[]>{
  return this.http.get<Partido[]>(`${this.URL1}/partidos`);
}

getPartido(id: string): Observable<Partido>{
 return this.http.get<Partido>(`${this.URL1}/partidos/${id}`);
}


crearPartido(partido: Partido): Observable<Partido>{
  return this.http.post<Partido>(`${this.URL1}/partidos`, partido);
 
}

editPartido(id: string, partido: Partido): Observable<Partido>{
  return this.http.put<Partido>(`${this.URL1}/partidos/${id}`, partido);
}

eliminarPartidos(id: string): Observable< Partido[]>{
return this.http.delete<Partido[]>(`${this.URL1}/partidos/${id}`)
}

}
