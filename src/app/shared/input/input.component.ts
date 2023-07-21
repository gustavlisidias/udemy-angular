import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html'
})

export class InputComponent {

  @Input() public contador: number = 0;

}