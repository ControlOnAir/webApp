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
  public onSelectionEvent: Subject<any>;

  public contact$:  Observable<AngularFireAction<DataSnapshot>[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public contactProvider: ContactProvider) {
    this.searchControl = new FormControl();
    this.searching = false;
    this.shouldShowCancel = false;
    this.page = 0;
    this.contact$ = contactProvider.contactList$;
    this.onSelectionEvent = this.navParams.get("subject");
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

  onItemClick(item: AngularFireAction<DataSnapshot>) {
    if(this.onSelectionEvent != null) {
      this.onSelectionEvent.next(item);
      this.navCtrl.pop();
    } 
  }
}
