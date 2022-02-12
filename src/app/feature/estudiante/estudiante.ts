import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {postGresService} from 'src/app/service/obtenerLIstasPostgres'
import { sede } from 'Back/models/sedes';
@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.html',
  styleUrls: ['./estudiante.css'],
  providers :[postGresService]
})
export class estudianteComponente implements OnInit {

  estaEnSesion: boolean = false;
  public sedes : sede[]  = [];
  public programas : string[] = [];
  @Output() openMenu = new EventEmitter();

  constructor(private router: Router,    private _postGresService:postGresService
    ) {
  }
  ngOnInit(): void {  
    this.sedes = this._postGresService.obtenerSedes(); 
  }

  clickregistro() {
    alert('hola')
  }
  volver() {
    this.router.navigate(['/']);
  }
}