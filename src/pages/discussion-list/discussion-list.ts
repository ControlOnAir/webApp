import { Observable } from 'rxjs/Observable';
import { Author } from './../../models/Author';
import { ContactProvider } from './../../providers/contact/contact';
import { AngularFireAction } from 'angularfire2/database';
import { DataSnapshot } from '@firebase/database-types';
import { MessageProvider } from './../../providers/message/message';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Conversation } from '../../models/Conversation';
import { Subject } from 'rxjs/Subject';

@IonicPage()
@Component({
  selector: 'page-discussion-list',
  templateUrl: 'discussion-list.html',
})
export class DiscussionListPage {

  public page: number;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public messageProvider: MessageProvider, public contactProvider: ContactProvider) {
    this.page = 0;
  }

  ionViewDidLoad() {
  }


  public GetInitials(item: Conversation): Observable<string> {
    return this.contactProvider.GetOneContact("0781431934/data/contacts/" + item.id)
    .map(x => { return x.name[0] + x.name.slice(-1); });
  }
  
  public GetContactName(item: Conversation): Observable<any> {
      return this.contactProvider.GetOneContact("0781431934/data/contacts/" + item.id)
      .map(x => { return x.name; });
  }


  public OpenMessages(item: Conversation) {
    this.navCtrl.push("MessageListPage", { conversation: item });
  }

  AddConversation() {
    this.navCtrl.push("ContactListPage",{isNewConversation: true});
  }
}
