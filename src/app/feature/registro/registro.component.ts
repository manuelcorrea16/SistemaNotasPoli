import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { SedesService } from '../service/PostGresService';
import { Asignatura } from '../models/asignaturas';
import { Profesor } from '../models/profesores';
import { Grupo } from '../models/grupos';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  providers: [SedesService]
})
export class RegistroComponent implements OnInit {

  form!: FormGroup;
  bodyRegistro: any

  public asignaturas: Asignatura[] = [];
  public grupos: Grupo[] = [];
  public profesores: Profesor[] = [];

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

      //Por ahora esta a lo bruto
      //es necesario buscar según asignatura seleccionada y semestre (capturar la asignatura y crear servicio que incluya esta busqueda)
      this.http.get<any>('http://localhost:8080/api/grupos/',{}).pipe(
        map((res: any) => {
          return res.map((grupos:Grupo) => {
            return {
              "numero": grupos.numero,
              "semestre": grupos.semestre,
              "id_profesor": grupos.id_profesor,
            } as Grupo;
          })
        })).subscribe(data => {
          console.log(data)
          this.grupos = data
        })

        //Por ahora esta a lo bruto
        //se debe hacer un inner join con la materia que solo traiga los profesores de esa materia
        this.http.get<any>('http://localhost:8080/api/profesores/',{}).pipe(
          map((res: any) => {
            return res.map((profesores:Profesor) => {
              return {
                "identificacion": profesores.identificacion,
                "nombres": profesores.nombres,
                "apellidos": profesores.apellidos
              } as Profesor;
            })
          })).subscribe(data => {
            console.log(data)
            this.profesores = data
          })
  }
  volver() {
    this.router.navigate(['/']);
  }
}
