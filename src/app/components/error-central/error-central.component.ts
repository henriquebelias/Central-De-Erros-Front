import { Component, OnInit } from '@angular/core';
import { ErrorLog } from 'src/app/models/ErrorLog';
import { ErrorLogService } from 'src/app/services/error-log.service';

@Component({
  selector: 'app-error-central',
  templateUrl: './error-central.component.html',
  styleUrls: ['./error-central.component.scss']
})
export class ErrorCentralComponent implements OnInit {

  errors?: ErrorLog[];

  token: any;

  constructor(private errorLogService: ErrorLogService) { }

  ngOnInit(): void {
    this.token = JSON.parse(sessionStorage.getItem('token')!);
    this.getErrors();
  }

  getErrors(): void {
    this.errorLogService.getErrorLogs(this.token).subscribe((response) => this.errors = response)
  }

}
