import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  name?: string;
  email?: string;
  password?: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log({ name: this.name, email: this.email, password: this.password });
  }

}
