import {
    Component,
    ViewEncapsulation,
    Input,
    forwardRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'tt-input',
    templateUrl: 'input.component.html',
    styleUrls: ['input.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => InputComponent),
        multi: true
    }]
})
export class InputComponent implements ControlValueAccessor {
    inputValue: string;

    onChange = (_: any) => {};
    onTouched = () => { };

    @Input() inputType: string = 'text';
    @Input() inputName: string;
    @Input() inputClass: string;
    @Input() inputPlaceholder: string;

    writeValue(value: string): void {
        this.inputValue = value;
    }

    registerOnChange(fn) {
        this.onChange = fn;
    }

    registerOnTouched(fn) {
        this.onTouched = fn;
    }

    inputHandler() {
        this.onChange(this.inputValue);
    }

    blurHandler() {
        this.onTouched();
    }
}
