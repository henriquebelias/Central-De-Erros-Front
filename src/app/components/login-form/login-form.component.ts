import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})

export class LoginFormComponent implements OnInit {
  email?: string;
  password?: string;

  ngOnInit(): void {
  }

  handleSubmit(): void {
    console.log(`${this.email} fez o login!`);
  }

}
