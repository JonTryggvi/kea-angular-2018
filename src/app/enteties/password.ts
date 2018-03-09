import { FormControl } from '@angular/forms';

export class PasswordValidator {

  static getPasswordValidator() {
    return function passwordValidator(control: FormControl): { [s: string]: boolean } {

      // Write code here..
      if (!control.value.match(/^(?=.*[\d])(?=.*[!@#$%^&*])[\w!@#$%^&*]{6,16}$/)) { /// ^(?=.*[\d])(?=.*[!@#$%^&*])[\w!@#$%^&*]{6,16}$/
        return { invalidPassword: true };
      }

      return null;
    };
  }
}
