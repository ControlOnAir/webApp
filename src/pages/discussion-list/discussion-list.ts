import { MessageProvider } from './../../providers/message/message';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Conversation } from '../../models/Conversation';

@IonicPage()
@Component({
  selector: 'page-discussion-list',
  templateUrl: 'discussion-list.html',
})
export class DiscussionListPage {

  public page: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public messageProvider: MessageProvider) {
    this.page = 0;
  }

  ionViewDidLoad() {
    this.messageProvider.initMock();
  }


  public GetInitials(name: string): string {
    return name[0] + name.slice(-1);
  }

  public OpenMessages(item: Conversation) {
    this.navCtrl.push("MessageListPage",{conversation: item});
  }

  AddConversation() {

  }
}
