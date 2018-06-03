import { Message } from "./Message";
import { Author } from './Author';
import moment, { Moment } from "moment";

export class Conversation {
    //id = phone number
    public id: string;
    public timestamp: Moment;
    public lastMessage: string;

    constructor() {
        this.id = "";
        this.timestamp = moment();
        this.lastMessage = "";
    }
}