import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AcompanharNetoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-acompanhar-neto',
  templateUrl: 'acompanhar-neto.html',
})
export class AcompanharNetoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.AcompanharNeto();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcompanharNetoPage');
  }
  AcompanharNeto(){
    console.log('formaPagamento');
  }
}
