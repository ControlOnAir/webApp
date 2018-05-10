import { Component, Input } from '@angular/core';
import { MessageBubble } from '../../models/MessageBubble';
import { Message } from '../../models/Message';
import { Author } from '../../models/Author';
import moment, { Moment } from "moment";
import { AngularFireAction } from 'angularfire2/database';
import { DataSnapshot } from '@firebase/database-types';

@Component({
  selector: 'chat-bubble',
  templateUrl: 'chat-bubble.html'
})
export class ChatBubbleComponent {

  @Input("message") public message: Message;
  @Input("conversationId") public convId: string
  public bubble: MessageBubble;

  constructor() {
  }

  ngOnInit() {
    console.log(this.message);
    let direction = "left";
    if(this.message.author == "moi") direction = "right";
    this.bubble = new MessageBubble("",direction, this.message);
    //temporaire
    if(this.bubble.message.timestamp == null) this.bubble.message.timestamp = moment().toISOString();
  }

  public GetInitials(): string {
    return this.bubble.message.author[0] + this.bubble.message.author.slice(-1);
  }
}
