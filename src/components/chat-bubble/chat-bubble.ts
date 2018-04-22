import { Component, Input } from '@angular/core';
import { MessageBubble } from '../../models/MessageBubble';
import { Message } from '../../models/Message';
import { Author } from '../../models/Author';
import moment, { Moment } from "moment";

@Component({
  selector: 'chat-bubble',
  templateUrl: 'chat-bubble.html'
})
export class ChatBubbleComponent {

  @Input("message") public message: any;
  public bubble: MessageBubble;

  constructor() {
  }

  ngOnInit() {
    console.log(this.message);
    if(this.message == null) this.message = 
    new Message(new Author("undefined","undefined"),"undefined");
    this.bubble = new MessageBubble("","left", this.message);
    //temporaire
    if(this.bubble.message.timestamp == null) this.bubble.message.timestamp = moment().toISOString();
  }

  public GetInitials(): string {
    return this.bubble.message.author.name[0] + this.bubble.message.author.name.slice(-1);
  }
}
