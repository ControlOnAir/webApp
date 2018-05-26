import { List } from 'linqts';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Author } from '../../models/Author';
import { AngularFireList, AngularFireAction, AngularFireDatabase } from 'angularfire2/database';
import { DataSnapshot } from '@firebase/database-types';

@Injectable()
export class ContactProvider {

  public contactList$: Observable<Author[]>;
  private contactList: AngularFireList<Author>;


  constructor(public afDb: AngularFireDatabase) {
    this.contactList = afDb.list<Author>('0781431934/data/contacts');
    this.contactList$ = this.contactList.snapshotChanges().map((data) => {
      let authors: List<Author> = new List<Author>();
      data.forEach(datasnap => {
        let newAuthor: Author;
        newAuthor = new Author(datasnap.payload["name"], datasnap.payload["number"]);
        newAuthor.id = datasnap.key;
        authors.Add(newAuthor);
      });
      return authors.ToArray();
    })
  }

  GetOneContact<T>(number: string) {
    return this.afDb.object<T>(number).valueChanges();
  }

  AddContact(num: string,name: string) {
    return this.afDb.object('0781431934/data/contacts/' + num + '/').set({name: name});
  }
}
