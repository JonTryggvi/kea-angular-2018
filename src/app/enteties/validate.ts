export class Validator {
  public spanClass_lastname: string;
  public inputClass_lastname: string;
  public spanClass_firstname: string;
  public inputClass_firstname: string;
  public spanStar_firstname: boolean;
  public spanStar_lastname: boolean;
  public spanClass_birthDate: string;
  public inputClass_birthDate: string;
  public spanStar_birthDate: boolean;
  private isInvalidAndNotPristine;
  private birthdayLogic;
  public checkforblur(theInput, formGroup) {
    console.log(formGroup);
    this.isInvalidAndNotPristine = formGroup.controls[theInput].status === 'INVALID' && !formGroup.controls[theInput].pristine;
    this.birthdayLogic = formGroup.controls[theInput].value !== '';

    switch (theInput) {
      case 'firstname':
        if (this.isInvalidAndNotPristine) {
          this.spanClass_firstname = 'spanError';
          this.inputClass_firstname = 'inputError';
          this.spanStar_firstname = true;
        } else {
          this.spanClass_firstname = 'spanOk';
          this.inputClass_firstname = 'inputOk';
          this.spanStar_firstname = false;
        }
          break;
      case 'lastname':
        if (this.isInvalidAndNotPristine) {
          this.spanClass_lastname = 'spanError';
          this.inputClass_lastname = 'inputError';
          this.spanStar_lastname = true;
        } else {
          this.spanClass_lastname = 'spanOk';
          this.inputClass_lastname = 'inputOk';
          this.spanStar_lastname = false;
        }
        break;
      case 'birthDate':
        if (this.birthdayLogic) {
          this.spanClass_birthDate = 'spanError';
          this.inputClass_birthDate = 'inputError';
          this.spanStar_birthDate = true;
        } else {
          this.spanClass_birthDate = 'spanOk';
          this.inputClass_birthDate = 'inputOk';
          this.spanStar_birthDate = true;
        }
        break;
      default:
        break;
    }
  }

}
