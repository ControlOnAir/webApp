import { MessageProvider } from './../../providers/message/message';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MessageBubble } from '../../models/MessageBubble';
import { Message } from '../../models/Message';
import { Contact } from '../../models/Contact';
import { IConversation } from '../../models/Conversation';
import { DataSnapshot } from '@firebase/database-types';
import { AngularFireAction } from 'angularfire2/database';
import moment, { Moment } from "moment";
import { List } from '../../../node_modules/linqts';
import { TokenProvider } from '../../providers/token/token';

@IonicPage()
@Component({
  selector: 'page-message-list',
  templateUrl: 'message-list.html',
})
export class MessageListPage {

  public messageToSend: string;
  public conversation: IConversation;


  constructor(public navCtrl: NavController, public navParams: NavParams, public messageProvider: MessageProvider,
  public tokenP: TokenProvider) {
    this.conversation = navParams.get("conversation");
    console.log(this.conversation);
    if (this.conversation == null) this.navCtrl.pop();
    this.messageProvider.loadMessages(this.conversation.id);
  }

  sendMessage() {
    let msg = new MessageBubble("", "right", new Message(this.tokenP.UID, this.messageToSend));
    msg.message.author.name = "moi";
    this.messageProvider.AddNewMessage(msg.message);
    this.messageToSend = "";
  }

  public GetAuthor(msg: Message) {
    if(msg.author.name == null) return msg.author.number;
    else return msg.author.name;
  }

  public GetPosition(msg: Message) {
    if(msg.author.number != this.tokenP.UID) return "left";
    else return "right";
  }
 
   toMoment(num: number): string {
     return moment(num).format();
   }
}
