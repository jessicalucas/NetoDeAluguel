import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SelecionarFormaPagamentoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-selecionar-forma-pagamento',
  templateUrl: 'selecionar-forma-pagamento.html',
})
export class SelecionarFormaPagamentoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
this.SelecionarFormaPagamento();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelecionarFormaPagamentoPage');
  }
  SelecionarFormaPagamento(){
    console.log('');
  }
}
