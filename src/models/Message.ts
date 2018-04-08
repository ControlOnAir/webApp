import { Author } from './Author';
export class Message {
    public author: Author;
    public body: string;

    constructor(author, body) {
        this.author = author;
        this.body = body;
    }
}