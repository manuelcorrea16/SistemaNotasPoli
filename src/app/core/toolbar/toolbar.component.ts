import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  estaEnSesion: boolean = true;

  @Output() openMenu = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }

}
