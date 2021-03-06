import { Component, Input } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';

import { ValidationMessages } from './form.validators';
import { FormInputConfigData } from '../../models';


export interface FormErrorMap {
    key: string;
    error: ValidationErrors;
}

export class FormInputErrorHandler {
    constructor(private control: FormControl, private options: any) { }

    getErrorMessages(): Array<FormErrorMap> {
        const errorMap: Array<FormErrorMap> = [];

        // Control is pristine, no error messages available
        if (this.control.pristine) {
            return errorMap;
        }

        let runErrors = this.control.touched;
        if (this.options && this.options.validationmessages) {
            // Form model explicitly defines that validation messages should appear (for the user)
            // as soon as input is changed (making it dirty), otherwise messages appear only after
            // control is blurred (making it touched)
            runErrors = (this.options.validationmessages.ondirty) ? this.control.touched || this.control.dirty : runErrors;
        }

        // Get validation errors for UI
        if (runErrors) {
            // Collect errors from input control
            for (const propertyName in this.control.errors) {
                if (this.control.errors.hasOwnProperty(propertyName)) {
                    const obj: FormErrorMap = {
                        key: propertyName,
                        error: this.control.errors[propertyName]
                    };
                    errorMap.push(obj);
                }
            }

            // Determine if any of the form level errors apply to this input
            if (this.options) {
                for (const key of this.options.errorkeys) {
                    if (this.control.parent.hasError(key)) {
                        const obj: FormErrorMap = {
                            key: key,
                            error: this.control.parent.errors[key]
                        };
                        errorMap.push(obj);
                    }
                }
            }

            // If there are no errors, mark the control as pristine.
            // No need to validate the control input unless value
            // is changed.
            if (!errorMap.length) {
                setTimeout(() => {
                    this.control.markAsPristine();
                    this.control.markAsUntouched();
                }, 1);
            }
        }

        return errorMap;
    }

    isValid(): boolean {
        let status = this.control.valid;
        if (status && this.options) {
            for (const key of this.options.errorkeys) {
                if (this.control.parent.hasError(key)) {
                    status = false;
                    break;
                }
            }
        }

        return status;
    }
}


@Component({
    selector: 'dng-form-input-messages',
    template: `<div *ngFor="let msg of errorMessages" class="invalid-feedback">{{ msg }}</div>`
})
/**
 * Handle error messages corresponding to specified input control.
 */
export class FormInputMessagesComponent {

    @Input() control: FormControl;
    @Input() options: FormInputConfigData;

    get errorMessages(): Array<string> {
        const errors: Array<string> = [];
        const obj = new FormInputErrorHandler(this.control, this.options);
        const errorMap: Array<FormErrorMap> = obj.getErrorMessages();

        // Collect error messages for the control
        for (const item of errorMap) {
            errors.push(ValidationMessages.getMessage(item.key, item.error));
        }

        return errors;
    }
}
