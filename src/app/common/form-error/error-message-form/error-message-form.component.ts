import { Component, Input } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { getErrorMessage } from '../form-error';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-error-message-form',
  imports: [CommonModule],
  templateUrl: './error-message-form.component.html',
  styleUrl: './error-message-form.component.scss'
})
export class ErrorMessageFormComponent {
  @Input() control!: AbstractControl;
  @Input() form?: FormGroup;


  //Actualizamos mensaje cuando recibimos control osea cuando cambia
  get mensaje(): string | null {
    //Llamamos a la función exportada de form-error.ts y retornamos el mensaje de error si lo hubiese
    return getErrorMessage(this.control);
  }
}
