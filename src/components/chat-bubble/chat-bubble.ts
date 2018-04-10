import { Component, Input } from '@angular/core';
import { MessageBubble } from '../../models/MessageBubble';
import { Message } from '../../models/Message';

@Component({
  selector: 'chat-bubble',
  templateUrl: 'chat-bubble.html'
})
export class ChatBubbleComponent {

  @Input("message") public msg: Message;
  public bubble: MessageBubble;

  constructor() {

  }

  ngOnInit() {
  }

  public GetInitials(): string {
    return this.bubble.message.author.name[0] + this.bubble.message.author.name.slice(-1);
  }

}
