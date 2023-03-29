import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Torneo } from 'src/app/modules/interfaces-torneo/torneo';
import { RespaldoService } from 'src/app/services/servicio-respaldo/respaldo.service';
import { TorneoService } from 'src/app/services/servicio-torneo/torneo.service';

@Component({
  selector: 'app-form-torneo',
  templateUrl: './form-torneo.component.html',
  styleUrls: ['./form-torneo.component.css']
})
export class FormTorneoComponent implements OnInit {

torneos: Torneo[];

  torneo: Torneo = {
    descripcion: ''
  }


  

  constructor(private torneoService: TorneoService,
    private respaldoService: RespaldoService,
    private router: Router){}


  ngOnInit(): void {
    this.getTorneos();
  }

getTorneos(): void{
   this.torneoService.getTorneos().subscribe(
      res => this.torneos = res

   )
}


grabarTorneo(){
  this.torneoService.crearTorneo(this.torneo).subscribe(
    res => {
      console.log(res);
      this.router.navigate(['/vista-torneo']);
    }
  )
}





eliminarTorneo(id: string, torn: string): void{

let respaldo = this.torneo = {
  descripcion: torn
};

  this.torneoService.eliminarTorneo(id).subscribe(
    res => {
      console.log(res);
     this.getTorneos();
    }
  )

  this.respaldoService.crearTorneo(respaldo).subscribe(
    res => {
      console.log(res);
      alert('El respaldo se guardo automaticamente en la papelera de reciclaje');
      this.torneo.descripcion = '';
    }
  )


}



}
