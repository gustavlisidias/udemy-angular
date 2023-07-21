import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html'
})

export class OutputComponent {
  @Output() public enviarDados = new EventEmitter();

  public list: Array<{nome: string, idade: number}> = [
    {nome: 'Gustavo', idade: 25},
    {nome: 'Fabricio', idade: 34},
    {nome: 'Laura', idade: 22},
  ]

  public getDados(index: number){
    this.enviarDados.emit(this.list[index]);
  }

}
