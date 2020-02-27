import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isSuppervisor = false;
  userName = "";
  password = "";

  constructor(private apiservice: ApiService, public router: Router, private _snackBar: MatSnackBar) {
  }

  ngOnInit() {
  }

  onIsSuppervisorChange() {
    this.isSuppervisor = (this.isSuppervisor === true) ? false : true;
    console.log(this.isSuppervisor);
  }

  async login() {

    this.router.navigate(['client']);
  }

  async register() {

  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
}