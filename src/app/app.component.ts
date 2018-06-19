import { DiscussionListPage } from './../pages/discussion-list/discussion-list';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = "TokenValidationPage";

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public storage: Storage) {
    this.initializeApp();

    storage.get("hasValidatedToken").then(x => {
      if(x == true) this.nav.setRoot("DiscussionListPage");
    });
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Messages', component: "DiscussionListPage" },
      { title: 'Contacts', component: "ContactListPage" }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //this.statusBar.styleDefault();
      //this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
