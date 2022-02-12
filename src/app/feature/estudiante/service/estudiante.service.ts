import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  private path = 'estudiantes';
  constructor(
 /*   private httpService: HttpService,
    private uiService: UiService,
    private router: Router*/) { }

 /* crear(data: Estudiante) {
      this.httpService.postRequest<Estudiante, RespuestaApi>(this.path, data).subscribe((res: RespuestaApi) => {
      this.uiService.mostrarSnackBar(res.mensaje);
      this.router.navigate(['estudiantes']);
    }, (err) => {
      this.mostrarError(err);
    });
  }
  mostrarError(err: any): void {
    console.log('Error[evento.service]', err)
    const message = err.error ? err.error.mensaje : 'No se han podido obtener datos';
    this.uiService.mostrarDialogo({
      title: 'Error',
      message,
      confirm: 'Ok',
    });
  }
*/

}
