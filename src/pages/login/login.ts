import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  private credential: Object = {
    email: '',
    password: ''
  };
  constructor(public navCtrl: NavController) {

  }

  login() {
    console.log('Login...')
  }
}
