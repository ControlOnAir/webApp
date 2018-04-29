import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Author } from '../../models/Author';
import { AngularFireList, AngularFireAction, AngularFireDatabase } from 'angularfire2/database';
import { DataSnapshot } from '@firebase/database-types';

@Injectable()
export class ContactProvider {

  public contactList$: Observable<AngularFireAction<DataSnapshot>[]>
  private contactList: AngularFireList<Author>;

  constructor(public afDb: AngularFireDatabase) {
    this.contactList = afDb.list<Author>('0781431934/data/contacts');
    this.contactList$ = this.contactList.snapshotChanges();
  }

  GetOneContact<T>(number: string) {
    return this.afDb.object<T>(number).valueChanges();
  }
}
