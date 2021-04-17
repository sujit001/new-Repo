import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  loginUrl = 'https://assetcomply.thinkagainlab.com/api/v1/user/login';
  login(user) {
    return this.http.post(this.loginUrl, user);
  }
}
