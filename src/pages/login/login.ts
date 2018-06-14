import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Login } from '../../models/login';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  login: Login
  private credential: Object = {
    email: '',
    password: ''
  };
  constructor(public navCtrl: NavController) {
    this.login = new Login();
  }
  validar(){
    console.log(this.login);
  }

}
