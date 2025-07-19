import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  standalone: false,
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {
  @Output() formSubmitted = new EventEmitter();

formSignUp = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
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
      username: 'AlbaBarragan',
      password: '12345678',
      confirmPassword: '12345678'
    });
  }

  onSubmit() {
    if (this.formSignUp.valid) {
      this.formSubmitted.emit(this.formSignUp.value);
      alert('Te logueaste correctamente');
    }
  }
}

/*formSignUp = new FormGroup({
  username: new FormControl(''),
  email: new FormControl(''),
  password: new FormControl(''),
  confirmPassword: new FormControl('')
});*/