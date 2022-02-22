import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { SedesService } from '../service/PostGresService';
import { Sedes as Asignatura } from '../models/Sedes';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  providers: [SedesService]
})
export class RegistroComponent implements OnInit {

  form!: FormGroup;
  bodyRegistro: any
  public sedes: Asignatura[] = [];
  public programas: Asignatura[] = [];

  datosFormCred = new FormGroup({
    asignatura: new FormControl('',Validators.required),
    semestre: new FormControl('',Validators.required),
    grupo: new FormControl('',Validators.required),
    profesor: new FormControl('',Validators.required),
    parcial: new FormControl('',[Validators.min(0),Validators.max(50)]),
    talleres: new FormControl('',[Validators.min(0),Validators.max(50)]),
    exposicion: new FormControl('',[Validators.min(0),Validators.max(50)]),
    participacion: new FormControl('',[Validators.min(0),Validators.max(50)]),
  })
  onSubmit(){
    this.bodyRegistro = {
      "asignatura": this.datosFormCred.value.asignatura,
      "semestre": this.datosFormCred.value.semestre,
      "grupo": this.datosFormCred.value.grupo,
      "profesor": this.datosFormCred.value.profesor,
      "parcial": this.datosFormCred.value.parcial,
      "talleres": this.datosFormCred.value.talleres,
      "exposicion": this.datosFormCred.value.exposicion,
      "participacion": this.datosFormCred.value.participacion,
    }
    console.log(this.bodyRegistro)
    this.http.post<any>('http://localhost:3000/api/evaluar',this.bodyRegistro).subscribe(data => {
    })
  }

  constructor(
    private router: Router,
    private http: HttpClient
    ) {
    }

  ngOnInit(): void {
    this.http.get<any>('http://localhost:8080/api/asignaturas/',{}).pipe(
      map((res: any) => {
        return res.map((sede:Asignatura) => {
          return {
            "codigo": sede.codigo,
            "nombre": sede.nombre,
            "cod_ciudad": sede.cod_ciudad,
          } as Asignatura;
        })
      })).subscribe(data => {
        console.log(data)
        this.sedes = data
      })
  }
  volver() {
    this.router.navigate(['/']);
  }
}
