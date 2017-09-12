import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  form: any = {};
  model: any = {};

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      'firstName': [this.model.firstName, Validators.required]
    })
  }
}
