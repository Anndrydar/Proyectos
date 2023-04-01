import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditFormComponent } from './components/componentes-equipos/edit-form/edit-form.component';
import { FormEquipoComponent } from './components/componentes-equipos/form-equipo/form-equipo.component';
import { VistaEquipoComponent } from './components/componentes-equipos/vista-equipo/vista-equipo.component';
import { HomeComponent } from './components/componentes-general/home/home.component';
import { RecuperacionComponent } from './components/componentes-general/recuperacion/recuperacion.component';
import { EditPartidoComponent } from './components/componentes-partidos/edit-partido/edit-partido.component';
import { FormPartidoComponent } from './components/componentes-partidos/form-partido/form-partido.component';
import { VistaPartidoComponent } from './components/componentes-partidos/vista-partido/vista-partido.component';
import { EditTorneoComponent } from './components/componentes-torneos/edit-torneo/edit-torneo.component';
import { FormTorneoComponent } from './components/componentes-torneos/form-torneo/form-torneo.component';
import { VistaTorneoComponent } from './components/componentes-torneos/vista-torneo/vista-torneo.component';

const routes: Routes = [
 


{ path: '',
component: HomeComponent
},
{ path: 'vista-equipo',
component: VistaEquipoComponent
},
{ path: 'crear-equipo',
component: FormEquipoComponent
},
{ path: 'equipo/edit/:id',
component: EditFormComponent
},
{ path: 'crear-torneo',
component: FormTorneoComponent
},
{ path: 'vista-torneo',
component: VistaTorneoComponent
},
{ path: 'torneo/edit/:id',
component: EditTorneoComponent
},
{ path: 'crear-partido',
component: FormPartidoComponent
},
{ path: 'partido/edit/:id',
component: EditPartidoComponent
},
{ path: 'vista-partido',
component: VistaPartidoComponent
},
{ path: 'recupera',
component: RecuperacionComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
