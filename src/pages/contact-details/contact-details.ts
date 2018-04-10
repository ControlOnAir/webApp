import { Author } from './../../models/Author';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-contact-details',
  templateUrl: 'contact-details.html',
})
export class ContactDetailsPage {

  public contactShown: Author;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.contactShown = navParams.get("contact");
  }

  ionViewDidLoad() {
  }
}
