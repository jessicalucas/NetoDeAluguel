import { Component } from '@angular/core';
import { NavController, NavParams, ToastController  } from 'ionic-angular';
import { FormaPagamentoPage } from '../forma-pagamento/forma-pagamento';

/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cadastro();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }

  cadastro() {
    console.log('ionViewDidLoad CadastroPage');
  }

  // abrirnovatela()
  // {
  //   this.navCtrl.push(FormaPagamentoPage);
  // }
}
