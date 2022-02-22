import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SedesService } from '../../service/PostGresService';
import { Sedes } from '../../models/Sedes';
import { Asignatura } from '../../models/Asignatura';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.html',
  styleUrls: ['./estudiante.css'],
  providers: [SedesService]
})
export class estudianteComponente implements OnInit {

  correo = /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/
  form!: FormGroup;
  public sedes: Sedes[] = [];
  public programas: Asignatura[] = [];
  bodyEstudiante: any;
  public sedesAny: any = [];

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
      "sede": 
     this.datosFormCred.value.sede,
     "programa": this.datosFormCred.value.programa
    }
    console.log(this.bodyEstudiante)
    this.http.post<any>('http://localhost:3000/api/registro',this.bodyEstudiante).subscribe(data => {
    })
  }

  constructor
  (
    private router: Router, 
    private sedesServices : SedesService, 
    private http: HttpClient
    )  { }

  ngOnInit(): void {
    this.sedes = [ { codigo: 1, nombre: 'Medallo', cod_ciudad: 1 }];

    this.sedesServices.obtenerSedes()

    this.programas = [ { codigo: 1, nombre: 'Técnica en Programación de Sistemas', area: 1 }];

    this.sedesServices.obtenerProgramas()
  }
  
  volver() {
    this.router.navigate(['/']);
  }

}