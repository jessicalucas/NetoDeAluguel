import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, LOCALE_ID } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { FormsModule} from '@angular/forms';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { SQLite } from '@ionic-native/sqlite'


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
import { DatabaseProvider } from '../providers/database/database';
import { LoginProvider } from '../providers/login/login';

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
    FormsModule
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
    {provide: LOCALE_ID, useValue: 'pt-BR'},
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SQLite,
    DatabaseProvider,
    LoginProvider
  ]
})
export class AppModule { }
