import { Component, OnInit  } from '@angular/core';
import { Equipo } from 'src/app/modules/interfaces-equipo/equipo';
import { EquipoService } from 'src/app/services/servicio-equipo/equipo.service'

@Component({
  selector: 'app-vista-equipo',
  templateUrl: './vista-equipo.component.html',
  styleUrls: ['./vista-equipo.component.css']
})
export class VistaEquipoComponent implements OnInit {

   equipos: Equipo[];

  constructor(private equipoService: EquipoService) { }


  ngOnInit() {
    this.getEquipos();
  }
   
  getEquipos(){
    this.equipoService.getEquipos()
    .subscribe(
      res => this.equipos = res
    )
   
  }
  

 

}