export class Contact {

    public id: number;
    public Name: string;
    public Phonenumber: string;

    constructor(name: string, phonenumber: string, Id: number) {
        this.Name = name;
        this.Phonenumber = phonenumber;
        this.id = Id;
    }
}