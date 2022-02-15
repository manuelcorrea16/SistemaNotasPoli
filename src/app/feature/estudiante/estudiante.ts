
import { Router } from '@angular/router';
import { postGresService } from 'src/app/service/obtenerLIstasPostgres'
import { sede } from 'Back/models/sedes';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.html',
  styleUrls: ['./estudiante.css'],
  providers: [postGresService]
})
export class estudianteComponente implements OnInit {

  correo = /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/
  form!: FormGroup;
  public sedes: sede[] = [];
  public programas: string[] = [];
  bodyEstudiante: any

  datosFormCred = new FormGroup({
    nombre: new FormControl('',Validators.required),
    email: new FormControl('',Validators.pattern(this.correo)),
    contacto: new FormControl('',Validators.required),
    sede: new FormControl('',Validators.required),
    programa: new FormControl('',Validators.required)
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