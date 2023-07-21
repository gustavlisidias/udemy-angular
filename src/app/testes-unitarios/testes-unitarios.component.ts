import { Component } from '@angular/core';

@Component({
  selector: 'app-testes-unitarios',
  templateUrl: './testes-unitarios.component.html',
  styleUrls: ['./testes-unitarios.component.css']
})

export class TestesUnitariosComponent {

  public soma(n1: number, n2: number) {
    return n1 + n2;
  }

}
