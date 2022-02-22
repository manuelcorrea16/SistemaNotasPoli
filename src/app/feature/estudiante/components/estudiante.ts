import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SedesService } from '../../service/PostGresService';
import { Sedes} from '../../models/Sedes';
import { Programa} from '../../models/Programa';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Options } from 'src/app/core/service/http.service';

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
  public programas: Programa[] = [];
  bodyEstudiante: any;

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
    this.http.post<any>('http://localhost:3000/api/registro',this.bodyEstudiante).subscribe(data => {
    })
  }

  constructor
  (
    private router: Router, 
    private http: HttpClient
    )  { }

  ngOnInit(): void {
    
    this.http.get<any>('http://localhost:8080/api/sedes/',{}).pipe(
      map((res: any) => {
        return res.map((sede:Sedes) => {
          return {
            "codigo": sede.codigo,
            "nombre": sede.nombre,
            "cod_ciudad": sede.cod_ciudad,
          } as Sedes;
        })
      })).subscribe(data => {
        console.log(data)
        this.sedes = data
      })

      this.http.get<any>('http://localhost:8080/api/programas/',{}).pipe(
        map((res: any) => {
          return res.map((programa:Programa) => {
            return {
              "codigo": programa.codigo,
              "nombre": programa.nombre,
              "codigo_area": programa.codigo_area,
            } as Programa;
          })
        })).subscribe(data => {
          console.log(data)
          this.programas = data
        })
  }

  public createDefaultOptions(): Options {
    return {
      headers: new HttpHeaders({ 'Content-Type': 'application/json','Access-Control-Allow-Origin':'*' }),
    };
  }

  
  volver() {
    this.router.navigate(['/']);
  }

}