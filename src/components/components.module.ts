import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { ChatBubbleComponent } from './chat-bubble/chat-bubble';
@NgModule({
	declarations: [ChatBubbleComponent],
	imports: [IonicModule],
	exports: [ChatBubbleComponent]
})
export class ComponentsModule {}
