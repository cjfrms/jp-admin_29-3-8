import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
    private SERVER_API_URL = '/api/test';
    constructor(private http: HttpClient) { }

    login(credentials): Observable<any> {
        
        let authHeader = new HttpHeaders().append("Authorization", "Basic bm9ybWFsLWFwcDpzZWNyZXQ=")
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

        const xx = "grant_type=password&username=admin&password=pwd&scope=read";

        return this.http.post('http://localhost:8081/oauth/token' , xx, httpOptions);
        //.pipe(map(authenticateSuccess.bind(this)));
        //return this.http.post('http://localhost:8081/oauth/token', data, { headers: authHeader })
        //.pipe(map(authenticateSuccess.bind(this)));
        /*
        function authenticateSuccess(resp) {
            const bearerToken = resp.headers.get('Authorization');
            if (bearerToken && bearerToken.slice(0, 7) === 'Bearer ') {
                const jwt = bearerToken.slice(7, bearerToken.length);
                this.storeAuthenticationToken(jwt, credentials.rememberMe);
                console.log(jwt);
                return jwt;
            }
        }
        */
    }
}
