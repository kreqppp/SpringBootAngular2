import { Injectable } from '@angular/core';
import {Http, RequestOptions, Response, Headers} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Book} from "./book/book.model";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class BookService {

  allBooksUrl = "http://localhost:8080/user/all-books";
  bookUrl = "http://localhost:8080/user/book";

  constructor(private http: Http) {
  }
  //get all books
  getAllBooks(): Observable<Book[]> {
    return this.http.get(this.allBooksUrl)
      .map(this.extractData)
      .catch(this.handleError);

  }
  //create new book
  createBook(book : Book):Observable<number>{
    let header = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: header });
    return this.http.post(this.bookUrl, book, options)
      .map(success => success.status)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body;
  }

  private handleError (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.status);
  }
}
