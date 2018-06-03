import { ComponentsModule } from './../../components/components.module';
import { ChatBubbleComponent } from './../../components/chat-bubble/chat-bubble';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DiscussionListPage } from './discussion-list';

@NgModule({
  declarations: [
    DiscussionListPage,
  ],
  imports: [
    IonicPageModule.forChild(DiscussionListPage),
  ],
  exports: [
    DiscussionListPage
  ]
})
export class DiscussionListPageModule {}
