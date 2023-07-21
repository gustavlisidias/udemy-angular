import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

//Services
import { EstadosBrasileirosService } from '../services/estados-brasileiros.service';

//Interfaces
import { EstadosBrasileiros } from '../model/estados-brasileiros';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html'
})
export class FormsComponent {

  estados: EstadosBrasileiros[] | undefined;

  constructor(private estadosBrasileirosService: EstadosBrasileirosService) { }

  ngOnInit() {
    this.getEstados();
  }

  public submitForm(form: NgForm) {
    alert(form.value['nome']);
    alert(JSON.stringify(form.value));
  }

  getEstados() {
    this.estadosBrasileirosService.getEstados().subscribe(estados => {
      this.estados = estados;
    });
  }
}
