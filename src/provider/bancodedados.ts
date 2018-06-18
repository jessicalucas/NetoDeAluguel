import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

@Injectable()
export class DatabaseProvider {
    private db: SQLiteObject;
    private isOpen: boolean;

    constructor
        (
        public http: Http,
        public storage: SQLite

        ) {
            if (!this.isOpen) {
                this.storage = new SQLite();
                this.storage.create({ name: 'neto.db', location: 'default' }).then((db: SQLiteObject) => { this.db = db; this.db.executeSql("", []) })

            }
    }

}

