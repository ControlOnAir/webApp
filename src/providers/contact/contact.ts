import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ContactProvider {

  constructor(public http: Http) {
  }
}
