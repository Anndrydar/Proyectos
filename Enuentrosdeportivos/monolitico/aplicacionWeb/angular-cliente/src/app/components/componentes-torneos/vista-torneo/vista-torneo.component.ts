import { Component, OnInit } from '@angular/core';
import { Torneo } from 'src/app/modules/interfaces-torneo/torneo';
import { TorneoService } from 'src/app/services/servicio-torneo/torneo.service';

@Component({
  selector: 'app-vista-torneo',
  templateUrl: './vista-torneo.component.html',
  styleUrls: ['./vista-torneo.component.css']
})
export class VistaTorneoComponent implements OnInit{

 torneos: Torneo[];

  constructor(private torneoService: TorneoService){}


  ngOnInit(): void {
    this.getTorneos();
  }


  getTorneos(){
    this.torneoService.getTorneos().subscribe(
      res => this.torneos = res
    )
  }


}
