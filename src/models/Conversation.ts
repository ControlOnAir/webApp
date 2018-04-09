import { Message } from "./Message";
import { Author } from './Author';
import moment, { Moment } from "moment";

export class Conversation {
    public id: number;
    public messages: Message[];
    public contact: Author;
    public timestamp: Moment;
}