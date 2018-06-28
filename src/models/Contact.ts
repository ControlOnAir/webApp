import { IContact } from './Conversation';

export class Contact implements IContact {
    public id: string;
    public name: string;
    public number: string;

    constructor(name, number) {
        this.name = name;
        this.number = number;
    }
}