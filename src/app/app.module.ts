import { DiscussionListPage } from './../pages/discussion-list/discussion-list';
import { ComponentsModule } from './../components/components.module';
import { MessageListPage } from './../pages/message-list/message-list';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MessageProvider } from '../providers/message/message';
import { ContactProvider } from '../providers/contact/contact';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MessageProvider,
    ContactProvider
  ]
})
export class AppModule {}