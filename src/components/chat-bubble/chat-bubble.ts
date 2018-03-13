import { MessageBubble } from './../../models/MessageBubble';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'chat-bubble',
  templateUrl: 'chat-bubble.html'
})
export class ChatBubbleComponent {

  @Input("message") public msg: MessageBubble;

  constructor() {
  }

}
