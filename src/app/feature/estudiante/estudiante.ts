import { Component, EventEmitter, Output, OnInit } from '@angular/core';


@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante/estudiante.html',
  styleUrls: ['./estudiante/estudiante.css']
})
export class estudianteComponente implements OnInit {

  estaEnSesion: boolean = false;

  @Output() openMenu = new EventEmitter();


  ngOnInit(): void {
    
  }
  clickregistro(){
    alert('hola')
}

}