import { AbstractControl, Validators, ValidatorFn } from '@angular/forms';


/**
 * Provides error messages for form validation errors.
 */
export class ValidationMessages {
    static getMessage(validatorName: string, validatorValue?: any) {
        const config = {
            'required': 'Required',
            'minlength': `Minimum length ${validatorValue.requiredLength}`,
            'maxlength': `Maximum length ${validatorValue.requiredLength}`,
            'password': 'Password must be contain at least one number',
            'minselection': `At least ${validatorValue.requiredLength} items must be selected`,
            'maxselection': `Maximum of ${validatorValue.requiredLength} items can be selected`,
        };

        return config[validatorName];
    }
}

/**
 * Provides custom form validators.
 */
export class FormValidatorFactory {

    /**
     * Validator that requires controls to have a value that contains at least one number.
     */
    static password(control: AbstractControl) {
        // (?=.*[0-9])       - Assert a string has at least one number
        if (control.value.match(/^.*[0-9]$/)) {
            return null;
        } else {
            return {'password': true};
        }
    }

    /**
     * Validator that requires controls to have a value of a minimum items.
     */
    static minSelection(minSelection: number): ValidatorFn {
        return (control: AbstractControl): {[key: string]: any} => {
            const length: number = control.value ? control.value.length : 0;
            return length < minSelection ? {'minselection': {'requiredLength': minSelection, 'actualLength': length}} : null;
        };
    }

    /**
     * Validator that requires controls to have a value of a maximum items.
     */
    static maxSelection(maxSelection: number): ValidatorFn {
        return (control: AbstractControl): {[key: string]: any} => {
            const length: number = control.value ? control.value.length : 0;
            return length > maxSelection ? {'maxselection': {'requiredLength': maxSelection, 'actualLength': length}} : null;
        };
    }
}

/**
 * Provides builder capability for form validation.
 */
export class FormValidatorBuilder {

    static validatorObjects(config: Array<any>): Array<any> {
        let validators = [];

        config.forEach((validator: any) => {
            switch (validator.name) {
                case 'required':
                    validators.push(Validators.required);
                    break;

                case 'minlength':
                    validators.push(Validators.minLength(validator.value));
                    break;

                case 'maxlength':
                    validators.push(Validators.maxLength(validator.value));
                    break;

                case 'password':
                    validators.push(FormValidatorFactory.password);
                    break;

                case 'minselection':
                    validators.push(FormValidatorFactory.minSelection(validator.value));
                    break;

                case 'maxselection':
                    validators.push(FormValidatorFactory.maxSelection(validator.value));
                    break;
            }
        });

        return validators;
    }
}
