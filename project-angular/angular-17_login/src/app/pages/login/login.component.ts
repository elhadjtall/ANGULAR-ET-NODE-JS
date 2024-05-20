import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  // on importe le login
  login
}

export class Login {
  {
    EmailId: string;
    Password: string;
    // On creer le constructor 
    constructor() {
      this.EmailId = '';
      this.Password = '';
    }
  }
}
