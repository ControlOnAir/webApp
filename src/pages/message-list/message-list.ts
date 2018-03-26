import { MessageProvider } from './../../providers/message/message';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MessageBubble } from '../../models/MessageBubble';

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
    this.messageProvider.GetDiscutionMessages(0)
  }

  sendMessage() {
    let date = new Date();
    let msg = new MessageBubble("","right",this.messageToSend, "", date.getDay() + "/" + date.getMonth() + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes());
    this.messageProvider.AddNewMessage(0, msg);
    this.messageToSend = "";
  }
}
