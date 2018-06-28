import { List } from 'linqts';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Contact } from '../../models/Contact';
import { AngularFireList, AngularFireAction, AngularFireDatabase } from 'angularfire2/database';
import { DataSnapshot } from '@firebase/database-types';
import { TokenProvider } from '../token/token';

@Injectable()
export class ContactProvider {

  public contactList$: Observable<Contact[]>;
  private contactList: AngularFireList<Contact>;


  constructor(public afDb: AngularFireDatabase, public tokenP: TokenProvider) {
    this.contactList = afDb.list<Contact>(tokenP.UID + '/contacts');
    this.contactList$ = this.contactList.snapshotChanges().map((data) => {
      console.log(data);
      let authors: List<Contact> = new List<Contact>();
      data.forEach(datasnap => {
        let newAuthor: Contact;
        newAuthor = new Contact(datasnap.payload.val().name, datasnap.payload.val().number);
        newAuthor.id = datasnap.key;
        authors.Add(newAuthor);
      });
      return authors.ToArray();
    });
  }

  GetOneContact(number: string)  {
    return this.afDb.object<Contact>(number).valueChanges();
  }

  AddContact(author: Contact) {
    return this.afDb.object<Contact>(this.tokenP.UID + '/contacts/' + author.id + '/').set(author);
  }

  ModifyContact(author: Contact) {
    return this.contactList.set(author.id, author);
  }

  DeleteContact(author: Contact) {
    return this.contactList.remove(author.id);
  }
}
