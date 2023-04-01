import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Torneo } from 'src/app/modules/interfaces-torneo/torneo';
import { TorneoService } from 'src/app/services/servicio-torneo/torneo.service';

@Component({
  selector: 'app-edit-torneo',
  templateUrl: './edit-torneo.component.html',
  styleUrls: ['./edit-torneo.component.css']
})
export class EditTorneoComponent implements OnInit{

 torneo: Torneo = {
  descripcion: ''
 }


  constructor(private torneoService: TorneoService,
    private active: ActivatedRoute,
    private router: Router){}


ngOnInit(): void {
  const params = this.active.snapshot.params;
  if(params){
    this.torneoService.getTorneo(params.id).
    subscribe(
     res =>{
       console.log(res),
       this.torneo = res;
    }
    )
  }
}


editTorneo(){
  delete this.torneo.__v;
  let id = this.torneo._id;
  delete this.torneo._id;
this.torneoService.editTorneo(id, this.torneo).subscribe(
  res=> {
  console.log(res);
  this.router.navigate(['/vista-torneo'])
  }
)



}





}
