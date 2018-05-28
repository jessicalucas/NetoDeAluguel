import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FormaPagamentoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forma-pagamento',
  templateUrl: 'forma-pagamento.html',
})
export class FormaPagamentoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.formaPagamento();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormaPagamentoPage');
  }

  formaPagamento(){
    console.log('formaPagamento');
  }

}
