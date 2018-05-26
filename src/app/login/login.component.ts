import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user = {};
  public newUser = {};
  public registerForm: boolean;
  public loginFormEnable: boolean = true;
  public errMessage: string;
  constructor(public sharedService: SharedService, public router: Router) { }

  ngOnInit() {
  }
  register() {
    this.registerForm = true;
    this.loginFormEnable = false;
  }
  loginEnable() {
    this.loginFormEnable = true;
    this.registerForm = false;
  }
  login(values) {
    console.log(values)
    if (localStorage.getItem('userDetails')) {
      var userDetails = JSON.parse(localStorage.getItem('userDetails'));
      if (values.userName == userDetails.userName) {
        if (values.password == userDetails.password) {
          this.sharedService.IsUserLoggedIn.next(values.userName);
          console.log(' Successfull login password')
          this.router.navigate(['/user']);
        } else {
          console.log('User Name and password is not Matching')
          this.errMessage = 'User Name and password is not Matching';
        }
      } else {
        console.log('Enter Valid User Name');
        this.errMessage = 'Enter Valid User Name';
      }
    }
    console.log(JSON.parse(localStorage.getItem('userDetails')));
  }
  regiserNewuser(value) {
    localStorage.setItem('userDetails', JSON.stringify(value));
    this.loginEnable()
    console.log(value)
  }

}
