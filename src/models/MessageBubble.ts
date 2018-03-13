export class MessageBubble {
    img: string;
    position: string;
    content: string;
    senderName: string;
    time: string;

    constructor(img: string, position: string, content: string, sender: string, time: string) {
        this.img = img; 
        this.position = position;
        this.content = content;
        this.senderName = sender;
        this.time = time;
    }
}