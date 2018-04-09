import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Contact } from '../../models/Contact'
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ContactProvider {

  public contactListData$: Observable<Contact[]>;
  private contactListData: Subject<Contact[]>;

  constructor(public http: Http) {
    this.contactListData = new Subject();
    this.contactListData$ = this.contactListData.asObservable();
  }

  LoadContactListWithPaging(filter: string, page: number) {
    let contacts = [];
    contacts.push(new Contact("john","0102030405",1));
    contacts.push(new Contact("pierrick","0102030405",2));
    contacts.push(new Contact("stephen","0102030405",3));
    this.contactListData.next(contacts);
  }

  GetContactDetails(contact: Contact) {

  }
}
