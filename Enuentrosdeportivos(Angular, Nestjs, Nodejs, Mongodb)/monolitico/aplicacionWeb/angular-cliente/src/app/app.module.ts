import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {RouterModule} from '@angular/router';
import { HomeComponent } from './components/componentes-general/home/home.component';
import { NavegacionComponent } from './components/componentes-general/navegacion/navegacion.component';
import { VistaEquipoComponent } from './components/componentes-equipos/vista-equipo/vista-equipo.component';
import { FormEquipoComponent } from './components/componentes-equipos/form-equipo/form-equipo.component';
import { EditFormComponent } from './components/componentes-equipos/edit-form/edit-form.component';
import { FormTorneoComponent } from './components/componentes-torneos/form-torneo/form-torneo.component';
import { VistaTorneoComponent } from './components/componentes-torneos/vista-torneo/vista-torneo.component';
import { EditTorneoComponent } from './components/componentes-torneos/edit-torneo/edit-torneo.component';
import { FormPartidoComponent } from './components/componentes-partidos/form-partido/form-partido.component';
import { VistaPartidoComponent } from './components/componentes-partidos/vista-partido/vista-partido.component';
import { EditPartidoComponent } from './components/componentes-partidos/edit-partido/edit-partido.component';
import { RecuperacionComponent } from './components/componentes-general/recuperacion/recuperacion.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavegacionComponent,
    VistaEquipoComponent,
    FormEquipoComponent,
    EditFormComponent,
    FormTorneoComponent,
    VistaTorneoComponent,
    EditTorneoComponent,
    FormPartidoComponent,
    VistaPartidoComponent,
    EditPartidoComponent,
    RecuperacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
