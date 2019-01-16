import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map, catchError  } from 'rxjs/operators';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
    private SERVER_API_URL = '/api/test';
    constructor(private http: HttpClient, private $localStorage: LocalStorageService) { }

    login(credentials): Observable<any> {
        const authHeader = new HttpHeaders().append("Authorization", "Basic bm9ybWFsLWFwcDpzZWNyZXQ=")
        .append("Content-Type", "application/x-www-form-urlencoded");
        const httpOptions = {
            headers: authHeader
        };
        const data = {
            username: credentials.username,
            password: credentials.password,
            rememberMe: credentials.rememberMe,
            grant_type: 'password',
            scope: 'read'
        };

        const xx = "grant_type=password&username=" + credentials.username + "&password=" + credentials.password + "&scope=read";
        console.log(xx);
        return this.http.post('http://localhost:8081/oauth/token' , xx, httpOptions).pipe(
                map(authenticateSuccess.bind(this))
        );
        function authenticateSuccess(token) {
            console.log(token.access_token);
            this.$localStorage.store('authenticationToken', token.access_token);
            return token;
        }
    }
}
