import { TokenProvider } from './../token/token';
import { Contact } from '../../models/Contact';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { MessageBubble } from './../../models/MessageBubble';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { List } from "linqts";
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { IConversation, ConversationConvert } from '../../models/Conversation';
import { MessageConvert } from '../../models/Message'
import { Message } from '../../models/Message';
import moment, { Moment } from "moment";
import { DataSnapshot } from '@firebase/database-types';

@Injectable()
export class MessageProvider {

  public dicussionListData$: Observable<IConversation[]>
  private discussionListData: AngularFireList<IConversation>;

  public discussionMessages$: Observable<Message[]>;
  private discussionMessages: AngularFireList<Message>;

  constructor(public afDb: AngularFireDatabase, public tokenP: TokenProvider) {
    this.discussionListData = afDb.list<IConversation>(tokenP.UID + '/conversations');
    this.dicussionListData$ = this.discussionListData.snapshotChanges().map(data => {
      let convs: IConversation[] = [];
      data.forEach(item => {
        let conv = item.payload.val();
        conv.id = item.key;
        convs.push(conv);
      });
      return convs;
    });
  }

  public loadMessages(id: string) {
    let refUrl = this.tokenP.UID + '/messages/' + id;
    this.discussionMessages = this.afDb.list<Message>(refUrl);
    this.discussionMessages$ = this.discussionMessages.snapshotChanges().map(data => {
      let res = [];
      console.log(data);
      data.forEach(element => {
        res.push(element.payload.val());
      });
      let ar = new List<Message>(res).OrderBy(x => x.timestamp);
      return ar.ToArray();
    });
  }

  public GetConversationContact(number: string): Observable<Contact> {
    return this.afDb.object<any>(this.tokenP.UID + '/contacts/' + number).snapshotChanges().map(data => {
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