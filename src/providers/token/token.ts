import { Subject } from 'rxjs/Subject';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class TokenProvider {


  public isWaitingForCheck: boolean;

  constructor(public afDb: AngularFireDatabase, public storage: Storage) {
    
  }

  public ValidateCredentials(phone: string, token: string) {
    var t = new Subject();
    this.afDb.object(phone + "/token/").valueChanges().subscribe(value => {
      if(value == token) {
        return this.storage.set("hasValidatedToken", true).then(x => {
          t.next(true);
          this.afDb.object(phone + "/token/").set("");
        })
      } else {
        //show an error message and let the user try again
        t.next(false);
      }
    });
    return t;
  }

}
