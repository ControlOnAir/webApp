import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormControl } from '@angular/forms';
import "rxjs/add/operator/debounceTime";

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.searchControl = new FormControl();
    this.searching = false;
    this.shouldShowCancel = false;
  }

  ionViewDidLoad() {
    //we wait for no change in the last 500ms to execute result filter
    this.searchControl.valueChanges.debounceTime(500).subscribe((search) => {

    });
  }

  public onSearchCancel(event) {

  }    

  public AddContact() {
    
  }
}
