import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthHeaderInterceptor implements HttpInterceptor {

    constructor() {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>  {

        var token = localStorage.getItem('token')

        var authRequest = req.clone({
            headers: req.headers.set('Authorization', `Bearer ${token}`)
        })
        return next.handle(authRequest)
    }
}
