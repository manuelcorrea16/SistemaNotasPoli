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
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

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
    AppRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
