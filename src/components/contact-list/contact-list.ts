import { Component, Input } from '@angular/core';
import { Author } from '../../models/Author';
import { ContactProvider } from '../../providers/contact/contact';
import { AngularFireAction } from 'angularfire2/database';
import { DataSnapshot } from '@firebase/database-types';

@Component({
  selector: 'contact-list',
  templateUrl: 'contact-list.html'
})
export class ContactListComponent {
  @Input() ItemClick: (item: Author) => void;

  //currently not used, will be when filtering will be implemented
  @Input() Provider: (filter: string, page: number) => void;

  public page: number;
  public filter: string;

  constructor(public contactProvider: ContactProvider) {

  }

  ContactClicked(item: Author) {
    this.ItemClick(item);
  }

  doInfinite(event) {
    this.page++;
    this.Provider(this.filter, this.page);
  }
}
