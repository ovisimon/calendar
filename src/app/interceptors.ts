import { HttpRequest, HttpResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs/Rx";
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/do';

declare let __CONFIG__: any;
let API_URL: string = __CONFIG__.API_URL;

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // console.log(req.url, req.method);
    let h: HttpHeaders = req.headers;
    if(req.url.indexOf('/api') === 0 && req.url !== `/api/user/forgot`) {
      let token: string = localStorage.authenticationToken || sessionStorage.authenticationToken;
      if (token) {
        h = req.headers.append('authorization', 'Bearer ' + token);
      }
    }
    if(req.url.indexOf('/api') === 0) {
      req = req.clone({
        url: API_URL + req.url,
        headers: h
      });
    }
    return next.handle(req).do(evt => {
      if (evt instanceof HttpResponse) {
        // console.log(req.url, '---> status:', evt.status);
      }
    });
  }
}
