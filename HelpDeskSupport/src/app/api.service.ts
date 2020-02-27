import { Injectable } from '@angular/core';
import { Issue } from './model/issue.model';
import { environment } from 'src/environments/environment';
import { Supporter } from './model/supporter.model';
import { IssueNote } from './model/issueNote.model';
import { IssueComment } from './model/IssueComment.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  async getIssues() {
    const response = await fetch(environment.apiURL + 'Issue');
    return await response.json();
  }

}
