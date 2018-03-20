import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Contact } from '../../models/Contact';

@IonicPage()
@Component({
  selector: 'page-contact-details',
  templateUrl: 'contact-details.html',
})
export class ContactDetailsPage {

  public contactShown: Contact;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.contactShown = navParams.get("contact");
    if(this.contactShown == null) this.contactShown = new Contact("","");
  }

  ionViewDidLoad() {
  }
}
