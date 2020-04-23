import { Injectable, NgModule } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError, timeout, retry } from 'rxjs/operators';

@Injectable()
export class HttpsRequestInterceptor implements HttpInterceptor {

    constructor(private router: Router) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = sessionStorage.getItem('token');
        const newRequest = req.clone(
            {
                setHeaders: {
                    'Cache-control': 'no-cache',
                    // tslint:disable-next-line:object-literal-key-quotes
                    'Pragma': 'no-cache',
                    'Access-Control-Allow-Origin': '*',
                    // tslint:disable-next-line:object-literal-key-quotes
                    'Authorization': `Bearer ${token}`,
                    'Cookie-Portal': document.cookie,
                },
                withCredentials: true
            }
        );
        return next.handle(newRequest).pipe(
            timeout(60000),
            catchError(this.handlerError));
    }

    handlerError = (response) => {
        console.log('error: ', response);
        if (response instanceof HttpErrorResponse) {
            switch (response.status) {
                case 400:
                    break;
                case 404:
                    window.location.href = '#/404';
                    break;
                case 409:
                    break;
                default:
                    console.log('Processing http error', response);
                    this.router.navigate(['unavailable-service']);
                    break;
            }
        }

        return throwError(response);

    }

}

@NgModule({
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpsRequestInterceptor,
            multi: true,
        },
    ],
})


export class Interceptor { }
