import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Partido } from 'src/app/modules/interfaces-partido/partido';
import { PartidoService } from 'src/app/services/servicio-partido/partido.service';

@Component({
  selector: 'app-edit-partido',
  templateUrl: './edit-partido.component.html',
  styleUrls: ['./edit-partido.component.css']
})
export class EditPartidoComponent  implements OnInit{
  
  
  partido: Partido={
    idTorneo: '',
    idEquipo1: '',
    idEquipo2: '',
    golesEquipo1:0,
    golesEquipo2:0,
    observacion: ''
  };



constructor(private partidoService: PartidoService,
 private active: ActivatedRoute,
 private router: Router
  ){}

ngOnInit(): void {
  const params = this.active.snapshot.params;
  if(params){
  this.partidoService.getPartido(params.id).subscribe(
    res =>{
      console.log(res),
      this.partido = res;
    }
  )

  }

}

editPartido(){
delete this.partido.__v;
let id = this.partido._id;
delete this.partido._id;

  // Convertir golesEquipo1 y golesEquipo2 a números antes de asignarlos a las variables
  this.partido.golesEquipo1 = Number(this.partido.golesEquipo1);
  this.partido.golesEquipo2 = Number(this.partido.golesEquipo2);

this.partidoService.editPartido(id, this.partido).subscribe(
  res=>{
    console.log(res),
    this.router.navigate(['/vista-partido'])
  }
)


}




}
