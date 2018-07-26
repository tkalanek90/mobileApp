import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginFormService {

  constructor(private http: HttpClient) { }

  getProfile() {
    return this.http.get(`http://localhost:3000/profile/`);
  }
}
