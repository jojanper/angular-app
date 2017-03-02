import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'dng2-form-input',
  template: require('./form.input.component.html')
})

export class FormInputComponent implements OnInit {

    @Input() type = 'text';
    @Input() label: string;
    @Input() options: any = {};
    @Input() parentForm: FormGroup;

    private control: FormControl;

    ngOnInit () {
        this.control = <FormControl>this.parentForm.controls[this.options.name];
    }

    /**
     * Form group validation (Bootstrap) class(es).
     */
    getGroupClass() {
        const classes = [];

        if (!this.control.valid) {
            classes.push('has-danger');
        } else {
            classes.push('has-success');
        }

        return classes.join(' ');
    }
}
