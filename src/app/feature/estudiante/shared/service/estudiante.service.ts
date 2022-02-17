import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/core/service/http.service';
import { UiService } from 'src/app/core/service/ui.service';
import { RespuestaApi } from '../model/respuesta-api.model';
import { Estudiante } from '../model/estudiante';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  

  crear(data: Estudiante) {
    this.httpService.postRequest<Estudiante, RespuestaApi>(this.path, data).
    subscribe((res: RespuestaApi) => {
      this.uiService.mostrarSnackBar(res.mensaje);
    }, (err) => {
      console.log(err);
    });

    
  }

  private path = 'registro';

  constructor(
    private router: Router,
    private httpService: HttpService,
    private uiService: UiService,
  ) { }

 
}