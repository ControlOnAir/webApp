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
  @Input() ItemClick: (item: AngularFireAction<DataSnapshot>) => void;

  //currently not used, will be when filtering will be implemented
  @Input() Provider: (filter: string, page: number) => void;

  public page: number;
  public filter: string;

  constructor(public contactProvider: ContactProvider) {

  }

  ContactClicked(item: AngularFireAction<DataSnapshot>) {
    this.ItemClick(item);
  }

  GetName(item: AngularFireAction<DataSnapshot>): string {
    return item.payload.toJSON()["name"];
  }

  doInfinite(event) {
    this.page++;
    this.Provider(this.filter, this.page);
  }
}
