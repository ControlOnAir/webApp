import { MessageBubble } from './../../models/MessageBubble';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { List } from "linqts";

@Injectable()
export class MessageProvider {

  constructor(public http: Http) {
    
  }

  public GetDiscussionList(paging: number) {
    return [{name: "john",messages: ["lol","test"]},{name: "ricardo", messages: ["test2","U NOE DA WAE"]}];
  }

  public GetDiscutionMessages(discussionId: number) {
    let fResult: List<MessageBubble> = new List<MessageBubble>();
    fResult.Add(new MessageBubble("","left","coucou !","roger","10:00"));
    fResult.Add(new MessageBubble("","right","hey quoi de neuf ?","","10:04"));
    return fResult.ToArray();
  }
}
