import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { IRegisterUser } from 'src/types/types';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}
  user: IRegisterUser = {
    username: 'test',
    password: 'test',
    email: 'test@test.com',
  };

  createUser(user: IRegisterUser): Observable<IRegisterUser> {
    let body = JSON.stringify(user);
    const myHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<IRegisterUser>('/api/1.0/users', body, {
      headers: myHeaders,
    });
  }
}
