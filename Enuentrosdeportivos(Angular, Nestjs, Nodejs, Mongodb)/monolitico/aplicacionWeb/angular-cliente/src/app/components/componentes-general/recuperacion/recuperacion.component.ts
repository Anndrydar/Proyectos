import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Equipo } from 'src/app/modules/interfaces-equipo/equipo';
import { Partido } from 'src/app/modules/interfaces-partido/partido';
import { Torneo } from 'src/app/modules/interfaces-torneo/torneo';
import { EquipoService } from 'src/app/services/servicio-equipo/equipo.service';
import { PartidoService } from 'src/app/services/servicio-partido/partido.service';
import { RespaldoService } from 'src/app/services/servicio-respaldo/respaldo.service';
import { TorneoService } from 'src/app/services/servicio-torneo/torneo.service';

@Component({
  selector: 'app-recuperacion',
  templateUrl: './recuperacion.component.html',
  styleUrls: ['./recuperacion.component.css']
})
export class RecuperacionComponent implements OnInit {
  
  equipos: Equipo[] = [];
  torneos: Torneo[] = [];
  partidos: Partido[] = [];

  equipo: Equipo = {
    nombre: '',
    descripcion: '',
    serie: ''
  };

  torneo: Torneo = {
    descripcion: ''
  };

  partido: Partido = {
    idTorneo: '',
    idEquipo1: '',
    idEquipo2: '',
    golesEquipo1:0,
    golesEquipo2:0,
    observacion: ''
  }



  constructor(private equipoService: EquipoService,
    private torneoService: TorneoService,
    private partidoService: PartidoService,
    private respaldoService: RespaldoService,
    private router: Router
    ){}

ngOnInit(): void {
  this.getEquipos();
  this.getTorneos();
  this.getPartidos();
}

getEquipos(){
  this.respaldoService.getEquipo().subscribe(
    res=> this.equipos = res,
  )
}

submitRecupera(id:string,nom: string, des: string, ser: string): void{
  const resp = this.equipo = {
    nombre: nom,
    descripcion: des,
    serie: ser
  };
  this.equipoService.crearEquipo(resp).subscribe(
    res => {
      console.log(res);
      alert('Respaldo recuperado exitosamente');
      this.router.navigate(['/recupera']);
    },
  )

  this.respaldoService.eliminarEquipo(id).subscribe(
    res=>{
      console.log(res);
      this.getEquipos();
    }
  )

}

submitRecupera2(id:string,tor: string){
  const resp = this.torneo = {
    descripcion: tor
  };
  this.torneoService.crearTorneo(resp).subscribe(
    res => {
      console.log(res);
      alert('Respaldo recuperado exitosamente');
      this.router.navigate(['/recupera']);
    },
  )

  this.respaldoService.eliminarTorneo(id).subscribe(
    res=>{
      console.log(res);
      this.getTorneos();
    }
  )

}

getTorneos(): void{
  this.respaldoService.getTorneo().subscribe(
    res=> this.torneos = res,
  )
}

getPartidos(): void{
  this.respaldoService.getPartido().subscribe(
    res=> this.partidos = res,
  )
}


submitRecupera3(id:string,tor: string, equi1: string, equi2: string,
  gol1: number, gol2: number, obs: string){
    let resp = this.partido = {
      idTorneo: tor,
      idEquipo1: equi1,
      idEquipo2: equi2,
      golesEquipo1:Number(gol1),
      golesEquipo2:Number(gol2),
      observacion: obs
    };

    this.partidoService.crearPartido(resp).subscribe(
      res => {
        console.log(res);
        alert('Respaldo recuperado exitosamente');
        this.router.navigate(['/recupera']);
      },
    )


    this.respaldoService.eliminarPartido(id).subscribe(
      res=>{
        console.log(res);
        this.getPartidos();
      }
    )
}



eliminaPermanente3(id): void{

this.respaldoService.eliminarPartido(id).subscribe(
  res=>{
    console.log(res);
    this.getPartidos();
    alert('El registro se elimino permanentemente');
    this.router.navigate(['/recupera']);
  }
)


}

eliminaPermanente2(id): void{
this.respaldoService.eliminarTorneo(id).subscribe(
  res=>{
    console.log(res);
    this.getTorneos();
    alert('El registro se elimino permanentemente');
    this.router.navigate(['/recupera']);
  }
)


}



eliminaPermanente1(id): void{
this.respaldoService.eliminarEquipo(id).subscribe(
  res=>{
    console.log(res);
    this.getEquipos();
    alert('El registro se elimino permanentemente');
    this.router.navigate(['/recupera']);
  }
)
}
}

