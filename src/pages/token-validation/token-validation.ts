import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-token-validation',
  templateUrl: 'token-validation.html',
})
export class TokenValidationPage {

  public tokenInputValue: string;
  public phoneNumber: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    
  }

  public CheckToken() {

  }

}
