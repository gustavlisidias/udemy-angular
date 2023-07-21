import { Component } from '@angular/core';

@Component({
  selector: 'app-guards-account',
  templateUrl: './account-guards.component.html',
  styleUrls: ['./account-guards.component.css']
})

export class AccountGuardsComponent {

  public voltar(): boolean {
    if (confirm("Você deseja voltar?")) {
      return true;
    } 
    return false;
  }

}
