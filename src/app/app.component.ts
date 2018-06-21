import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Button } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { FormaPagamentoPage } from '../pages/forma-pagamento/forma-pagamento';
import { SelecionarFormaPagamentoPage } from '../pages/selecionar-forma-pagamento/selecionar-forma-pagamento';
import { AgendamentoPage } from '../pages/agendamento/agendamento';
// import { ConfigurarLembretePage } from '../pages/configurar-lembrete/configurar-lembrete';
// import { AcompanharNetoPage } from '../pages/acompanhar-neto/acompanhar-neto';
// import { ClassificarNetoPage } from '../pages/classificar-neto/classificar-neto';
import { DatabaseProvider } from '../providers/database/database';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public dbProvider: DatabaseProvider) {
    {
      //this.initializeApp();
      this.platform.ready().then(() => {
        this.criaBanco();
      });

      // Barra lateral de navegação
      this.pages = [
        // { title: 'Home', component: HomePage },
      
        { title: 'Cadastro', component: CadastroPage },
        { title: 'Forma de Pagamento', component: FormaPagamentoPage },
        // { title: 'Selecionar Forma de Pagamento', component: SelecionarFormaPagamentoPage },
        { title: 'Agendamentos', component: AgendamentoPage },
        // { title: 'Configuração dos Lembretes', component: ConfigurarLembretePage },
        // { title: 'Acompanhar Neto', component: AcompanharNetoPage },
        // { title: 'Dar nota', component: ClassificarNetoPage }
        { title: 'Sair', component: LoginPage },
      ];

    }

  }

  sair()
  {this.platform.exitApp()}

  criaBanco() {

    this.statusBar.styleDefault();
    this.dbProvider.createDatabase()
      .then(() => {
        // fechando a SplashScreen somente quando o banco for criado
        // this.openPage(this.splashScreen);
      })
      .catch(() => {
        // ou se houver erro na criação do banco
        // this.openPage(this.splashScreen);
      });
  }

  // private openPage(navCtrl: Nav) {
  //   this.rootPage = navCtrl;
  // }

  openPage(page) {
    this.nav.setRoot(page.component);
  }

}
