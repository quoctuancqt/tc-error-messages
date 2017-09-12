import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from "@angular/forms";
import { ValidatorService } from './validator.service';

@Component({
  selector: 'tc-control-messages',
  template: `<div *ngIf="errorMessage !== null" class="msg-error">{{errorMessage}}</div>`,
  styles: [`.msg-error { color:red;}`]
})
export class ControlMessagesComponent {
  @Input() control: FormControl;

  constructor(private validatorService: ValidatorService) { }

  get errorMessage() {
    for (let propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
        return this.validatorService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
      }
    }

    return null;
  }

}
