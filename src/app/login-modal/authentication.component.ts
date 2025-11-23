import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormsModule, AbstractControl } from '@angular/forms';
import { ErrorMessageFormComponent } from '../common/form-error/error-message-form/error-message-form.component';
import { confirmPasswordValidator } from '../common/form-error/form-error';
import { AuthenticationService, UserDto } from './service/authentication.service';
import { Router } from '@angular/router';
import { CategoryService } from '../news/service/category.service';

@Component({
  selector: 'app-authentication',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, ErrorMessageFormComponent],
  templateUrl: './authentication.component.html',
})
export class AuthenticationModalComponent {
  //El input lo recibimos del padre cuando le damos click al boton de loginModal
  @Input() isShowLoginModal = false;
  @Output() close = new EventEmitter<void>();
  userDto: UserDto | null = null;
  selectedTab: 'login' | 'register' = 'login';
  error: any = '';
  formLogin: FormGroup;
  formRegister: FormGroup;


  constructor(private fb: FormBuilder, private auth: AuthenticationService, private router: Router, private categoryService: CategoryService) {
    auth.user$.subscribe(currentUser => {
      this.userDto = currentUser;
    });
    this.formLogin = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*]).+$/)]]
    });

    this.formRegister = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(5), Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*]).+$/)]],
      confirmPassword: [null, [Validators.required]]
    });

    //Cuando inicializamos la password de confirmacion le añadimos el validador personalizado
    this.formRegister.get('confirmPassword')?.setValidators([
      Validators.required,
      //Función exportada de form-error.ts, el uso de ! indica que estamos seguros que no es null ni undefined
      confirmPasswordValidator(this.formRegister.get('password')!)
    ]);

    // Actualizamos la password de confirmacion cuando cambia la original
    this.formRegister.get('password')?.valueChanges.subscribe(() => {
      this.formRegister.get('confirmPassword')?.updateValueAndValidity();
    });
  }

  get formLoginInHtml(): { [key: string]: AbstractControl } {
    return this.formLogin.controls;
  }

  get formRegisterInHtml(): { [key: string]: AbstractControl } {
    return this.formRegister.controls;
  }


  submitForm(type: 'login' | 'register') {
    switch (type) {
      case 'login':
        this.auth.login(this.formLogin).subscribe({
          next: (data) => {
            this.closeModal();
          },
          error: (err) => {
            this.error = err?.error?.message || 'Error en login';
            alert(err?.error?.message);
          }
        });
        break;
      case 'register':
        this.auth.register(this.formRegister).subscribe({
          next: (data) => this.closeModal(),
          error: (err) => {
            this.error = err?.error?.message || 'Error en el registro';
            alert(err?.error?.message);
          }
        });
        break;
    }
  }

  switchTab(tab: 'login' | 'register') {
    this.selectedTab = tab;
  }

  //Emitimos evento y cerramos desde el padre el Modal (LOGIN/REGISTRO) poniendo el booleano en false
  closeModal() {
    this.close.emit();
  }
}