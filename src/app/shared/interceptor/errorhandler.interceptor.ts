import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpErrorResponse, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { NzMessageService } from 'ng-zorro-antd';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {
    constructor(private message: NzMessageService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            tap(
                (event: HttpEvent<any>) => {},
                (err: any) => {
                    if (err instanceof HttpErrorResponse) {
                        if (err.status === 0 ) {
                            this.message.create('error', err.statusText);
                        } else if (err.status === 400) {
                            if (typeof err.error.error_description === "string") {
                                this.message.create('error', err.error.error_description);
                            } else {
                                this.message.create('error', err.error);
                            }
                        } else if (err.status === 401) {
                            this.message.create('error', err.error.error);
                        } else {
                            this.message.create('error', err.error);
                        }
                        /*
                        alert(err.status + "\n" + err.message + "\n" + err.statusText);
                        if (err.error) {
                            this.message.create('error', err.error);
                            alert("a");
                        } else if (err.error.error) {
                            this.message.create('error', err.error.error);
                            alert("b");
                        } else {
                            this.message.create('error', err.message);
                            alert("c");
                        }
                        */
                    }
                }
            )
        );
    }
}
