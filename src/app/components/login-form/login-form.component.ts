import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})

export class LoginFormComponent implements OnInit {
  loginForm = this.fb.group({
    email: [
      '',
      [
        Validators.required,
        Validators.email,
        Validators.minLength(14),
      ],
    ],
    password: [
      '',
      [
        Validators.required,
        Validators.minLength(6),
      ],
    ],
  });

  users?: User[];

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {}

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.userService.getToken(this.loginForm.value)
      .subscribe(
        (response: any) => {
          sessionStorage.setItem('token', JSON.stringify(response['access_token']));
          this.router.navigateByUrl('/error-central');
        },
        (error) => alert(error)
      );
  }

  getUsers(): void {
    this.userService.getUsers().subscribe((userList) => this.users = userList);
  }
}
