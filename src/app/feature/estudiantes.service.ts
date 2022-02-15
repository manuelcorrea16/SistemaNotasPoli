
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpService } from '../core/service/http.service';
import { RespuestaApi } from '../core/model/respuesta-api.model';


@Injectable()
export class EventoService {

  private path = 'eventos';

  constructor(
    private httpService:HttpService,
    private router: Router
  ) { }

  consultar(): Observable<any> {
    return this.httpService.getRequest<any[]>(this.path).pipe(
      map((res: any[]) => {
        return res.map(evento => {
          return {
            "idEvento": evento.idEvento,
            "titulo": evento.informacionEvento.titulo,
            "categorias": evento.informacionEvento.categorias,
            "fecha": evento.informacionEvento.fechaEvento
          } as any;
        })
      })
    );
  }


  crear(data: any) {
    this.httpService.postRequest<any, RespuestaApi>(this.path, data).subscribe((res: RespuestaApi) => {
      this.volverAListar();
    }, (err) => {
      console.log(err);
    });
  }

  private volverAListar() {
    this.router.navigate(['/home/estudiantes']);
  }

}
