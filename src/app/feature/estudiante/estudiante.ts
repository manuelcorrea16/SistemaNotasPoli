import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { postGresService } from 'src/app/service/obtenerLIstasPostgres'
import { sede } from 'Back/models/sedes';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.html',
  styleUrls: ['./estudiante.css'],
  providers: [postGresService]
})
export class estudianteComponente implements OnInit {

  estaEnSesion: boolean = false;

  form!: FormGroup;

  public sedes: sede[] = [];
  public programas: string[] = [];

  @Output() openMenu = new EventEmitter();

  constructor(private router: Router, private _postGresService: postGresService
  ) {
  }
  ngOnInit(): void {
    this.sedes = this._postGresService.obtenerSedes();
  }

  guardar(): void {
    console.log('entre')
    const estudiante = this.form.value;
  /*  const sede: Sede[] = this.form.value.categorias.split(',').map((cat: string) => {
      return { "nombre": cat.trim().toLowerCase() };
    });
    const nombre: string = moment(this.form.value.fecha).format('YYYY-MM-DD');
    const lugarArray = evento.lugar.split(',');
    evento.lugar = { 'nombre': lugarArray[0], 'direccion': lugarArray[1] };
    evento.categorias = categorias;
    evento.fecha = fecha;
    const organizadores = evento.organizadores.map((codigo: number) => this.organizadores.find(org => org.codigo === codigo));
    evento.organizadores = organizadores;
    if (this.estaActualizando) {
      this.servicio.modificar(this.form.value, this.evento.idEvento);
    } else {
      this.servicio.crear(this.form.value);
    }*/
    
  }

  volver() {
    this.router.navigate(['/']);
  }


}