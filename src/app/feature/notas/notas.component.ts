import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {

  correo = /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/
  form!: FormGroup;
  bodyNotas: any

  datosFormCred = new FormGroup({
    email: new FormControl('',Validators.pattern(this.correo)),
    asignatura: new FormControl('',Validators.required),
    semestre: new FormControl('',Validators.required),
    parcial: new FormControl('',[Validators.min(0),Validators.max(50)]),
    talleres: new FormControl('',[Validators.min(0),Validators.max(50)]),
    exposicion: new FormControl('',[Validators.min(0),Validators.max(50)]),
    participacion: new FormControl('',[Validators.min(0),Validators.max(50)]),
  })

   constructor(private router: Router) {
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
    
  }
  ngOnInit(): void {
  }
  volver() {
    this.router.navigate(['/']);
  }
}
