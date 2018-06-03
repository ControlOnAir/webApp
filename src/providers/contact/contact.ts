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
        newAuthor = new Author(datasnap.payload.val().name, datasnap.payload.val().number);
        newAuthor.id = datasnap.key;
        authors.Add(newAuthor);
      });
      return authors.ToArray();
    });
  }

  GetOneContact(number: string)  {
    return this.afDb.object<Author>(number).valueChanges();
  }

  AddContact(author: Author) {
    return this.afDb.object<Author>('0781431934/data/contacts/' + author.id + '/').set(author);
  }

  ModifyContact(author: Author) {
    return this.contactList.set(author.id, author);
  }

  DeleteContact(author: Author) {
    return this.contactList.remove(author.id);
  }
}
