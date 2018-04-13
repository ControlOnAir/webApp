import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { ChatBubbleComponent } from './chat-bubble/chat-bubble';
import { ContactListComponent } from './contact-list/contact-list';
@NgModule({
	declarations: [ChatBubbleComponent,
    ContactListComponent],
	imports: [IonicModule],
	exports: [ChatBubbleComponent,
    ContactListComponent]
})
export class ComponentsModule {}
