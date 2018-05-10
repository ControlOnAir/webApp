import { Author } from './Author';
import moment, { Moment } from "moment";

export class Message {
    public id: number;
    public author: string;
    public body: string;
    public timestamp: string;

    constructor(author, body) {
        this.author = author;
        this.body = body;
        this.timestamp = moment().toISOString();
    }
}