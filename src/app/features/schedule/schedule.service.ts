import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  private baseUrl = '/api/test';
  constructor(private http: HttpClient) { }

  getScheduleList(): Observable<any> {
    return this.http.get('/api/test');
  }

  createSchedule(schedule: Object): Observable<Object> {
    return this.http.post('/api/createSchedule', schedule);
  }

  deleteSchedule(schedule: Object): Observable<Object> {
    return this.http.post('/api/deleteSchedule', schedule);
  }
}
