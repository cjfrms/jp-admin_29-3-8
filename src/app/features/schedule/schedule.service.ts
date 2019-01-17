import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  private apiUrl = environment.apiUrl;
  private baseUrl = 'http://localhost:8081/api/test';
  constructor(private http: HttpClient) { }

  getScheduleList(): Observable<any> {
    return this.http.get(this.apiUrl + 'api/test');
  }

  createSchedule(schedule: Object): Observable<Object> {
    return this.http.post(this.apiUrl + 'api/createSchedule', schedule);
  }

  deleteSchedule(schedule: Object): Observable<Object> {
    return this.http.post('/api/deleteSchedule', schedule);
  }
}
