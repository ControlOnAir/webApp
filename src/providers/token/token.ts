import { Subject } from 'rxjs/Subject';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class TokenProvider {


  public isWaitingForCheck: boolean;

  public UID: string;

  constructor(public afDb: AngularFireDatabase, public storage: Storage) {
    
  }

  public ValidateCredentials(phone: string, token: string) {
    var t = new Subject();
    this.afDb.object("users/" + token + "/").valueChanges().subscribe(value => {
      if(value != null) {
        this.UID = "users/" + token;
        t.next(true);
      } else t.next(false);
    });
    return t;
  }

}
