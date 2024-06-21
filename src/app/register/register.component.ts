import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, Validators } from '@angular/forms'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  form
  auth : AuthService
  constructor( auth: AuthService, private fb: FormBuilder) {
    this.auth = auth
      this.form = fb.group({
          email: ['', Validators.required],
          password: ['', Validators.required]
      })
  }
}
