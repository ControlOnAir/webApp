import { MessageProvider } from './../../providers/message/message';
import { Conversation } from './../../models/Conversation';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormControl } from '@angular/forms';
import "rxjs/add/operator/debounceTime";
import { ContactProvider } from '../../providers/contact/contact';
import { Author } from '../../models/Author';
import { DataSnapshot } from '@firebase/database-types';
import { AngularFireAction } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import moment, { Moment } from "moment";

@IonicPage()
@Component({
  selector: 'page-contact-list',
  templateUrl: 'contact-list.html',
})
export class ContactListPage {

  public searchControl: FormControl;
  public filter: string;
  public searching: boolean
  public shouldShowCancel: boolean;
  public page: number;
  public isNewConv: boolean;

  public contact$:  Observable<Author[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public contactProvider: ContactProvider, public convProvider: MessageProvider) {
    this.searchControl = new FormControl();
    this.searching = false;
    this.shouldShowCancel = false;
    this.page = 0;
    this.contact$ = contactProvider.contactList$;
    this.isNewConv = this.navParams.get("isNewConversation");
  }
  
  ionViewDidLoad() {
    //we wait for no change in the last 500ms to execute result filter
    this.searchControl.valueChanges.debounceTime(500).subscribe((search) => {

      //need to implement correct search filtering
    });
  }

  public onSearchCancel(event) {
    this.filter = "";
    this.page = 0;
  }

  public AddContact() {
    this.navCtrl.push("ContactAddPage",{contact: null});
  }

  doInfinite(event) {
    this.page++;
  }

  contactClick(item: Author) {
    if(this.isNewConv != null) {
      let newConv = new Conversation();
      newConv.id = item.number;
      newConv.lastMessage = "";
      newConv.timestamp = moment();
      this.convProvider.AddNewConversation(newConv);
      this.navCtrl.setRoot("DiscussionListPage");
      this.navCtrl.push("MessageListPage", { conversation: item });
    } else {
      this.navCtrl.push("ContactDetailsPage", {contact: item});
    }
  }
}
