import { Author } from './Author';
import moment, { Moment } from "moment";

export class Message {
    public id: number;
    public author: Author;
    public body: string;
    public timestamp: Moment;

    constructor(author, body) {
        this.author = author;
        this.body = body;
    }
}