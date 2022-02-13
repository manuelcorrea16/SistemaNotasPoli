//import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { postGresService } from 'src/app/service/obtenerLIstasPostgres'
import { sede } from 'Back/models/sedes';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.html',
  styleUrls: ['./estudiante.css'],
  providers: [postGresService]
})
export class estudianteComponente implements OnInit {

  form!: FormGroup;
  estaEnSesion: boolean = false;
  public sedes: sede[] = [];
  public programas: string[] = [];
  //@Output() openMenu = new EventEmitter();
  bodyEstudiante: any

  datosFormCred = new FormGroup({
    nombre: new FormControl(''),
    email: new FormControl(''),
    contacto: new FormControl(''),
    sede: new FormControl(''),
    programa: new FormControl('')
  })

  onSubmit() {
    this.bodyEstudiante = {
      "nombre": this.datosFormCred.value.nombre,
      "email": this.datosFormCred.value.email,
      "contacto": this.datosFormCred.value.contacto,
      "sede": this.datosFormCred.value.sede,
      "programa": this.datosFormCred.value.programa
    }
    console.log(this.bodyEstudiante)
  }

  constructor(private router: Router, private _postGresService: postGresService
  ) {
  }
  ngOnInit(): void {
    this.sedes = this._postGresService.obtenerSedes();
  }


  volver() {
    this.router.navigate(['/']);
  }
}