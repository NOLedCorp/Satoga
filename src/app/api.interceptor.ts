import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './services/user.service';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiInterceptor implements HttpInterceptor{
    intercept(req:HttpRequest<any>, next:HttpHandler): Observable<HttpEvent<any>>{
        if (req.url.includes('admin_controller.php') && !req.url.includes('Key=enter')) {
            let u=JSON.parse(sessionStorage.getItem('satogaUserKey'));
            const paramReq = req.clone({
                params: req.params.set('Login', encodeURIComponent(u.Login)).set('Password', encodeURIComponent(u.Password))
            });
            return next.handle(paramReq);
        } else {
            return next.handle(req);
        }
    }
}
