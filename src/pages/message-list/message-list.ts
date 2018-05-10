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
  public conversation: AngularFireAction<DataSnapshot>;
  public messages: Message[]
  public convId: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public messageProvider: MessageProvider) {
    this.page = 0;
    this.conversation = navParams.get("conversation");
    if(this.conversation == null) this.navCtrl.pop();
    this.messageProvider.loadMessages(this.conversation.key);
    this.convId = this.conversation.key;
    this.messageProvider.discussionMessages$.subscribe(data => {
      console.log(data);
      this.messages = data;
    });
  }

  ionViewDidLoad() {
  }

  sendMessage() {
    let msg = new MessageBubble("","right", new Message("moi",this.messageToSend));
    this.messageProvider.AddNewMessage(0, msg);
    this.messageToSend = "";
  }
}
