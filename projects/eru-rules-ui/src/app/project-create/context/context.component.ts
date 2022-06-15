import { Component, forwardRef, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';

@Component({
  selector: 'app-context',
  templateUrl: './context.component.html',
  styleUrls: ['./context.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ContextComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => ContextComponent),
      multi: true,
    }
  ]
})
export class ContextComponent implements OnInit, OnDestroy, ControlValueAccessor, Validator {

  constructor() { }

  ngOnInit(): void {
  }

  writeValue(obj: any): void {
    
  }

  registerOnChange(fn: any): void {
    
  }

  registerOnTouched(fn: any): void {
    
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return null;
    
  }

  ngOnDestroy(): void {
    
  }

}
