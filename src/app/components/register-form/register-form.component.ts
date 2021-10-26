import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  registerForm = this.fb.group({
    name: [
      '',
      [Validators.required],
    ],
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

  successMessage?: string;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.successMessage = 'Cadastro Efetuado!';
  }

}
