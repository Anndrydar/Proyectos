import { Component, OnInit } from '@angular/core';
import { Partido } from 'src/app/modules/interfaces-partido/partido';
import { PartidoService } from 'src/app/services/servicio-partido/partido.service';

@Component({
  selector: 'app-vista-partido',
  templateUrl: './vista-partido.component.html',
  styleUrls: ['./vista-partido.component.css']
})
export class VistaPartidoComponent implements OnInit{
  partidos: Partido[];

  constructor(private partidoService: PartidoService){}

  ngOnInit() {
    this.getPartidos();
  }

getPartidos(): void{
  this.partidoService.getPartidos()
  .subscribe(
    res => this.partidos = res
  )
}


}
