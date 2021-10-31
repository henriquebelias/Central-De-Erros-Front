import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ErrorLog } from '../models/ErrorLog';

@Injectable({
  providedIn: 'root'
})
export class ErrorLogService {

  url = 'https://ancient-ridge-40479.herokuapp.com'

  constructor(private http: HttpClient) { }

  generateHttpOptions = (token: string) => ({
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      }),
  });

  getErrorLogs = (token: string): Observable<ErrorLog[]> => (
    this.http.get<ErrorLog[]>(`${this.url}/error-log`, this.generateHttpOptions(token))
  );

  getErrorById = (token: string, id : number): Observable<ErrorLog> => (
    this.http.get<ErrorLog>(`${this.url}/error-log/${id}`, this.generateHttpOptions(token))
  );

}
