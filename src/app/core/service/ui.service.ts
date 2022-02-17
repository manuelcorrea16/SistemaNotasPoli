import { EventEmitter, Injectable, Output } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatDrawerMode } from '@angular/material/sidenav';
import { MatSnackBar, MatSnackBarRef, TextOnlySnackBar } from '@angular/material/snack-bar';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class UiService {

  @Output() modoActual: EventEmitter<MatDrawerMode> = new EventEmitter();
  estaCargando = new Subject<boolean>();

  constructor(private snackBar: MatSnackBar, private dialog: MatDialog) { }

  cambiarModo(nuevoModo: MatDrawerMode) {
    this.modoActual.emit(nuevoModo);
  }

  mostrarSnackBar(
    mensaje: string,
    accion?: string
  ): MatSnackBarRef<TextOnlySnackBar> {
    return this.snackBar.open(mensaje, accion ? accion : 'Ok', {
      duration: 4 * 1000, // 4ms * 1000 ms = 4 segundos
      verticalPosition: 'top',
      horizontalPosition: 'end',
    });
  }


}
