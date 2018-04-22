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

  @Input("message") public message: AngularFireAction<DataSnapshot>;
  public bubble: MessageBubble;

  constructor() {
  }

  ngOnInit() {
    console.log(this.message);
    this.bubble = new MessageBubble("","left", <Message>this.message.payload.toJSON());
    //temporaire
    if(this.bubble.message.timestamp == null) this.bubble.message.timestamp = moment().toISOString();
  }

  public GetInitials(): string {
    return this.bubble.message.author.name[0] + this.bubble.message.author.name.slice(-1);
  }
}
