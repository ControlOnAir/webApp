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

  public callBack: Subject<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public messageProvider: MessageProvider, public contactProvider: ContactProvider) {
    this.page = 0;
  }

  ionViewDidLoad() {
  }


  public GetInitials(item: Conversation): Observable<any> {
    return new Observable(observer => {
      this.contactProvider.GetOneContact<Author>("0781431934/data/contacts/" + item.id).subscribe(
        data => {
          observer.next(data.name[0] + data.name.slice(-1));
          observer.complete();
        }
      )
    });
  }
  
  public GetContactName(item: Conversation): Observable<any> {
    return new Observable(observer => {
      this.contactProvider.GetOneContact<Author>("0781431934/data/contacts/" + item.id).subscribe(
        data => {
          observer.next(data.name);
          observer.complete();
        }
      )
    });
  }


  public OpenMessages(item: Conversation) {
    this.navCtrl.push("MessageListPage", { conversation: item });
  }

  AddConversation() {
    this.navCtrl.push("ContactListPage",{subject: this.callBack});
  }
}
