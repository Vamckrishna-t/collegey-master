import { Component, Input, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-validation',
  templateUrl: './input-validation.component.html',
  styleUrls: ['./input-validation.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class InputValidationComponent {
  @Input() control: FormControl;
  @Input() isShowErrorMsg = false;

  get errorMessage() {
    for (const propertyName in this.control.errors) {
      if (
        this.control.errors.hasOwnProperty(propertyName) &&
        (this.control.dirty || this.control.touched) && this.isShowErrorMsg
      ) {
        return this.getValidatorErrorMessage(
          propertyName,
          this.control.errors[propertyName]
        );
      }
    }
    return null;
  }

  getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
    const config = {
      required: 'This field can not be blank.',
      invalidNumber: 'Input should be an integer value',
      invalidPhone: 'Invalid phone number',
      invalidEmailAddress: 'Invalid email address',
      invalidUrl: 'Invalid Url',
      numericAllowed: 'Only numeric values are allowed',
      emailTaken: 'This email is already taken!',
      notEquivalent: 'Passwords should match',
      minlength: `Minimum length should be ${validatorValue.requiredLength} characters`,
      maxlength: `Maximum length should be ${validatorValue.requiredLength} characters`
    };

    return config[validatorName];
  }
}
