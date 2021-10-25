import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-submit-button',
  templateUrl: './submit-button.component.html',
  styleUrls: ['./submit-button.component.scss']
})
export class SubmitButtonComponent implements OnInit {
  @Input() text ?: string;
  @Input() name ?: string;
  @Input() email ?: string;
  @Input() password ?: string;
  @Input() buttonRole ?: string;

  constructor() { }

  ngOnInit(): void {
  }

  isButtonDisabled(): boolean {
    if (this.buttonRole === 'login') {
      if (!this.email || (!this.password && this.password!.length < 6)) {
        return true;
      }
      return false;
    } else {
      if (!this.email || (!this.password && this.password!.length < 6) || !this.name) {
        return true;
      }
      return false;
    }
  }

}
