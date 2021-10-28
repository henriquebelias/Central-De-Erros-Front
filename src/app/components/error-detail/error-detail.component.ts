import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ErrorLog } from 'src/app/models/ErrorLog';
import { ErrorLogService } from 'src/app/services/error-log.service';

@Component({
  selector: 'app-error-detail',
  templateUrl: './error-detail.component.html',
  styleUrls: ['./error-detail.component.scss']
})
export class ErrorDetailComponent implements OnInit {
  error?: ErrorLog;

  token: any;

  constructor(private route: ActivatedRoute, private errorLogService: ErrorLogService) { }

  ngOnInit(): void {
    this.token = JSON.parse(sessionStorage.getItem('token')!);
    this.getErrorLog();
  }

  getErrorLog(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.errorLogService.getErrorById(this.token, id).subscribe((response) => this.error = response)
  }

}
