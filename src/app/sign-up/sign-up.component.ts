import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: false,
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})

export class SignUpComponent {
  @Output() formSubmitted = new EventEmitter();

  constructor (private router : Router) {}

formSignUp = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
    confirmPassword: new FormControl('', []),
  }, [this.isMismatch]);


  private isMismatch(control: AbstractControl): ValidationErrors | null {
    if (control.get('password')?.value !== control.get('confirmPassword')?.value) {
      return  { passwordMismatch: true };
    }
    return null
  };

  setDefaultValues() {
    this.formSignUp.setValue({
      username: 'Alba',
      password: '12345',
      confirmPassword: '12345'
    });
  }

  onSubmit() {
    if (this.formSignUp.valid) {
      this.formSubmitted.emit(this.formSignUp.value);
      //redireccionar a la pagina de agregar-disco
      this.router.navigate(['/agregar-disco']);
    }
  }
}