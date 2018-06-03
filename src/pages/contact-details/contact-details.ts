import { ContactProvider } from './../../providers/contact/contact';
import { Author } from './../../models/Author';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-contact-details',
  templateUrl: 'contact-details.html',
})
export class ContactDetailsPage {

  public contactShown: Author;

  constructor(public navCtrl: NavController, public navParams: NavParams, public contactProvider: ContactProvider,
    public toastController: ToastController) {
    this.contactShown = navParams.get("contact");
  }

  ionViewDidLoad() {
  }

  Modify() {
    this.contactProvider.ModifyContact(this.contactShown).then((r) => {
      this.toastController.create({
        message: 'Modification appliquée',
        duration: 3000,
        position: 'bottom'
      }).present();
      this.navCtrl.pop();
    }).catch((e) => {
      this.toastController.create({
        message: 'Erreur lors de la modification',
        duration: 3000,
        position: 'bottom'
      }).present();
    });
  }

  Delete() {
    this.contactProvider.DeleteContact(this.contactShown).then((r) => {
      this.toastController.create({
        message: 'Contact supprimée',
        duration: 3000,
        position: 'bottom'
      }).present();
      this.navCtrl.pop();
    }).catch((e) => {
      this.toastController.create({
        message: 'Erreur lors de la suppression',
        duration: 3000,
        position: 'bottom'
      }).present();
    });
  }
}
