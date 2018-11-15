import {Injectable} from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CommonService {
  username: string;

  constructor() {
    this.username = localStorage.getItem('username');
    // this.localStorage.observe('username').subscribe((value) => this.username = value);
  }

  setUsername(uname: string) {
    this.username = this.username;
    localStorage.setItem('username', uname);
  }

}
