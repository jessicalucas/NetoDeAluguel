import { Component } from '@angular/core';
<<<<<<< HEAD
import { NavController} from 'ionic-angular';
=======
import { NavController } from 'ionic-angular';
>>>>>>> incluindo

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
<<<<<<< HEAD
private credential: Object = {
email:'',
password:''
};
  constructor(public navCtrl: NavController) {

  }

login()
{
  console.log('Login...')
}
=======
  activeMenu: string;
  // private credential: Object = {
  // email:'',
  // password:''
  // };
  constructor(public navCtrl: NavController) {
    this.login();
  }

  login() {
    console.log('Login...');

    //Retira a Navegação Lateral
    // this.navCtrl.setRoot(LoginPage);
    // this.navCtrl.popToRoot();
  }
>>>>>>> incluindo
}
