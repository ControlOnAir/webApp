import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormControl } from '@angular/forms';
import "rxjs/add/operator/debounceTime";
import { ContactProvider } from '../../providers/contact/contact';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public contactProvider: ContactProvider) {
    this.searchControl = new FormControl();
    this.searching = false;
    this.shouldShowCancel = false;
    this.page = 0;
  }
  
  ionViewDidLoad() {
    this.contactProvider.LoadContactListWithPaging("", this.page);
    //we wait for no change in the last 500ms to execute result filter
    this.searchControl.valueChanges.debounceTime(500).subscribe((search) => {
      this.contactProvider.LoadContactListWithPaging(this.filter, this.page);
    });
  }

  public onSearchCancel(event) {
    this.filter = "";
    this.page = 0;
    this.contactProvider.LoadContactListWithPaging(this.filter, this.page);
  }

  public AddContact() {
    this.navCtrl.push("ContactAddPage",{contact: null});
  }

  public ContactClicked(item) {
    this.navCtrl.push("ContactDetailsPage",{contact: item});
  } 

  doInfinite(event) {
    this.page++;
    this.contactProvider.LoadContactListWithPaging(this.filter,this.page);
  }
}
