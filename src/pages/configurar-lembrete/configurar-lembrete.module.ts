import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfigurarLembretePage } from './configurar-lembrete';

@NgModule({
  declarations: [
    ConfigurarLembretePage,
  ],
  imports: [
    IonicPageModule.forChild(ConfigurarLembretePage),
  ],
})
export class ConfigurarLembretePageModule {}
