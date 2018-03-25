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

  constructor(public http: Http) {
    this.discussionListData = new Subject();
    this.discussionMessages = new Subject();

    this.dicussionListData$ = this.discussionListData.asObservable();
    this.discussionMessages$ = this.discussionMessages.asObservable();
  }

  public GetDiscussionList(paging: number) {
    this.discussionListData.next([{name: "john",messages: ["lol","test"]},{name: "ricardo", messages: ["test2","U NOE DA WAE"]}]);
  }

  public GetDiscutionMessages(discussionId: number) {
    let fResult = [];
    fResult.push(new MessageBubble("","left","coucou !","roger","10:00"));
    fResult.push(new MessageBubble("","right","hey quoi de neuf ?","","10:04"));
    this.discussionMessages.next(fResult);
  }
}
