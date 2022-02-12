import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { estudianteComponente } from './feature/estudiante/estudiante';
import { NotasComponent } from './feature/notas/notas.component';
import { RegistroComponent } from './feature/registro/registro.component';
import { AppRoutingModule } from './app-routing.module';
import { ToolbarComponent } from './core/toolbar/toolbar.component';

import { HomeComponent } from './feature/home/home.component';
import { ReporteComponent } from './feature/reporte/reporte.component';


@NgModule({
  declarations: [
    AppComponent,
    estudianteComponente,
    NotasComponent,
    RegistroComponent,
    ToolbarComponent,
  
    HomeComponent,
    ReporteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
