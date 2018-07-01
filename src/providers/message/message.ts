import { TokenProvider } from './../token/token';
import { Contact } from '../../models/Contact';
import { AngularFireDatabase, AngularFireList, AngularFireAction } from 'angularfire2/database';
import { MessageBubble } from './../../models/MessageBubble';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { List } from "linqts";
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { IConversation, Convert } from '../../models/Conversation';
import { Message } from '../../models/Message';
import moment, { Moment } from "moment";
import { DataSnapshot } from '@firebase/database-types';

@Injectable()
export class MessageProvider {

  public dicussionListData$: Observable<IConversation[]>
  private discussionListData: AngularFireList<IConversation>;

  public discussionMessages$: Observable<Message[]>;
  private discussionMessages: AngularFireList<Message>;


  //used for mocking purpose only
  private fresult: MessageBubble[];

  constructor(public afDb: AngularFireDatabase, public tokenP: TokenProvider) {
    this.discussionMessages = afDb.list<Message>( tokenP.UID + '/messages');
    this.discussionMessages$ = this.discussionMessages.valueChanges();

    this.discussionListData = afDb.list<IConversation>(tokenP.UID + '/conversations');
    this.dicussionListData$ = this.discussionListData.valueChanges();
  }

  public loadMessages(number: number) {
    this.discussionMessages = this.afDb.list<Message>(this.tokenP.UID + '/messages/' + number);
    this.discussionMessages$ = this.discussionMessages.valueChanges();
  }

  public GetConversationContact(number: string): Observable<Contact> {
    return this.afDb.object<any>(this.tokenP.UID + "/contacts/" + number).snapshotChanges().map(data => {
      let contact = new Contact(data.payload.val().name,data.payload.val().number);
      contact.id = data.key;
      return contact;
    }); 
  }
  

  public AddNewMessage(message: Message) {
    this.discussionMessages.push(message);
  }

  public AddNewConversation(conv: IConversation) {
    return this.afDb.object<IConversation>(this.tokenP.UID + '/conversations/' + conv.id + '/').set(conv);
  }
}