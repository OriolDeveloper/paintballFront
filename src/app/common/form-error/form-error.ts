import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';

export function getErrorMessage(control: AbstractControl, form?: FormGroup): string | null {
    //Si no hemos entrado al control o no tiene errores o no ha sido tocado, no mostramos nada
    if (!control || !control.errors || !control.touched) return null;

    const errors = control.errors;
    //i18n here
    if (errors['required']) return 'Este campo es obligatorio.';
    if (errors['email']) return 'Formato de email inválido.';
    if (errors['minlength']) {
        const { requiredLength, actualLength } = errors['minlength'];
        return `Mínimo ${requiredLength} caracteres (actual: ${actualLength}).`;
    }
    if (errors['maxlength']) {
        const { requiredLength, actualLength } = errors['maxlength'];
        return `Máximo ${requiredLength} caracteres (actual: ${actualLength}).`;
    }
    if (errors['pattern']) return 'Formato inválido. Revisa los requisitos.';
    if (errors['emailExistente']) return 'Este email ya está registrado.';
    if (errors['matchingPassword']) return 'Las contraseñas no coinciden.';

    return 'Error desconocido.';
}

//Devolvemos la función porque es un validador personalizado y la llamamos desde el Validators
export function confirmPasswordValidator(originalPassword: AbstractControl) {
    return (control: AbstractControl): ValidationErrors | null => {
        if (!control.value || !originalPassword.value) return null;
        return control.value === originalPassword.value ? null : { matchingPassword: true };
    }
}
