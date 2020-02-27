import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Issue } from '../model/issue.model';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  issues: Issue[];
  displayedColumns: string[] = ['reportNumber', 'description', 'details'];
  
  constructor(private router: Router, private api: ApiService) { }

  async ngOnInit() {
     this.issues = await this.api.getIssues();
  }

  logOut(){

    localStorage.removeItem('currentUser');
    this.router.navigate(['login']); 
  }

  searchIssue(report_number) {
    return this.issues.filter((issue) => issue.reportNumber === report_number);
  }

  openIssue(reportNumber) {
    const issue = this.searchIssue(reportNumber)[0];
    let navigationExtras: NavigationExtras = {
      queryParams: {
        id: issue.id,
        reportNumber: issue.reportNumber,
        timestamp: "",
        reportTimestamp: issue.reportTimestamp,
        status: issue.status,
        idSupporter: "",
        description: issue.description,
        classification: issue.classification,
        service: issue.service
      }
    };
    this.router.navigate(['issueDetails', reportNumber], navigationExtras);
  }

}
