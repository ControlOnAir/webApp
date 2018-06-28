import { MessageProvider } from './../../providers/message/message';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MessageBubble } from '../../models/MessageBubble';
import { Message } from '../../models/Message';
import { Contact } from '../../models/Contact';
import { IConversation } from '../../models/Conversation';
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
  public conversation: IConversation;
  public messages: Message[]
  public convId: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public messageProvider: MessageProvider) {
    this.page = 0;
    this.conversation = navParams.get("conversation");
    if(this.conversation == null) this.navCtrl.pop();
    
  }

  ionViewDidLoad() {
    if(this.conversation != null) {
      this.messageProvider.loadMessages(this.conversation.id);
      this.convId = this.conversation.id;
      this.messageProvider.discussionMessages$.subscribe(data => {
        this.messages = data;
      });
    }
  }

  sendMessage() {
    let msg = new MessageBubble("","right", new Message("moi",this.messageToSend));
    this.messageProvider.AddNewMessage(msg.message);
    this.messageToSend = "";
  }
}
