import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SQLiteObject } from '@ionic-native/sqlite';
import { DatabaseProvider } from '../database/database';
/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginProvider {

  constructor(private dbProvider: DatabaseProvider) { }

  public insert(login: Login) {
    return this.dbProvider.getDB()
      .then((db: SQLiteObject) => {
        let sql = 'insert into TB_LOGIN (TBL_IDENTIFICADOR, TBL_EMAIL, TBL_SENHA) values (?, ?, ?)';
        let data = [login.id, login.email, login.senha];
 
        return db.executeSql(sql, data)
          .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
  }

  public AtualizarSenha(login: Login) {
    return this.dbProvider.getDB()
      .then((db: SQLiteObject) => {
        let sql = 'update TB_LOGIN set TBL_SENHA = ? where TBL_EMAIL = ?';
        let data = [login.senha, login.email];
 
        return db.executeSql(sql, data)
          .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
  }

  public ValidarEntrada(login: Login) {
    return this.dbProvider.getDB()
      .then((db: SQLiteObject) => {
        let sql = 'Select * from TB_LOGIN where TBL_SENHA = ? and TBL_EMAIL = ?';
        let data = [login.senha, login.email];
 
        return db.executeSql(sql, data)
          .then((data: any) => {
            if (data.rows.length > 0) {
              let login: any[] = [];
              for (var i = 0; i < data.rows.length; i++) {
                var user = data.rows.item(i);
                user.push(login);
              }
              return user;
            } else {
              return [];
            }
          })
          .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
  }
}

export class Login {
  id: number;
  email: string;
  senha: string;
}