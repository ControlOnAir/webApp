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

  public dicussionListData$: Observable<AngularFireAction<DataSnapshot>[]>
  private discussionListData: AngularFireList<Conversation>;

  public discussionMessages$: Observable<Message[]>;
  private discussionMessages: AngularFireList<Message>;


  //used for mocking purpose only
  private fresult: MessageBubble[];

  constructor(public afDb: AngularFireDatabase) {
    this.discussionMessages = afDb.list<Message>('0781431934/data/messages');
    this.discussionMessages$ = this.discussionMessages.valueChanges();

    this.discussionListData = afDb.list<any>('0781431934/data/conversations');
    this.dicussionListData$ = this.discussionListData.snapshotChanges();
  }

  public loadMessages(number: string) {
    this.discussionMessages = this.afDb.list<Message>('0781431934/data/messages/' + number);
    this.discussionMessages$ = this.discussionMessages.valueChanges();
  }

  public GetConversationContact(number: string) {
    let res = this.afDb.object<any>("0781431934/data/contacts/" + number);
    return res.snapshotChanges(); 
  }
  

  public AddNewMessage(dicussionId: Number, message: MessageBubble) {
    this.discussionMessages.push(message.message);
    
  }
}