import { FormArray, FormControl, FormGroup } from '@angular/forms';

export class formValidations {

  static requiredMinCheckBox(min) {
    const validator = (formArray: FormArray) => {
      const values = formArray.controls
      .map(v => v.value)
      .reduce((total, current) => current ? total + current : total, 0);
      return values >= min ? null : {required: true};
    };
    return validator;
  }
  static equalsTo(otherField: string) {
    const validator = (formControl: FormControl) => {
      if (otherField == null){
        throw new Error ('Informe um campo');
      }
      if (!formControl.root || !(formControl.root as FormGroup).controls) {
        return null;
      }
      const field = (formControl.root as FormGroup).get(otherField);
      if (field.value !== formControl.value) {
        return { equalsTo: otherField };
      }
    };
    return validator;
    return null;
  }
}
