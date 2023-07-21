import { Component, OnInit, OnChanges, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html'
})

export class TitleComponent implements OnInit, OnChanges, OnDestroy {

  @Input() public title: string = "Bem vindo";

  ngOnInit(): void { 
    console.log("O title component foi inicializado.");
  }

  ngOnChanges(): void {
    console.log("O title component foi alterado.");
  }

  ngOnDestroy(): void {
    console.log("O title component foi destruido.");
  }

  constructor() { }

}
