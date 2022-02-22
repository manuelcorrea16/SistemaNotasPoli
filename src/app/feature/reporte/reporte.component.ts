import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { map } from 'rxjs/operators';
import { Sede } from '../models/Sedes';
import { Sedes as Asignatura } from '../models/Sedes';

export interface Reporte {
  nombre: String;
  email: String;
  contacto: String;
  programa: String;
  sede: Sede;
}

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {
  form!: FormGroup;
  bodyReporte: any
  displayedColumns = ['nombre', 'email', 'contacto', 'programa', 'sede']
  dataSource = new MatTableDataSource<Reporte>();
  public sedes: Asignatura[] = [];

  datosFormCred = new FormGroup({
    asignatura: new FormControl(''),
    email: new FormControl('', Validators.email)

  })
  onSubmit() {
    this.bodyReporte = {
      "asignatura": this.datosFormCred.value.asignatura,
      "email": this.datosFormCred.value.email
    }
    console.log(this.bodyReporte)
    this.http.get<any>('http://localhost:3000/api/registro', this.bodyReporte).pipe(
      map((res: any) => {
        return res.map((reporte:Reporte) => {
          return {
            "nombre": reporte.nombre,
            "email": reporte.email,
            "contacto": reporte.contacto,
            "programa": reporte.programa,
            "sede": reporte.sede?reporte.sede:'prueba'
          } as Reporte;
        })
      })).subscribe(data => {
        console.log(data)
        this.dataSource = data
      })
  }

  constructor(private router: Router,
    private http: HttpClient) {
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
