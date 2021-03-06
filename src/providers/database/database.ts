import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {

  constructor(private sqlite: SQLite) { }

  public getDB() {
    return this.sqlite.create({
      name: 'neto.db',
      location: 'default'
    });
  }


  public createDatabase() {
    return this.getDB()
      .then((db: SQLiteObject) => {
        this.createTables(db);
      })
      .catch(e => console.log(e));
  }

  private createTables(db: SQLiteObject) {
    db.sqlBatch([
      ['CREATE TABLE IF NOT EXISTS TB_AGENDA (TBA_IDENTIIFCADOR NUMERIC(10) PRIMARY KEY,TBI_IDENTIFICADOR NUMERIC(10),BN_IDENTIFICADOR NUMERIC(10),TBE_IDENTIFICAODR NUMERIC(10))']
      ['CREATE TABLE IF NOT EXISTS  TB_NETO (TBN_IDENTIFICADOR NUMERIC(10) PRIMARY KEY,TBN_NOME varchar(100),TBN_TELEFONE varchar(15),TBL_IDENTIFICADOR NUMERIC(10))']
      ['CREATE TABLE IF NOT EXISTS TB_EVENTO (TBE_IDENTIFICADOR NUMERIC(10) PRIMARY KEY,TBI_IDENTIFICADOR NUMERIC(10),TBE_DATAEVENTO datetime,TBE_LOCAL varchar(100),TBE_HORARIO datetime,TBE_TIPOEVENTO varchar(100))']
      ['CREATE TABLE IF NOT EXISTS  TB_LOGIN (TBL_IDENTIFICADOR NUMERIC(10) PRIMARY KEY,TBL_EMAIL varchar(100),TBL_SENHA varchar(32))']
      ['CREATE TABLE IF NOT EXISTS  TB_IDOSO (TBI_IDENTIFICADOR NUMERIC(10) PRIMARY KEY,TBL_IDENTIFICADOR NUMERIC(10),TBI_NOME varchar(100),TBI_TELEFONE varchar(15),TBI_DATANASCIMENTO datetime,FOREIGN KEY(TBL_IDENTIFICADOR) REFERENCES TB_LOGIN (TBL_IDENTIFICADOR))']
      ['CREATE TABLE IF NOT EXISTS  TB_PAGAMENTO (TBP_IDENTIFICADOR NUMERIC(10) PRIMARY KEY,TBP_CARTAO_CREDITP Número(16),TBP_DV Número(3),TBP_NOME_TITULAR varchar(100),TBP_DATA_VENCIMENTO datetime)']
      ['CREATE TABLE IF NOT EXISTS  TB_REL_PAGAMENTO_IDOSO (TBR_IDENTIFICADOR NUMERIC(10) PRIMARY KEY,TBI_IDENTIFICADOR NUMERIC(10),TBP_PAGAMENTO NUMERIC(10),FOREIGN KEY(TBI_IDENTIFICADOR) REFERENCES TB_IDOSO (TBI_IDENTIFICADOR),FOREIGN KEY(TBP_PAGAMENTO) REFERENCES TB_PAGAMENTO (TBP_IDENTIFICADOR))']
      ['ALTER TABLE TB_AGENDA ADD FOREIGN KEY(TBI_IDENTIFICADOR) REFERENCES TB_IDOSO (TBI_IDENTIFICADOR)']
      ['ALTER TABLE TB_AGENDA ADD FOREIGN KEY(TBN_IDENTIFICADOR) REFERENCES TB_NETO (TBN_IDENTIFICADOR)']
      ['ALTER TABLE TB_AGENDA ADD FOREIGN KEY(TBE_IDENTIFICAODR) REFERENCES TB_EVENTO (TBE_IDENTIFICADOR)']
      ['ALTER TABLE TB_EVENTO ADD FOREIGN KEY(TBI_IDENTIFICADOR) REFERENCES TB_EVENTO (TBE_IDENTIFICADOR)']
    ])
      .then(() => console.log('Tabelas criadas'))
      .catch(e => console.error('Erro ao criar as tabelas', e));
  }
}
