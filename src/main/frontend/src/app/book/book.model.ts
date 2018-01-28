import {Author} from "../author/author.model";

export class Book{
  constructor(public id: number,
              public title: string,
              public author: Author,
              public genre: string,
              public yearOfPublication: number){}
}
