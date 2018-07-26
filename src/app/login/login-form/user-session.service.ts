import { Injectable } from '@angular/core';
import { UserSession } from './user-session.model';

@Injectable({
  providedIn: 'root'
})
export class UserSessionService {
  constructor() {}

  setUser(data: UserSession) {
    sessionStorage.setItem(data.username, data.loged);
  }

  getUser(data: string) {
    return sessionStorage.getItem(data);
  }
}
