import { Component, Input } from '@angular/core';
import { MessageBubble } from '../../models/MessageBubble';
import { Message } from '../../models/Message';
import { Contact } from '../../models/Contact';
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
    console.log(this.message);
    let direction = "left";
    if(this.message.author.name == "moi") direction = "right";
    this.bubble = new MessageBubble("",direction, this.message);
    //temporaire
    if(this.bubble.message.timestamp == null) this.bubble.message.timestamp = new Date().valueOf();
  }

  ngOnInit() {
  }

  toMoment(num: Number): string {
    return moment().format();
  }

  public GetInitials(): string {
    if(!this.bubble.message.author.name) return;
    return this.bubble.message.author.name[0] + this.bubble.message.author.name.slice(-1);
  }
}
