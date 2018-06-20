import { Author } from './../../models/Author';
import { AngularFireDatabase, AngularFireList, AngularFireAction } from 'angularfire2/database';
import { MessageBubble } from './../../models/MessageBubble';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { List } from "linqts";
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Conversation } from '../../models/Conversation';
import { Message } from '../../models/Message';
import moment, { Moment } from "moment";
import { DataSnapshot } from '@firebase/database-types';

@Injectable()
export class MessageProvider {

  public dicussionListData$: Observable<Conversation[]>
  private discussionListData: AngularFireList<Conversation>;

  public discussionMessages$: Observable<Message[]>;
  private discussionMessages: AngularFireList<Message>;


  //used for mocking purpose only
  private fresult: MessageBubble[];

  constructor(public afDb: AngularFireDatabase) {
    this.discussionMessages = afDb.list<Message>('0781431934/data/messages');
    this.discussionMessages$ = this.discussionMessages.valueChanges();

    this.discussionListData = afDb.list<any>('0781431934/data/conversations');
    this.dicussionListData$ = this.discussionListData.snapshotChanges().map(data => {
      let convlist = new List<Conversation>();
      data.forEach(datasnap => {
        let newconv = new Conversation();
        newconv.lastMessage = datasnap.payload.val().lastMessage;
        newconv.timestamp = datasnap.payload.val().timestamp;
        newconv.id = datasnap.key;
        convlist.Add(newconv);
      });
      return convlist.ToArray();
    });
  }

  public loadMessages(number: string) {
    this.discussionMessages = this.afDb.list<Message>('0781431934/data/messages/' + number);
    this.discussionMessages$ = this.discussionMessages.valueChanges();
  }

  public GetConversationContact(number: string): Observable<Author> {
    return this.afDb.object<any>("0781431934/data/contacts/" + number).snapshotChanges().map(data => {
      let contact = new Author(data.payload.val().name,data.payload.val().number);
      contact.id = data.key;
      return contact;
    }); 
  }
  

  public AddNewMessage(message: Message) {
    this.discussionMessages.push(message);
  }

  public AddNewConversation(conv: Conversation) {
    return this.afDb.object<Conversation>('0781431934/data/conversations/' + conv.id + '/').set(conv);
  }
}