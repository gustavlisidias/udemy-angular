import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html'
})

export class ReactiveFormsComponent {
  constructor (private fb: FormBuilder) {  }

  public cadastroForm: FormGroup = this.fb.group({
    primeiroNome: ['', Validators.required],
    ultimoNome: ['', [Validators.required, Validators.minLength(4)]],
    email: ['', [Validators.required, Validators.email]]
  });

  public submitForm () {
    if (this.cadastroForm.valid) { 
      Object.keys(this.cadastroForm.controls).forEach(controlName => {
        const controlValue = this.cadastroForm.controls[controlName].value;
        alert(`${controlName}: ${controlValue}`);
      });
    }
  }
}
