import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    const accessToken = localStorage.getItem('accessToken') ?? '';
    request = request.clone({
      setHeaders: {
        Authorization: accessToken ? `Bearer ${accessToken}` : '',
      },
    });

    return next.handle(request);
  }
}
