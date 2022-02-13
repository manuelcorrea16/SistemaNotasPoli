import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {Sedes} from './models/sedes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
 
  public title = 'Notras Académicas';
  public sedes : Sedes;

  constructor(private router: Router) { 
    this.sedes= new Sedes(0,'',0,);
  }
  redirigir(ruta: string) {
    this.router.navigate([ruta]);
  }
}
