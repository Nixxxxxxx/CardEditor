import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form : any;
  auth : AuthService
  constructor( auth: AuthService, private fb: FormBuilder) {
    this.auth = auth
      this.form = fb.group({
          email: ['', Validators.required],
          password: ['', Validators.required]
      })
  }
}
