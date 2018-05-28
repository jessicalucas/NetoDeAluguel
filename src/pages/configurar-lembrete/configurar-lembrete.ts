import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ConfigurarLembretePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-configurar-lembrete',
  templateUrl: 'configurar-lembrete.html',
})
export class ConfigurarLembretePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.ConfigurarLembrete();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfigurarLembretePage');
  }
  ConfigurarLembrete(){
    console.log('');
  }

}
