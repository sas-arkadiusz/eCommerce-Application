import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  username: Subject<string> = new Subject<string>();

  constructor() { }

  updateUsername(name: string) {
    this.username.next(name);
  }
}
