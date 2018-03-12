import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MessageProvider {

  constructor(public http: Http) {
    
  }

  public GetDiscussionList(paging: number) {
    return [{name: "john",messages: ["lol","test"]},{name: "ricardo", messages: ["test2","U NOE DA WAE"]}];
  }
}
