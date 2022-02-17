import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {

  form!: FormGroup;
  bodyRegistro: any

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
  }
  volver() {
    this.router.navigate(['/']);
  }
}
