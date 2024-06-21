import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';

@Injectable()
export class AuthLoginInterceptor implements HttpInterceptor {

  constructor(private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        alert('You are not authorized to perform these actions.' +
               'Please login before.');
          // Handle the unauthorized error
          // Redirect to login or show an error message
          this.router.navigate(['/login']);

        // Use observableThrowError to return a new observable that emits the error
        // Still need to return an error observable
        return next.handle(request)
      })
    );
  }
}
