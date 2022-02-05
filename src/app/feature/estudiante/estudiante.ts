import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.html',
  styleUrls: ['./estudiante.css']
})
export class estudianteComponente implements OnInit {

  estaEnSesion: boolean = false;

  @Output() openMenu = new EventEmitter();

  constructor(private router: Router) {
  }


  ngOnInit(): void {

  }
  clickregistro() {
    alert('hola')
  }

  volver() {
    this.router.navigate(['/']);
  }

}