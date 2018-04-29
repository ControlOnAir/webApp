import { AngularFireAction } from 'angularfire2/database';
import { DataSnapshot } from '@firebase/database-types';
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
  }


  public GetInitials(item: AngularFireAction<DataSnapshot>): string {
    let data = <Conversation>item.payload.toJSON();
    // return name[0] + name.slice(-1);
    return item.key;
  }

  public OpenMessages(item: Conversation) {
    this.navCtrl.push("MessageListPage",{conversation: item});
  }

  public GetName(item: DataSnapshot) {
    let conv = <Conversation>item.toJSON();
    return "TESTING";
  }

  public GetContent(item: DataSnapshot) {
      return (<Conversation>item.toJSON()).lastMessage;
  }


  AddConversation() {

  }
}
