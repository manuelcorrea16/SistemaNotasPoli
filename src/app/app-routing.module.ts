
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { estudianteComponente } from './feature/estudiante/components/estudiante';
import { HomeComponent } from './feature/home/home.component';
import { NotasComponent } from './feature/notas/notas.component';
import { RegistroComponent } from './feature/registro/registro.component';
import { ReporteComponent } from './feature/reporte/reporte.component';

const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: '/home' },

  { path: 'home', component: HomeComponent },
  { path: 'estudiantes', component: estudianteComponente },
  { path: 'notas', component: NotasComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'reporte', component: ReporteComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }