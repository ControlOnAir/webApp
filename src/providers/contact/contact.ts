import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Author } from '../../models/Author';
import { AngularFireList, AngularFireAction } from 'angularfire2/database';
import { DataSnapshot } from '@firebase/database-types';

@Injectable()
export class ContactProvider {

  public discussionMessages$: Observable<AngularFireAction<DataSnapshot>[]>
  private discussionMessages: AngularFireList<Author>;

  constructor(public http: Http) {
  }
}
