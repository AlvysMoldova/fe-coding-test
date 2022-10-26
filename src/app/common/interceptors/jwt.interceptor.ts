import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { authToken } from 'auth-token';

@Injectable()
export class JWTInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req = req.clone({
      headers: req.headers.append('Authorization', `Bearer ${authToken}`),
    });
    return next.handle(req);
  }
}
