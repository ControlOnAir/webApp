import { MessageProvider } from './../../providers/message/message';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-discussion-list',
  templateUrl: 'discussion-list.html',
})
export class DiscussionListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public messageProvider: MessageProvider) {
  }

  ionViewDidLoad() {
    
  }

  public GetInitials(name: string): string {
    return name[0] + name.slice(-1);
  }

}
