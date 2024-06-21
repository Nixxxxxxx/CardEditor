import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  APIUrl: string = environment.apiEndpoint;

  constructor(private http: HttpClient, private router: Router) {}

    get isAuthenticated() {
        return !!localStorage.getItem('token')
    }

  register(credentials: any) {
    this.http
      .post<any>(this.APIUrl + '/account', credentials)
      .subscribe((res) => {
        this.authenticate(res);
      });
  }

  login(credentials: any) {
    this.http
      .post<any>(this.APIUrl + '/account/login', credentials)
      .subscribe((res) => {
        this.authenticate(res);
      });
  }

  authenticate(res: any) {
    localStorage.setItem('token', res);
    this.router.navigate(['/']);
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
}
