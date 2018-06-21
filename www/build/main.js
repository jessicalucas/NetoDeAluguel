webpackJsonp([6],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DatabaseProvider = /** @class */ (function () {
    function DatabaseProvider(sqlite) {
        this.sqlite = sqlite;
    }
    DatabaseProvider.prototype.getDB = function () {
        return this.sqlite.create({
            name: 'neto.db',
            location: 'default'
        });
    };
    DatabaseProvider.prototype.createDatabase = function () {
        var _this = this;
        return this.getDB()
            .then(function (db) {
            _this.createTables(db);
        })
            .catch(function (e) { return console.log(e); });
    };
    DatabaseProvider.prototype.createTables = function (db) {
        db.sqlBatch([
            ['CREATE TABLE IF NOT EXISTS TB_AGENDA (TBA_IDENTIIFCADOR NUMERIC(10) PRIMARY KEY,TBI_IDENTIFICADOR NUMERIC(10),BN_IDENTIFICADOR NUMERIC(10),TBE_IDENTIFICAODR NUMERIC(10))']['CREATE TABLE IF NOT EXISTS  TB_NETO (TBN_IDENTIFICADOR NUMERIC(10) PRIMARY KEY,TBN_NOME varchar(100),TBN_TELEFONE varchar(15),TBL_IDENTIFICADOR NUMERIC(10))']['CREATE TABLE IF NOT EXISTS TB_EVENTO (TBE_IDENTIFICADOR NUMERIC(10) PRIMARY KEY,TBI_IDENTIFICADOR NUMERIC(10),TBE_DATAEVENTO datetime,TBE_LOCAL varchar(100),TBE_HORARIO datetime,TBE_TIPOEVENTO varchar(100))']['CREATE TABLE IF NOT EXISTS  TB_LOGIN (TBL_IDENTIFICADOR NUMERIC(10) PRIMARY KEY,TBL_EMAIL varchar(100),TBL_SENHA varchar(32))']['CREATE TABLE IF NOT EXISTS  TB_IDOSO (TBI_IDENTIFICADOR NUMERIC(10) PRIMARY KEY,TBL_IDENTIFICADOR NUMERIC(10),TBI_NOME varchar(100),TBI_TELEFONE varchar(15),TBI_DATANASCIMENTO datetime,FOREIGN KEY(TBL_IDENTIFICADOR) REFERENCES TB_LOGIN (TBL_IDENTIFICADOR))']['CREATE TABLE IF NOT EXISTS  TB_PAGAMENTO (TBP_IDENTIFICADOR NUMERIC(10) PRIMARY KEY,TBP_CARTAO_CREDITP Número(16),TBP_DV Número(3),TBP_NOME_TITULAR varchar(100),TBP_DATA_VENCIMENTO datetime)']['CREATE TABLE IF NOT EXISTS  TB_REL_PAGAMENTO_IDOSO (TBR_IDENTIFICADOR NUMERIC(10) PRIMARY KEY,TBI_IDENTIFICADOR NUMERIC(10),TBP_PAGAMENTO NUMERIC(10),FOREIGN KEY(TBI_IDENTIFICADOR) REFERENCES TB_IDOSO (TBI_IDENTIFICADOR),FOREIGN KEY(TBP_PAGAMENTO) REFERENCES TB_PAGAMENTO (TBP_IDENTIFICADOR))']['ALTER TABLE TB_AGENDA ADD FOREIGN KEY(TBI_IDENTIFICADOR) REFERENCES TB_IDOSO (TBI_IDENTIFICADOR)']['ALTER TABLE TB_AGENDA ADD FOREIGN KEY(TBN_IDENTIFICADOR) REFERENCES TB_NETO (TBN_IDENTIFICADOR)']['ALTER TABLE TB_AGENDA ADD FOREIGN KEY(TBE_IDENTIFICAODR) REFERENCES TB_EVENTO (TBE_IDENTIFICADOR)']['ALTER TABLE TB_EVENTO ADD FOREIGN KEY(TBI_IDENTIFICADOR) REFERENCES TB_EVENTO (TBE_IDENTIFICADOR)']
        ])
            .then(function () { return console.log('Tabelas criadas'); })
            .catch(function (e) { return console.error('Erro ao criar as tabelas', e); });
    };
    DatabaseProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__["a" /* SQLite */]])
    ], DatabaseProvider);
    return DatabaseProvider;
}());

//# sourceMappingURL=database.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormaPagamentoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the FormaPagamentoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FormaPagamentoPage = /** @class */ (function () {
    function FormaPagamentoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formaPagamento();
    }
    FormaPagamentoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FormaPagamentoPage');
    };
    FormaPagamentoPage.prototype.formaPagamento = function () {
        console.log('formaPagamento');
    };
    FormaPagamentoPage.prototype.monthfilter = function () {
        // console.log(this.filtermonthwise);
    };
    FormaPagamentoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-forma-pagamento',template:/*ion-inline-start:"C:\Users\jessica\Documents\IONIC\appNeto\src\pages\forma-pagamento\forma-pagamento.html"*/'<!--\n\n  Generated template for the FormaPagamentoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n      <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n    <ion-title>Formas de Pagamento</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-list id="cadastroLista">\n\n        <ion-item>\n\n          <ion-label stacked >Nome do titular</ion-label>\n\n          <ion-input type="text" placeholder="Nome do titular" clearInput></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label stacked >Número Cartão</ion-label>\n\n          <ion-input type="text" placeholder="XXXX.XXXX.XXXX.XXXX" maxlength="19" clearInput></ion-input>   \n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label stacked >Data de Validade</ion-label>\n\n          <ion-input type="text" placeholder="MM/AAAA" maxlength="7" clearInput></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label stacked>Bandeira</ion-label>\n\n          <ion-input type="text" placeholder="Bandeira" clearInput></ion-input>\n\n        </ion-item>\n\n      \n\n        <ion-item>\n\n          <ion-label stacked>Dígito Verificador</ion-label>\n\n          <ion-input type="text" placeholder="123" maxlength="3" clearInput></ion-input>\n\n        </ion-item>\n\n\n\n        <!-- <ion-item>\n\n            <ion-label>Month</ion-label>\n\n            <ion-select [(ngModel)]="filtermonthwise" interface="action-sheet" (ionChange)="monthfilter(filtermonthwise);">\n\n              <ion-option value="1">January</ion-option>\n\n              <ion-option value="2">February</ion-option>\n\n              <ion-option value="3">March</ion-option>\n\n              <ion-option value="4">April</ion-option>\n\n              <ion-option value="5">May</ion-option>\n\n              <ion-option value="6">June</ion-option>\n\n              <ion-option value="7">July</ion-option>\n\n              <ion-option value="8">August </ion-option>\n\n              <ion-option value="9">September</ion-option>\n\n              <ion-option value="10">October </ion-option>\n\n              <ion-option value="11">November </ion-option>\n\n              <ion-option value="12">December </ion-option>\n\n      \n\n            </ion-select>\n\n    </ion-item> -->\n\n\n\n     \n\n    \n\n    \n\n      </ion-list>\n\n      <button ion-button block large color="dark">SALVAR</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\jessica\Documents\IONIC\appNeto\src\pages\forma-pagamento\forma-pagamento.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], FormaPagamentoPage);
    return FormaPagamentoPage;
}());

//# sourceMappingURL=forma-pagamento.js.map

/***/ }),

/***/ 111:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/acompanhar-neto/acompanhar-neto.module": [
		282,
		5
	],
	"../pages/agendamento/agendamento.module": [
		283,
		4
	],
	"../pages/classificar-neto/classificar-neto.module": [
		284,
		3
	],
	"../pages/configurar-lembrete/configurar-lembrete.module": [
		285,
		2
	],
	"../pages/forma-pagamento/forma-pagamento.module": [
		286,
		1
	],
	"../pages/selecionar-forma-pagamento/selecionar-forma-pagamento.module": [
		287,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 152;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_login_login__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { Login } from '../login/login.module';


var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, toast, loginProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.loginProvider = loginProvider;
        this.model = new __WEBPACK_IMPORTED_MODULE_2__providers_login_login__["a" /* Login */]();
    }
    LoginPage.prototype.abrirnovatela = function () {
        // this.navCtrl.pop();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    LoginPage.prototype.validar = function () {
        var _this = this;
        this.validarUsuario()
            .then(function () {
            _this.navCtrl.pop();
        })
            .catch(function () {
            _this.toast.create({ message: 'Usuário ou senha inválida!', duration: 3000, position: 'botton' }).present();
        });
    };
    LoginPage.prototype.novo = function () {
        var _this = this;
        this.criarNovoUsuario()
            .then(function () {
            _this.toast.create({ message: 'Login realizado.', duration: 3000, position: 'botton' }).present();
            _this.navCtrl.pop();
        })
            .catch(function () {
            _this.toast.create({ message: 'Erro ao entrar.', duration: 3000, position: 'botton' }).present();
        });
    };
    LoginPage.prototype.criarNovoUsuario = function () {
        if (this.model.id) {
            return this.loginProvider.AtualizarSenha(this.model);
        }
        else {
            return this.loginProvider.insert(this.model);
        }
    };
    LoginPage.prototype.validarUsuario = function () {
        if (this.model.senha && this.model.email) {
            return this.loginProvider.ValidarEntrada(this.model);
        }
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\jessica\Documents\IONIC\appNeto\src\pages\login\login.html"*/'<br>\n\n<ion-header>\n\n  <!-- <ion-navbar color="light" hide-nav-bar="false">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Login</ion-title>\n\n  </ion-navbar> -->\n\n  <br>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <h1>Neto de Aluguel</h1>\n\n        <div class="circle">\n\n    <img src="assets/imgs/neto01.png">\n\n  </div>\n\n <h3>Entre ou crie sua conta</h3>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-label stacked large>E-mail</ion-label>\n\n      <ion-input type="email" [(ngModel)]="model.email" placeholder="joao@email.com"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label stacked large>Senha</ion-label>\n\n      <ion-input type="password" [(ngModel)]="model.senha" placeholder="Insira a Senha"></ion-input>\n\n    </ion-item>\n\n    <button ion-button block large color="dark" (click)="abrirnovatela();" >ENTRAR</button>\n\n    <button ion-button block large color="aposclicar" (click)="abrirnovatela();">CADASTRAR</button>\n\n    <!-- <button ion-button (click)="validar();">Salvar</button>\n\n    <button ion-button (click)="novo();">Novo</button> (click)="showToastWithCloseButton()"-->\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\jessica\Documents\IONIC\appNeto\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_login_login__["b" /* LoginProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LoginProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__database_database__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var LoginProvider = /** @class */ (function () {
    function LoginProvider(dbProvider) {
        this.dbProvider = dbProvider;
    }
    LoginProvider.prototype.insert = function (login) {
        return this.dbProvider.getDB()
            .then(function (db) {
            var sql = 'insert into TB_LOGIN (TBL_IDENTIFICADOR, TBL_EMAIL, TBL_SENHA) values (?, ?, ?)';
            var data = [login.id, login.email, login.senha];
            return db.executeSql(sql, data)
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error(e); });
    };
    LoginProvider.prototype.AtualizarSenha = function (login) {
        return this.dbProvider.getDB()
            .then(function (db) {
            var sql = 'update TB_LOGIN set TBL_SENHA = ? where TBL_EMAIL = ?';
            var data = [login.senha, login.email];
            return db.executeSql(sql, data)
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error(e); });
    };
    LoginProvider.prototype.ValidarEntrada = function (login) {
        return this.dbProvider.getDB()
            .then(function (db) {
            var sql = 'Select * from TB_LOGIN where TBL_SENHA = ? and TBL_EMAIL = ?';
            var data = [login.senha, login.email];
            return db.executeSql(sql, data)
                .then(function (data) {
                if (data.rows.length > 0) {
                    var login_1 = [];
                    for (var i = 0; i < data.rows.length; i++) {
                        var user = data.rows.item(i);
                        user.push(login_1);
                    }
                    return user;
                }
                else {
                    return [];
                }
            })
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error(e); });
    };
    LoginProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__database_database__["a" /* DatabaseProvider */]])
    ], LoginProvider);
    return LoginProvider;
}());

var Login = /** @class */ (function () {
    function Login() {
    }
    return Login;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\jessica\Documents\IONIC\appNeto\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>BEM VINDO!</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Seja bem vindo ao neto de aluguel!</h3>\n\n  <p>\n   Aqui você pode encontrar um ajudante para algumas tarefas do seu dia-a-dia.\n  </p>\n\n  <img src="assets/imgs/neto01.png">\n  \n  <button ion-button secondary menuToggle color="aposclicar"> Menu</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\jessica\Documents\IONIC\appNeto\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CadastroPage = /** @class */ (function () {
    function CadastroPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cadastro();
    }
    CadastroPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CadastroPage');
    };
    CadastroPage.prototype.cadastro = function () {
        console.log('ionViewDidLoad CadastroPage');
    };
    CadastroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cadastro',template:/*ion-inline-start:"C:\Users\jessica\Documents\IONIC\appNeto\src\pages\cadastro\cadastro.html"*/'<!--\n\n  Generated template for the CadastroPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n      <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n    <ion-title>Cadastro</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <!-- <form id="cadastroForm" class="list"> -->\n\n  <ion-list id="cadastroLista">\n\n    <ion-item>\n\n        <ion-label stacked >Nome</ion-label>\n\n      <ion-input type="text" placeholder="Nome" clearInput></ion-input>\n\n    </ion-item>\n\n  \n\n    <ion-item>\n\n        <ion-label stacked >Telefone</ion-label>\n\n      <ion-input type="text" placeholder="(DDD)99999-9999" maxlength="16" clearInput></ion-input>\n\n    </ion-item>\n\n  </ion-list>\n\n  <button ion-button block large color="dark">SALVAR</button>\n\n  <!-- <button ion-button>Confirmar</button> -->\n\n  <!-- </form> -->\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\jessica\Documents\IONIC\appNeto\src\pages\cadastro\cadastro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], CadastroPage);
    return CadastroPage;
}());

//# sourceMappingURL=cadastro.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AcompanharNetoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AcompanharNetoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AcompanharNetoPage = /** @class */ (function () {
    function AcompanharNetoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.AcompanharNeto();
    }
    AcompanharNetoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AcompanharNetoPage');
    };
    AcompanharNetoPage.prototype.AcompanharNeto = function () {
        console.log('formaPagamento');
    };
    AcompanharNetoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-acompanhar-neto',template:/*ion-inline-start:"C:\Users\jessica\Documents\IONIC\appNeto\src\pages\acompanhar-neto\acompanhar-neto.html"*/'<!--\n\n  Generated template for the AcompanharNetoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n      <button ion-button menuToggle>\n\n          <ion-icon name="Menu"></ion-icon>\n\n        </button>\n\n    <ion-title>acompanharNeto</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-list id="cadastroLista">\n\n        <ion-item>\n\n          <ion-input type="text" placeholder="Nome" clearInput></ion-input>\n\n        </ion-item>\n\n      \n\n        <ion-item>\n\n          <ion-input type="number" placeholder="Telefone" clearInput></ion-input>\n\n        </ion-item>\n\n    \n\n        <ion-item>\n\n          <ion-input type="text" placeholder="Sexo" clearInput></ion-input>\n\n        </ion-item>\n\n    \n\n        <ion-item>\n\n          <ion-input type="number" placeholder="Data Nascimento" clearInput></ion-input>\n\n        </ion-item>\n\n      </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\jessica\Documents\IONIC\appNeto\src\pages\acompanhar-neto\acompanhar-neto.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AcompanharNetoPage);
    return AcompanharNetoPage;
}());

//# sourceMappingURL=acompanhar-neto.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgendamentoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AgendamentoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AgendamentoPage = /** @class */ (function () {
    function AgendamentoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.agendamento();
    }
    AgendamentoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AgendamentoPage');
    };
    AgendamentoPage.prototype.agendamento = function () {
        console.log('formaPagamento');
    };
    AgendamentoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-agendamento',template:/*ion-inline-start:"C:\Users\jessica\Documents\IONIC\appNeto\src\pages\agendamento\agendamento.html"*/'<!--\n\n  Generated template for the AgendamentoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n      <button ion-button menuToggle>\n\n          <ion-icon name="Menu"></ion-icon>\n\n        </button>\n\n    <ion-title>agendamento</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-list id="cadastroLista">\n\n        <ion-item>\n\n          <ion-input type="text" placeholder="Nome" clearInput></ion-input>\n\n        </ion-item>\n\n      \n\n        <ion-item>\n\n          <ion-input type="number" placeholder="Telefone" clearInput></ion-input>\n\n        </ion-item>\n\n    \n\n        <ion-item>\n\n          <ion-input type="text" placeholder="Sexo" clearInput></ion-input>\n\n        </ion-item>\n\n    \n\n        <ion-item>\n\n          <ion-input type="number" placeholder="Data Nascimento" clearInput></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label>Start Time</ion-label>\n\n          <ion-datetime displayFormat="h:mm A" pickerFormat="h mm A" [(ngModel)]="event.timeStarts"></ion-datetime>\n\n        </ion-item>\n\n      </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\jessica\Documents\IONIC\appNeto\src\pages\agendamento\agendamento.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AgendamentoPage);
    return AgendamentoPage;
}());

//# sourceMappingURL=agendamento.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassificarNetoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ClassificarNetoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ClassificarNetoPage = /** @class */ (function () {
    function ClassificarNetoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ClassificarNetoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ClassificarNetoPage');
    };
    ClassificarNetoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-classificar-neto',template:/*ion-inline-start:"C:\Users\jessica\Documents\IONIC\appNeto\src\pages\classificar-neto\classificar-neto.html"*/'<!--\n\n  Generated template for the ClassificarNetoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n      <button ion-button menuToggle>\n\n          <ion-icon name="Menu"></ion-icon>\n\n        </button>\n\n    <ion-title>classificarNeto</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-list id="cadastroLista">\n\n        <ion-item>\n\n          <ion-input type="text" placeholder="Nome" clearInput></ion-input>\n\n        </ion-item>\n\n      \n\n        <ion-item>\n\n          <ion-input type="number" placeholder="Telefone" clearInput></ion-input>\n\n        </ion-item>\n\n    \n\n        <ion-item>\n\n          <ion-input type="text" placeholder="Sexo" clearInput></ion-input>\n\n        </ion-item>\n\n    \n\n        <ion-item>\n\n          <ion-input type="number" placeholder="Data Nascimento" clearInput></ion-input>\n\n        </ion-item>\n\n      </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\jessica\Documents\IONIC\appNeto\src\pages\classificar-neto\classificar-neto.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ClassificarNetoPage);
    return ClassificarNetoPage;
}());

//# sourceMappingURL=classificar-neto.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigurarLembretePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ConfigurarLembretePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConfigurarLembretePage = /** @class */ (function () {
    function ConfigurarLembretePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ConfigurarLembrete();
    }
    ConfigurarLembretePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConfigurarLembretePage');
    };
    ConfigurarLembretePage.prototype.ConfigurarLembrete = function () {
        console.log('');
    };
    ConfigurarLembretePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-configurar-lembrete',template:/*ion-inline-start:"C:\Users\jessica\Documents\IONIC\appNeto\src\pages\configurar-lembrete\configurar-lembrete.html"*/'<!--\n\n  Generated template for the ConfigurarLembretePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n      <button ion-button menuToggle>\n\n          <ion-icon name="Menu"></ion-icon>\n\n        </button>\n\n    <ion-title>configurarLembrete</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-list id="cadastroLista">\n\n        <ion-item>\n\n          <ion-input type="text" placeholder="Nome" clearInput></ion-input>\n\n        </ion-item>\n\n      \n\n        <ion-item>\n\n          <ion-input type="number" placeholder="Telefone" clearInput></ion-input>\n\n        </ion-item>\n\n    \n\n        <ion-item>\n\n          <ion-input type="text" placeholder="Sexo" clearInput></ion-input>\n\n        </ion-item>\n\n    \n\n        <ion-item>\n\n          <ion-input type="number" placeholder="Data Nascimento" clearInput></ion-input>\n\n        </ion-item>\n\n      </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\jessica\Documents\IONIC\appNeto\src\pages\configurar-lembrete\configurar-lembrete.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ConfigurarLembretePage);
    return ConfigurarLembretePage;
}());

//# sourceMappingURL=configurar-lembrete.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelecionarFormaPagamentoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SelecionarFormaPagamentoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SelecionarFormaPagamentoPage = /** @class */ (function () {
    function SelecionarFormaPagamentoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.SelecionarFormaPagamento();
    }
    SelecionarFormaPagamentoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SelecionarFormaPagamentoPage');
    };
    SelecionarFormaPagamentoPage.prototype.SelecionarFormaPagamento = function () {
        console.log('');
    };
    SelecionarFormaPagamentoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-selecionar-forma-pagamento',template:/*ion-inline-start:"C:\Users\jessica\Documents\IONIC\appNeto\src\pages\selecionar-forma-pagamento\selecionar-forma-pagamento.html"*/'<!--\n\n  Generated template for the SelecionarFormaPagamentoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n      <button ion-button menuToggle>\n\n          <ion-icon name="Menu"></ion-icon>\n\n        </button>\n\n    <ion-title>selecionarFormaPagamento</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-list id="cadastroLista">\n\n        <ion-item>\n\n          <ion-input type="text" placeholder="Nome" clearInput></ion-input>\n\n        </ion-item>\n\n      \n\n        <ion-item>\n\n          <ion-input type="number" placeholder="Telefone" clearInput></ion-input>\n\n        </ion-item>\n\n    \n\n        <ion-item>\n\n          <ion-input type="text" placeholder="Sexo" clearInput></ion-input>\n\n        </ion-item>\n\n    \n\n        <ion-item>\n\n          <ion-input type="number" placeholder="Data Nascimento" clearInput></ion-input>\n\n        </ion-item>\n\n      </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\jessica\Documents\IONIC\appNeto\src\pages\selecionar-forma-pagamento\selecionar-forma-pagamento.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], SelecionarFormaPagamentoPage);
    return SelecionarFormaPagamentoPage;
}());

//# sourceMappingURL=selecionar-forma-pagamento.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(228);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_sqlite__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_cadastro_cadastro__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_forma_pagamento_forma_pagamento__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_configurar_lembrete_configurar_lembrete__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_acompanhar_neto_acompanhar_neto__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_selecionar_forma_pagamento_selecionar_forma_pagamento__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_agendamento_agendamento__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_classificar_neto_classificar_neto__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_database_database__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_login_login__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_cadastro_cadastro__["a" /* CadastroPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_forma_pagamento_forma_pagamento__["a" /* FormaPagamentoPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_selecionar_forma_pagamento_selecionar_forma_pagamento__["a" /* SelecionarFormaPagamentoPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_agendamento_agendamento__["a" /* AgendamentoPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_configurar_lembrete_configurar_lembrete__["a" /* ConfigurarLembretePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_acompanhar_neto_acompanhar_neto__["a" /* AcompanharNetoPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_classificar_neto_classificar_neto__["a" /* ClassificarNetoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/acompanhar-neto/acompanhar-neto.module#AcompanharNetoPageModule', name: 'AcompanharNetoPage', segment: 'acompanhar-neto', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/agendamento/agendamento.module#AgendamentoPageModule', name: 'AgendamentoPage', segment: 'agendamento', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/classificar-neto/classificar-neto.module#ClassificarNetoPageModule', name: 'ClassificarNetoPage', segment: 'classificar-neto', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/configurar-lembrete/configurar-lembrete.module#ConfigurarLembretePageModule', name: 'ConfigurarLembretePage', segment: 'configurar-lembrete', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forma-pagamento/forma-pagamento.module#FormaPagamentoPageModule', name: 'FormaPagamentoPage', segment: 'forma-pagamento', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/selecionar-forma-pagamento/selecionar-forma-pagamento.module#SelecionarFormaPagamentoPageModule', name: 'SelecionarFormaPagamentoPage', segment: 'selecionar-forma-pagamento', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_cadastro_cadastro__["a" /* CadastroPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_forma_pagamento_forma_pagamento__["a" /* FormaPagamentoPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_selecionar_forma_pagamento_selecionar_forma_pagamento__["a" /* SelecionarFormaPagamentoPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_agendamento_agendamento__["a" /* AgendamentoPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_configurar_lembrete_configurar_lembrete__["a" /* ConfigurarLembretePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_acompanhar_neto_acompanhar_neto__["a" /* AcompanharNetoPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_classificar_neto_classificar_neto__["a" /* ClassificarNetoPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["G" /* LOCALE_ID */], useValue: 'pt-BR' },
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_sqlite__["a" /* SQLite */],
                __WEBPACK_IMPORTED_MODULE_19__providers_database_database__["a" /* DatabaseProvider */],
                __WEBPACK_IMPORTED_MODULE_20__providers_login_login__["b" /* LoginProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_cadastro_cadastro__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_forma_pagamento_forma_pagamento__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_database_database__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { HomePage } from '../pages/home/home';



// import { ConfigurarLembretePage } from '../pages/configurar-lembrete/configurar-lembrete';
// import { AcompanharNetoPage } from '../pages/acompanhar-neto/acompanhar-neto';
// import { ClassificarNetoPage } from '../pages/classificar-neto/classificar-neto';

var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, dbProvider) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.dbProvider = dbProvider;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        {
            //this.initializeApp();
            this.platform.ready().then(function () {
                _this.criaBanco();
            });
            // Barra lateral de navegação
            this.pages = [
                // { title: 'Home', component: HomePage },
                { title: 'Login', component: __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */] },
                { title: 'Cadastro', component: __WEBPACK_IMPORTED_MODULE_5__pages_cadastro_cadastro__["a" /* CadastroPage */] },
                { title: 'Forma de Pagamento', component: __WEBPACK_IMPORTED_MODULE_6__pages_forma_pagamento_forma_pagamento__["a" /* FormaPagamentoPage */] },
            ];
        }
    }
    MyApp.prototype.sair = function () { this.platform.exitApp(); };
    MyApp.prototype.criaBanco = function () {
        this.statusBar.styleDefault();
        this.dbProvider.createDatabase()
            .then(function () {
            // fechando a SplashScreen somente quando o banco for criado
            // this.openPage(this.splashScreen);
        })
            .catch(function () {
            // ou se houver erro na criação do banco
            // this.openPage(this.splashScreen);
        });
    };
    // private openPage(navCtrl: Nav) {
    //   this.rootPage = navCtrl;
    // }
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\jessica\Documents\IONIC\appNeto\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<!-- <ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav> -->\n\n<ion-nav #content [root]="rootPage"></ion-nav>'/*ion-inline-end:"C:\Users\jessica\Documents\IONIC\appNeto\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_7__providers_database_database__["a" /* DatabaseProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\Users\jessica\Documents\IONIC\appNeto\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\jessica\Documents\IONIC\appNeto\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-Signup',template:/*ion-inline-start:"C:\Users\jessica\Documents\IONIC\appNeto\src\pages\signup\Signup.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="Signup"></ion-icon>\n    </button>\n    <ion-title>Cadastro</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding="true" class="manual-ios-statusbar-padding">\n  <div class="spacer" style="width: 299.531px; height: 39.9844px;"></div>\n  <form id="signup-form2" class="list">\n    <ion-list id="signup-list2">\n      <label class="item item-input" id="signup-input3" name="NOME">\n        <span class="input-label">Nome</span>\n        <input type="text" placeholder="Nome">\n      </label>\n      <label class="item item-input" id="signup-input4" name="EMAIL">\n        <span class="input-label">Email</span>\n        <input type="email" placeholder="Email">\n      </label>\n      <label class="item item-input" id="signup-input5" name="SENHA">\n        <span class="input-label">Senha</span>\n        <input type="password" placeholder="Senha">\n      </label>\n    </ion-list>\n  </form>\n  <form id="signup-form4" class="list">\n    <ion-toggle toggle-class="toggle-positive" id="signup-toggle2" name="Idoso">Idoso</ion-toggle>\n    <ion-toggle toggle-class="toggle-positive" id="signup-toggle8" name="neto">Neto</ion-toggle>\n    <ion-toggle toggle-class="toggle-positive" id="signup-toggle9" name="Idoso">Responsável</ion-toggle>\n  </form>\n\n  <!-- <a ui-sref="cadstro()" id="signup-button9" class="button button-dark button-block">Cadastrar</a>\n      <a ui-sref="login()" id="signup-button12" class="button button-dark button-block button-outline">Já possui cadastro?</a> -->\n</ion-content>'/*ion-inline-end:"C:\Users\jessica\Documents\IONIC\appNeto\src\pages\signup\Signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ })

},[205]);
//# sourceMappingURL=main.js.map