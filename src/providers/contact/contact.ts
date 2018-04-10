import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Author } from '../../models/Author';

@Injectable()
export class ContactProvider {

  public contactListData$: Observable<Author[]>;
  private contactListData: Subject<Author[]>;

  constructor(public http: Http) {
    this.contactListData = new Subject();
    this.contactListData$ = this.contactListData.asObservable();
  }

  LoadContactListWithPaging(filter: string, page: number) {
    let contacts = [];
    contacts.push(new Author("john","0102030405"));
    contacts.push(new Author("pierrick","0102030405"));
    contacts.push(new Author("stephen","0102030405"));
    this.contactListData.next(contacts);
  }
}
