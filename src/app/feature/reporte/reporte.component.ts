import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {
  form!: FormGroup;
  bodyReporte: any

  datosFormCred = new FormGroup({
    asignatura: new FormControl(''),
    email: new FormControl('',Validators.email)
   
  })
  onSubmit(){
    this.bodyReporte = {
      "asignatura": this.datosFormCred.value.asignatura,
      "email": this.datosFormCred.value.email
    }
    console.log(this.bodyReporte)
  }
  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }
  volver() {
    this.router.navigate(['/']);
  }
}
