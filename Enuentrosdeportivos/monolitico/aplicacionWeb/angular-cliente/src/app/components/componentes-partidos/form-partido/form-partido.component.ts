import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Partido } from 'src/app/modules/interfaces-partido/partido';
import { PartidoService } from 'src/app/services/servicio-partido/partido.service';
import { RespaldoService } from 'src/app/services/servicio-respaldo/respaldo.service';

@Component({
  selector: 'app-form-partido',
  templateUrl: './form-partido.component.html',
  styleUrls: ['./form-partido.component.css']
})
export class FormPartidoComponent implements OnInit{

partidos: Partido[] = [];

partido: Partido ={
  idTorneo: '',
  idEquipo1: '',
  idEquipo2: '',
  golesEquipo1:0,
  golesEquipo2:0,
  observacion: ''
};

constructor(private partidoService: PartidoService,
  private respaldoService: RespaldoService,
  private router: Router
  ){}


ngOnInit(): void {
  this.getPartidos();
}

submitPartido(){
   // Convertir golesEquipo1 y golesEquipo2 a números antes de asignarlos a las variables
   this.partido.golesEquipo1 = Number(this.partido.golesEquipo1);
   this.partido.golesEquipo2 = Number(this.partido.golesEquipo2);

this.partidoService.crearPartido(this.partido).subscribe(
  res => {
    console.log(res);
    this.router.navigate(['/vista-partido']);
  },
)
}



getPartidos(): void{
  this.partidoService.getPartidos().subscribe(
      res=> this.partidos = res,
  )
}

eliminarPartido(id: string, tor: string, equi1: string, equi2: string,
  gol1: number, gol2: number, obs: string): void{
     
    let respaldo = this.partido = {
      idTorneo: tor,
      idEquipo1: equi1,
      idEquipo2: equi2,
      golesEquipo1:Number(gol1),
      golesEquipo2:Number(gol2),
      observacion: obs
    };


    
this.partidoService.eliminarPartidos(id).subscribe(
  res=>{
    console.log(res);
    this.getPartidos();
  }
)
this.respaldoService.crearPartido(respaldo).subscribe(
  res => {
    console.log(res);
    alert('El respaldo se guardo automaticamente en la papelera de reciclaje');
    this.partido.idTorneo = '';
    this.partido.idEquipo1 = '';
    this.partido.idEquipo2= '';
    this.partido.golesEquipo1 = 0;
    this.partido.golesEquipo2 = 0;
    this.partido.observacion = '';
  },

)
}

}
  
 




