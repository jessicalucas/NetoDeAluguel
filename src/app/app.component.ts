import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { FormaPagamentoPage } from '../pages/forma-pagamento/forma-pagamento';
import { SelecionarFormaPagamentoPage } from '../pages/selecionar-forma-pagamento/selecionar-forma-pagamento';
import { AgendamentoPage } from '../pages/agendamento/agendamento';
import { ConfigurarLembretePage } from '../pages/configurar-lembrete/configurar-lembrete';
import { AcompanharNetoPage } from '../pages/acompanhar-neto/acompanhar-neto';
import { ClassificarNetoPage } from '../pages/classificar-neto/classificar-neto';
// import { SignupPage } from '../pages/signup/signup';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    {
      this.initializeApp();

      // Barra lateral de navegação
      this.pages = [
        { title: 'Home', component: HomePage },
        { title: 'Login', component: LoginPage },
        { title: 'Cadastro', component: CadastroPage },
        { title: 'Forma de Pagamento', component: FormaPagamentoPage },
        { title: 'Selecionar Forma de Pagamento', component: SelecionarFormaPagamentoPage },
        { title: 'Agendamentos', component: AgendamentoPage },
        { title: 'Configuração dos Lembretes', component: ConfigurarLembretePage },
        { title: 'Acompanhar Neto', component: AcompanharNetoPage },
        { title: 'Dar nota', component: ClassificarNetoPage }
      ];

    }

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
