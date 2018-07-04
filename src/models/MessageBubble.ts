import { Message } from './Message';
export class MessageBubble {
    img: string;
    position: string = "left";
    message: Message;

    constructor(img: string, position: string, message: Message) {
        this.img = img; 
        this.position = position;
        this.message = message;
    }
}