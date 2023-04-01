import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Equipo } from 'src/app/modules/interfaces-equipo/equipo';
import { EquipoService } from 'src/app/services/servicio-equipo/equipo.service';
import { RespaldoService } from 'src/app/services/servicio-respaldo/respaldo.service';

@Component({
  selector: 'app-form-equipo',
  templateUrl: './form-equipo.component.html',
  styleUrls: ['./form-equipo.component.css']
})
export class FormEquipoComponent implements OnInit{
 
  equipos:Equipo[] = [];

  equipo: Equipo = {
    nombre: '',
    descripcion: '',
    serie: ''
  };

  constructor(private equipoService: EquipoService,
    private respaldoService: RespaldoService,
    private router: Router
    ){}

ngOnInit(): void{
  this.getEquipos()
  
}

submitEquipo(){
  this.equipoService.crearEquipo(this.equipo)
  .subscribe(
    res => {
      console.log(res);
      this.router.navigate(['/vista-equipo']);
    },
    
  )
}





getEquipos(): void{
  this.equipoService.getEquipos()
  .subscribe(
    res => this.equipos = res,
  )
}







eliminarEquipo(id: string,nom:string,des: string,  ser: string): void {

  const respaldo = this.equipo = {
    nombre: nom,
    descripcion: des,
    serie: ser
  };
  this.equipoService.eliminarEquipo(id)
    .subscribe(
      res => {
        console.log(res);
        this.getEquipos();
      }
    )
  
    this.respaldoService.crearEquipo(respaldo).subscribe(
      res => {
        console.log(res);
        alert('El respaldo se guardo automaticamente en la papelera de reciclaje');
        this.equipo.nombre = "";
        this.equipo.descripcion = '';
        this.equipo.serie = ''
      },
    )
}

}
