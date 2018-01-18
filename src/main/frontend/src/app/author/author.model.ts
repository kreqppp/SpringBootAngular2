import {Book} from "../book/book.model";

export class Author{
  constructor(public id: number,
              public firstname: string,
              public lastname: string,
              public books: Book[]){}
}
