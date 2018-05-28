import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
//import { SignupPage } from '../pages/signup/signup';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SignupPage } from '../pages/signup/signup';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { FormaPagamentoPage } from '../pages/forma-pagamento/forma-pagamento';
import { ConfigurarLembretePage } from '../pages/configurar-lembrete/configurar-lembrete';
import { AcompanharNetoPage } from '../pages/acompanhar-neto/acompanhar-neto';
import { SelecionarFormaPagamentoPage } from '../pages/selecionar-forma-pagamento/selecionar-forma-pagamento';
import { AgendamentoPage } from '../pages/agendamento/agendamento';
import { ClassificarNetoPage } from '../pages/classificar-neto/classificar-neto';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    SignupPage,
    CadastroPage,
    FormaPagamentoPage,
    SelecionarFormaPagamentoPage,
    AgendamentoPage,
    ConfigurarLembretePage,
    AcompanharNetoPage,
    ClassificarNetoPage,
    
    // SignupPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    SignupPage,
    CadastroPage,
    FormaPagamentoPage,
    SelecionarFormaPagamentoPage,
    AgendamentoPage,
    ConfigurarLembretePage,
    AcompanharNetoPage,
    ClassificarNetoPage,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
