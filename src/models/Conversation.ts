import { Message } from "./Message";
import { Author } from './Author';
import moment, { Moment } from "moment";

export class Conversation {
    //id = phone number
    public id: number;
    public timestamp: Moment;
    public lastMessage: string;

    constructor() {
        this.id = -1;
        this.timestamp = moment();
        this.lastMessage = "";
    }
}