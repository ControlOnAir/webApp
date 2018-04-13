import { Component, Input } from '@angular/core';
import { MessageBubble } from '../../models/MessageBubble';
import { Message } from '../../models/Message';
import { Author } from '../../models/Author';

@Component({
  selector: 'chat-bubble',
  templateUrl: 'chat-bubble.html'
})
export class ChatBubbleComponent {

  @Input("message") public msg: any;
  public bubble: MessageBubble;

  constructor() {
    console.log(this.msg);
    if(this.msg == null) this.msg = 
    new Message(new Author("undefined","undefined"),"undefined");
    this.bubble = new MessageBubble("","left", this.msg);
  }

  ngOnInit() {
  }

  public GetInitials(): string {
    return "lol";
    //return this.bubble.message.author.name[0] + this.bubble.message.author.name.slice(-1);
  }

}
