import { Injectable } from '@angular/core';

@Injectable()
export class MessageProvider {

  constructor() {
    
  }

  public GetDiscussionList(paging: number) {
    return [{name: "john",messages: ["lol","test"]},{name: "ricardo", messages: ["test2","U NOE DA WAE"]}];
  }
}
