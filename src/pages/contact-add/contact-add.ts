import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Author } from '../../models/Author';

@IonicPage()
@Component({
  selector: 'page-contact-add',
  templateUrl: 'contact-add.html',
})
export class ContactAddPage {

  public newContact: Author;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.newContact = new Author("","");
  }

  ionViewDidLoad() {
    
  }

  AddContact() {
    
  }
}
