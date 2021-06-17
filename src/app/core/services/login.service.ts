import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private isLogged;
  constructor() {
    this.isLogged = false;
  }

  getIsLogged() {
    return this.isLogged;
  }

  setIsLogged() {
    this.isLogged = true;
  }
}
