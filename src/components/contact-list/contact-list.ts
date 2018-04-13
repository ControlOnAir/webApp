import { Component, Input } from '@angular/core';
import { Author } from '../../models/Author';
import { ContactProvider } from '../../providers/contact/contact';

@Component({
  selector: 'contact-list',
  templateUrl: 'contact-list.html'
})
export class ContactListComponent {
  @Input() ItemClick: (item: Author) => void;
  @Input() Provider: (filter: string, page: number) => void;

  public page: number;
  public filter: string;

  constructor(public contactProvider: ContactProvider) {

  }

  ContactClicked(item: Author) {

  }

  doInfinite(event) {
    this.page++;
    this.Provider(this.filter, this.page);
  }
}
