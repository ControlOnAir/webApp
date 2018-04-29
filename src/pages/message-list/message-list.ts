import { MessageProvider } from './../../providers/message/message';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MessageBubble } from '../../models/MessageBubble';
import { Message } from '../../models/Message';
import { Author } from '../../models/Author';
import { Conversation } from '../../models/Conversation';
import { DataSnapshot } from '@firebase/database-types';
import { AngularFireAction } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-message-list',
  templateUrl: 'message-list.html',
})
export class MessageListPage {

  public page: number;
  public messageToSend: string;
  public conversation: Conversation;
  public messages: AngularFireAction<DataSnapshot>[]

  constructor(public navCtrl: NavController, public navParams: NavParams, public messageProvider: MessageProvider) {
    this.page = 0;
    this.conversation = navParams.get("conversation");
    this.messageProvider.discussionMessages$.subscribe(data => {
      console.log(data);
      this.messages = data;
      data.forEach(x => console.log(x.key));
    });
  }

  ionViewDidLoad() {
  }

  sendMessage() {
    let msg = new MessageBubble("","right", new Message(new Author("alexandre","0787878787"),this.messageToSend));
    this.messageProvider.AddNewMessage(0, msg);
    this.messageToSend = "";
  }
}
