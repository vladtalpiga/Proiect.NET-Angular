import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http : HttpClient) { }

  signUp(userObj: User): Observable<User> {
    // userObj.id = 0;
    return this.http.post<User>(this.baseApiUrl + '/api/users/register', userObj);
  }

  login(userObj: User): Observable<User> {
    return this.http.post<User>(this.baseApiUrl + '/api/users/authenticate', userObj);
  }
}
