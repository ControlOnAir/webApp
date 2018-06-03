import { ContactProvider } from './../../providers/contact/contact';
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

  constructor(public navCtrl: NavController, public contactProvider: ContactProvider) {
    this.newContact = new Author("","");
  }

  ionViewDidLoad() {
    
  }

  AddContact() {
    let newAuthor = new Author(this.newContact.name, this.newContact.number);
    newAuthor.id = this.newContact.number;
    this.contactProvider.AddContact(newAuthor).then(data => {
      this.navCtrl.pop();
    }).catch(ex => {
      //need to display a proper toast
      this.navCtrl.pop();
    });
  }
}
