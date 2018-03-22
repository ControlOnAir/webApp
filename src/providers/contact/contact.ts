import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Contact } from '../../models/Contact'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ContactProvider {

  constructor(public http: Http) {
  }

  GetContactListWithPaging(filter: string, page: number): Observable<Contact[]> {
    let contacts = [];
    contacts.push(new Contact("john","0102030405",1));
    contacts.push(new Contact("pierrick","0102030405",2));
    contacts.push(new Contact("stephen","0102030405",3));
    return new Observable<Contact[]>(obs => {
      obs.next(contacts);
      obs.complete();
    });
  }

  GetContactDetails(contact: Contact) {

  }
}
