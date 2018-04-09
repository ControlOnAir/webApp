import { Component, Input } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { MessageBubble } from '../../models/MessageBubble';

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
    if(this.bubble.senderName === "") this.bubble.senderName = "Moi";
  }

  public GetInitials(): string {
    return this.bubble.senderName[0] + this.bubble.senderName.slice(-1);
  }

}
