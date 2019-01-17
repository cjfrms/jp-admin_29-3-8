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
    apiUrl = environment.apiUrl;
    constructor(private http: HttpClient, private localStorage: LocalStorageService, private sessionStorage: SessionStorageService) { }

    login(credentials): Observable<any> {
        const authHeader = new HttpHeaders().append("Authorization", "Basic bm9ybWFsLWFwcDpzZWNyZXQ=")
        .append("Content-Type", "application/x-www-form-urlencoded");
        const httpOptions = {
            headers: authHeader
        };

        const xx = "grant_type=password&username=" + credentials.username + "&password=" + credentials.password + "&scope=read";
        return this.http.post(this.apiUrl + 'oauth/token' , xx, {headers: authHeader}).pipe(
                map(authenticateSuccess.bind(this))
        );
        function authenticateSuccess(token) {
            console.log(token.access_token);
            this.sessionStorage.store('authenticationToken', token.access_token);
            return token;
        }
    }
    logout(): void {
        this.localStorage.clear('authenticationToken');
        this.sessionStorage.clear('authenticationToken');
    }
}
