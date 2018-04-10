import { MessageProvider } from './../../providers/message/message';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MessageBubble } from '../../models/MessageBubble';
import { Message } from '../../models/Message';
import { Author } from '../../models/Author';

@IonicPage()
@Component({
  selector: 'page-message-list',
  templateUrl: 'message-list.html',
})
export class MessageListPage {

  public page: number;

  public messageToSend: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public messageProvider: MessageProvider) {
    this.page = 0;
  }

  ionViewDidLoad() {
  }

  sendMessage() {
    let date = new Date();
    let msg = new MessageBubble("","right", new Message(new Author("alexandre","0787878787"),""));
    this.messageProvider.AddNewMessage(0, msg);
    this.messageToSend = "";
  }
}
