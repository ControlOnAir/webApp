import { AngularFireDatabase, AngularFireList, AngularFireAction } from 'angularfire2/database';
import { MessageBubble } from './../../models/MessageBubble';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { List } from "linqts";
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Conversation } from '../../models/Conversation';
import { Message } from '../../models/Message';
import { Author } from '../../models/Author';
import moment, { Moment } from "moment";
import { DataSnapshot } from '@firebase/database-types';

@Injectable()
export class MessageProvider {

  public dicussionListData$: Observable<Conversation[]>;
  private discussionListData: AngularFireList<Conversation>;

  public discussionMessages$: Observable<AngularFireAction<DataSnapshot>[]>
  private discussionMessages: AngularFireList<Message>;

  private discussionMock: Subject<Conversation[]>;

  //used for mocking purpose only
  private fresult: MessageBubble[];

  constructor(public http: Http, public afDb: AngularFireDatabase) {
    this.discussionMessages = afDb.list<Message>('message');
    this.discussionMessages$ = this.discussionMessages.snapshotChanges();
    this.discussionMock = new Subject();
    this.dicussionListData$ = this.discussionMock.asObservable();
  }
  
  public initMock() {
    let values = [];
    let author1 = new Author("me","0102030405");
    let author2 = new Author("john","0402030405");
    let mess = new Message(author1,"lol");
    let conv = new Conversation(author2);
    conv.messages.push(mess);
    conv.id = 0;
    values.push(conv);
    this.discussionMock.next(values);
    return values;
  }

  public AddNewMessage(dicussionId: Number, message: MessageBubble) {
    this.discussionMessages.push(message.message);
  }
}