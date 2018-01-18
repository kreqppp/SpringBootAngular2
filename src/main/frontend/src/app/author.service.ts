import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Author} from "./author/author.model";

@Injectable()
export class AuthorService {

  allAuthorsUrl = "http://localhost:8080/user/all-authors";
  authorUrl = "http://localhost:8080/user/author";

  constructor(private http: Http) { }

  //get all authors
  getAllAuthors(): Observable<Author[]> {
    return this.http.get(this.allAuthorsUrl)
      .map(this.extractData)
      .catch(this.handleError);

  }

  //create new author
  createAuthor(author: Author):Observable<number>{
    let header = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: header });
    return this.http.post(this.authorUrl, author, options)
      .map(success => success.status)
      .catch(this.handleError);
  }

  //update athor
  updateArticle(author: Author):Observable<number> {
    let cpHeaders = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: cpHeaders});
    return this.http.put(this.authorUrl, author, options)
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
