import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Contact } from '../../models/Contact';

@IonicPage()
@Component({
  selector: 'page-contact-add',
  templateUrl: 'contact-add.html',
})
export class ContactAddPage {

  public newContact: Contact;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.newContact = new Contact("","",-1);
  }

  ionViewDidLoad() {
    
  }
}
