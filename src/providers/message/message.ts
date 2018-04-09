import { AngularFireDatabase } from 'angularfire2/database';
import { MessageBubble } from './../../models/MessageBubble';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { List } from "linqts";
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MessageProvider {

  public dicussionListData$: Observable<any>;
  public discussionListData: Subject<any>;

  public discussionMessages$: Observable<MessageBubble[]>;
  public discussionMessages: Subject<MessageBubble[]>;

  //used for mocking purpose only
  private fresult: MessageBubble[];

  constructor(public http: Http, public afDb: AngularFireDatabase) {
    this.discussionMessages$ = afDb.list('message').valueChanges();

    this.initMock();
  }

  public GetDiscussionList(paging: number) {
    this.discussionListData.next([{name: "john",messages: ["lol","test"]},{name: "ricardo", messages: ["test2","U NOE DA WAE"]}]);
  }

  public GetDiscutionMessages(discussionId: number) {
    this.discussionMessages.next(this.fresult);
  }

  public AddNewMessage(dicussionId: Number, message: MessageBubble) {
    this.fresult.push(message);
  }

  //we need to reorder message per date with each fetch and addition of messages 
  reorderMessages() {

  }

  initMock() {
    this.fresult = [];
    this.fresult.push(new MessageBubble("","left","coucou !","roger","10:00"));
    this.fresult.push(new MessageBubble("","right","hey quoi de neuf ?","","10:04"));
  }
}
