import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";


export class CustomValidators {
    static MatchValidator(source: string, target: string): ValidatorFn {
      return (control: AbstractControl): ValidationErrors | null => {
        const sourceCtrl = control.get(source);
        const targetCtrl = control.get(target);
  
        return sourceCtrl && targetCtrl && sourceCtrl.value !== targetCtrl.value
          ? { mismatch: true }
          : null;
      };
    }
  }
  
export const passwordMatchValidator: ValidatorFn = (formGroup: AbstractControl): ValidationErrors | null => {
    const parent = formGroup.parent as FormGroup;
    if (!parent) return null;
    return parent.get('password')?.value === parent.get('cpassword')?.value ?
        null : { 'mismatch': true };
}