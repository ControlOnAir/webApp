import { MessageBubble } from './../../models/MessageBubble';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { List } from "linqts";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MessageProvider {

  constructor(public http: Http) {
    
  }

  public GetDiscussionList(paging: number) {
    return new Observable(obs => {
      obs.next([{name: "john",messages: ["lol","test"]},{name: "ricardo", messages: ["test2","U NOE DA WAE"]}]);
      obs.complete();
    });
  }

  public GetDiscutionMessages(discussionId: number): Observable<MessageBubble[]>{
    let fResult = [];
    fResult.push(new MessageBubble("","left","coucou !","roger","10:00"));
    fResult.push(new MessageBubble("","right","hey quoi de neuf ?","","10:04"));
    return new Observable<MessageBubble[]>(obs => {
      obs.next(fResult);
      obs.complete();
    });
  }
}
