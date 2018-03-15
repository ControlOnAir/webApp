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

  ngOnInit() {
    if(this.msg.senderName === "") this.msg.senderName = "Moi";
  }

  public GetInitials(): string {
    return this.msg.senderName[0] + this.msg.senderName.slice(-1);
  }

}
