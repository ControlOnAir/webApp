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

@IonicPage()
@Component({
  selector: 'page-message-list',
  templateUrl: 'message-list.html',
})
export class MessageListPage {

  public messageToSend: string;
  public conversation: IConversation;
  public messages: Message[];
  public nextId: number;


  constructor(public navCtrl: NavController, public navParams: NavParams, public messageProvider: MessageProvider) {
    this.messages = [];
    this.nextId = -1;
    this.conversation = navParams.get("conversation");
    if (this.conversation == null) this.navCtrl.pop();
    let unsub = this.messageProvider.loadMessages(this.conversation.id).subscribe(x => {
      let l: List<Message> = new List<Message>(x).OrderBy(x => x.id);
      this.nextId = l.Last().id + 1;
      this.messages = l.ToArray();
      unsub.unsubscribe();
    });
  }

  sendMessage() {
    let msg = new MessageBubble("", "right", new Message("moi", this.messageToSend));
    msg.message.id = this.nextId;
    this.messageProvider.AddNewMessage(msg.message);
    this.messageToSend = "";
  }

  public GetAuthor(msg: Message) {
    if(msg.author.name == null) return msg.author.number;
    else return msg.author.name;
  }

  public GetPosition(msg: Message) {
    return "left";
  }
 
   toMoment(num: Number): string {
     return "";
   }

   public GetInitials(msg: Message): string {
    if(!msg.author.name) return;
    return msg.author.name[0] + msg.author.name.slice(-1);
  }

}
