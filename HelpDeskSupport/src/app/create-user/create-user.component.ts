import { Supporter } from './../model/supporter.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  userName;
  userSurname1;
  userSurname2;
  email;
  isSupervisor = true;
  television = false;
  mobile = false;
  internet = false;
  password;

  constructor(public router: Router, public api: ApiService) { }

  ngOnInit() {
  }
  register() {

  }

}
