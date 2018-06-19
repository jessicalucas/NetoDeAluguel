import { Component } from '@angular/core';
import { NavController, NavParams, ToastController  } from 'ionic-angular';
// import { Login } from '../login/login.module';
import { LoginProvider, Login} from '../../providers/login/login';
import { CadastroPage } from '../cadastro/cadastro';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  model: Login

  constructor( public navCtrl: NavController, public navParams: NavParams,
    private toast: ToastController, private loginProvider: LoginProvider) {
    this.model = new Login();
  }

  abrirnovatela()
  {
    this.navCtrl.push(CadastroPage);
  }

  validar() {
    this.validarUsuario()
    .then(()=>
    {
      this.navCtrl.pop();
    })
    .catch(() => {
      this.toast.create({message: 'Usuário ou senha inválida!', duration:3000, position:'botton'}).present();
    })
  }

  novo() {
    this.criarNovoUsuario()
      .then(() => {
        this.toast.create({ message: 'Login realizado.', duration: 3000, position: 'botton' }).present();
        this.navCtrl.pop();
      })
      .catch(() => {
        this.toast.create({ message: 'Erro ao entrar.', duration: 3000, position: 'botton' }).present();
      });
  }
 
  private criarNovoUsuario() {
    if (this.model.id) {
      return this.loginProvider.AtualizarSenha(this.model);
    }    
    else {
      return this.loginProvider.insert(this.model);
    }
  }

  private validarUsuario()
  {
    if(this.model.senha && this.model.email){
      return this.loginProvider.ValidarEntrada(this.model);
    }
  }
}
