import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Asignatura } from '../models/asignaturas';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {

  correo = /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/
  form!: FormGroup;
  bodyNotas: any
  public asignaturas: Asignatura[] = [];

  datosFormCred = new FormGroup({
    email: new FormControl('',Validators.pattern(this.correo)),
    asignatura: new FormControl('',Validators.required),
    semestre: new FormControl('',Validators.required),
    parcial: new FormControl('',[Validators.min(0),Validators.max(50)]),
    talleres: new FormControl('',[Validators.min(0),Validators.max(50)]),
    exposicion: new FormControl('',[Validators.min(0),Validators.max(50)]),
    participacion: new FormControl('',[Validators.min(0),Validators.max(50)]),
  })

   constructor(
     private router: Router,
     private http: HttpClient) {
  }
  onSubmit(){
      this.bodyNotas = {
        "email": this.datosFormCred.value.email,
        "asignatura": this.datosFormCred.value.asignatura,
        "semestre": this.datosFormCred.value.semestre,
        "parcial": this.datosFormCred.value.parcial,
        "talleres": this.datosFormCred.value.talleres,
        "exposicion": this.datosFormCred.value.exposicion,
        "participacion": this.datosFormCred.value.participacion,
      }
      console.log(this.bodyNotas)
      this.http.post<any>('http://localhost:3000/api/nota',this.bodyNotas).subscribe(data => {
      })
    
  }
  ngOnInit(): void {
    this.http.get<any>('http://localhost:8080/api/asignaturas/',{}).pipe(
      map((res: any) => {
        return res.map((asignaturas:Asignatura) => {
          return {
            "codigo": asignaturas.codigo,
            "nombre": asignaturas.nombre
          } as Asignatura;
        })
      })).subscribe(data => {
        console.log(data)
        this.asignaturas = data
      })
  }
  volver() {
    this.router.navigate(['/']);
  }
}
