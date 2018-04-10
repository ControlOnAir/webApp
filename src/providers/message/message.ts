import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { MessageBubble } from './../../models/MessageBubble';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { List } from "linqts";
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MessageProvider {

  public dicussionListData$: Observable<any>;
  public discussionMessages$: Observable<Message[]>;
  private discussionMessages: AngularFireList<Message>;

  //used for mocking purpose only
  private fresult: MessageBubble[]; 

  constructor(public http: Http, public afDb: AngularFireDatabase) {
    this.discussionMessages$ = afDb.list<Message>('message').valueChanges();
  }

  public AddNewMessage(dicussionId: Number, message: MessageBubble) {
    //this.discussionMessages.push()
  }
}
