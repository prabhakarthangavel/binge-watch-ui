
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../authenticate/auth.service';

@Injectable()
export class Interceptor implements HttpInterceptor {
    constructor(private _snackBar: MatSnackBar, private _authService: AuthService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let newHeaders = req.headers;
        let token = localStorage.getItem('token');
        if (token) {
            newHeaders = newHeaders.append('Authorization', 'Bearer' + ' ' + token);
        }
        const authReq = req.clone({ headers: newHeaders });
        this._authService.spinnerState(true);
        return next.handle(authReq).pipe(tap(response => {
            if (response instanceof HttpResponse) {
                this._authService.spinnerState(false);
            }
        }), catchError(error => {
            this._snackBar.open("Error occured try after sometime", "Close", {
                duration: 5000,
                verticalPosition: 'bottom'
            });
            return throwError(error);
        })
        );
    }
}