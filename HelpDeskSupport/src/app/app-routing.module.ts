import { IssueDetailsComponent } from './issue-details/issue-details.component';
import { ClientComponent } from './client/client.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CreateUserComponent } from './create-user/create-user.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'client', component: ClientComponent },
  { path: 'issueDetails', component: IssueDetailsComponent },
  { path: 'addMember', component: CreateUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
