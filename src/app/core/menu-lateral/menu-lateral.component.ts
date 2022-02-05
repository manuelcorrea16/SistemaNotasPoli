import { Component, EventEmitter, Output, OnInit } from '@angular/core';

export interface NavItem {
  name: string;
  url: string;
  icon: string;
}


@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent implements OnInit {

  @Output() closeSidenav = new EventEmitter();

  // TODO: CAMBIAR MENU Y RUTAS
  public menu: NavItem[] = [
    { url: '/eventos', name: 'Ver Eventos', icon: 'next_week' },
    { url: '/eventos/crear', name: 'Crear Eventos', icon: 'book_online' },
  ];

  public estaEnSesion: boolean = true;

  constructor() { }

  ngOnInit(): void {

  }

  onToggle(): void {
    this.closeSidenav.emit();
  }

  cerrarSesion() {
    this.onToggle();

  }
}
