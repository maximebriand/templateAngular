import { Component, OnInit } from '@angular/core';

import { LoginService } from '../../core/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(public loginService: LoginService) { }

  ngOnInit(): void {
  }


}
