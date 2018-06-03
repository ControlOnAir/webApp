import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MessageListPage } from './message-list';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    MessageListPage,
  ],
  imports: [
    IonicPageModule.forChild(MessageListPage),
    ComponentsModule    
  ],
  exports: [
    MessageListPage
  ]
})
export class MessageListPageModule {}
