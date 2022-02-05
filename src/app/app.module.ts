import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { estudianteComponente } from './feature/estudiante/estudiante';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    estudianteComponente
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
