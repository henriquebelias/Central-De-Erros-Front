import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../models/User';

type UserTypes = {
  name?: string,
  email: string,
  password: string,
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'https://ancient-ridge-40479.herokuapp.com'

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}/user`);
  }

  getToken({ email, password }: UserTypes) {
    const userInfo = `grant_type=password&username=${email}&password=${password}`;
    const options = {
      headers: new HttpHeaders({
        'Authorization': 'Basic ' + btoa('admin:123'),
      }),
    };

    return this.http
      .post(`${this.url}/oauth/token?${userInfo}`, {}, options).pipe(catchError(this.handleError));
  }

  registerUser({ name, email, password }: UserTypes) {
    return this.http.post(`${this.url}/user`, { name, email, password });
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(`Error status ${error.status} - Error: ${error.error}`);
    }

    return throwError(
      'Login inválido'
    );
  }
}
