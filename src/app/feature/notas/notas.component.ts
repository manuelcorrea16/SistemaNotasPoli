import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {


   constructor(private router: Router) {
  }

  ngOnInit(): void {
  }
  volver() {
    this.router.navigate(['/']);
  }
}
