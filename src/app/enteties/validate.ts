export class Validator {
  public spanClass_lastname: string;
  public inputClass_lastname: string;
  public spanClass_firstname: string;
  public inputClass_firstname: string;
  public spanStar_firstname: boolean;
  public spanStar_lastname: boolean;

  public checkforblur(theInput, formGroup) {
    console.log(formGroup);

    if (formGroup.controls[theInput].status === 'INVALID' && !formGroup.controls[theInput].pristine) {
      switch (theInput) {
        case 'firstname':
          this.spanClass_firstname = 'spanError';
          this.inputClass_firstname = 'inputError';
          this.spanStar_firstname = true;
          break;
        case 'lastname':
          this.spanClass_lastname = 'spanError';
          this.inputClass_lastname = 'inputError';
          this.spanStar_lastname = true;
          break;
        default:
          break;
      }
    } else {
      switch (theInput) {
        case 'firstname':
          this.spanClass_firstname = 'spanOk';
          this.inputClass_firstname = 'inputOk';
          this.spanStar_firstname = false;
          break;
        case 'lastname':
          this.spanClass_lastname = 'spanOk';
          this.inputClass_lastname = 'spanOk';
          this.spanStar_lastname = false;
          break;
        default:
          break;
      }
    }
  }

}
