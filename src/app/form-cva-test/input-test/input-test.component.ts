import { Component, ElementRef, forwardRef, Input, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BasicValueAccessor } from '../basic-value-accessor';

@Component({
  selector: 'app-input-test',
  templateUrl: './input-test.component.html',
  styleUrls: ['./input-test.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputTestComponent),
    multi: true,
  }],
})
export class InputTestComponent extends BasicValueAccessor {

  @Input()
  label!: string;

  @ViewChild('input', { static: true })
  inputRef!: ElementRef<HTMLInputElement>;

  isActive: boolean = false;

  constructor() {
    super();
  }

  override writeValue(value: any) {
    this.inputRef.nativeElement.value = value;
    this.value = value;
  }

  override registerOnChange(fn: (value: any) => any) {
    this.onChange = fn;
  }

  override registerOnTouched(fn: () => any) {
    this.onTouched = fn;
  }

  override setDisabledState(isDisabled: boolean) {
    this.inputRef.nativeElement.disabled = isDisabled;
  }

  userInputChange(value: string) {
    this.writeValue(value);
    this.onChange && this.onChange(value);
  }

}
