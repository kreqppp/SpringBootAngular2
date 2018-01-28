import { Component, OnInit } from '@angular/core';
import {Book} from "../book/book.model";
import {BookService} from "../book.service";
import {FormControl, FormGroup, NgSelectOption, SelectControlValueAccessor, Validators} from "@angular/forms";
import {BookComponent} from "../book/book.component";
import * as webdriver from "selenium-webdriver";
import {Author} from "../author/author.model";
import {AuthorService} from "../author.service";
import {selector} from "rxjs/operator/publish";
import {visitValue} from "@angular/compiler/src/util";

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  authors: Author[];
  value: string;

  selectedObject: Author;

  statusCode: number;
  requestProcessing = false;
  processValidation = false;

  bookForm = new FormGroup({
    title: new FormControl('', Validators.required),
    author: new FormControl('', Validators.required),
    genre: new FormControl('', Validators.required),
    yearOfPublication: new FormControl('', Validators.required)
  });

  constructor(private bookService: BookService, private authorService: AuthorService) { }

  ngOnInit() {
    this.authorService.getAllAuthors()
        .subscribe(
            data => this.authors = data,
            errorCode =>  this.statusCode = errorCode);
  }

    updateObjValue3(event:Event):void {
        this.value = (<HTMLSelectElement>event.srcElement).value;
        console.log(this.value);
    }

  //submit book
  onBookFormSubmit() {
    this.processValidation = true;
    this.preProcessConfigurations();
    let title = this.bookForm.get('title').value.trim();
    let author = this.authors[Number(this.value)-1];
    let genre = this.bookForm.get('genre').value.trim();
    let yearOfPublication = this.bookForm.get('yearOfPublication').value.trim();
      let book = new Book(null, title, author, genre, yearOfPublication);
      this.bookService.createBook(book)
        .subscribe(successCode => {
            this.statusCode = successCode;
            //this.getAllBooks(); <-- розібратись із цим
            this.backToCreateBook();
          },
          errorCode => this.statusCode = errorCode);
      this.authorService.updateAuthor(this.authors[Number(this.value)-1], book);
    }




  preProcessConfigurations() {
    this.statusCode = null;
    this.requestProcessing = true;
  }

  backToCreateBook() {
    this.bookForm.reset();
    this.processValidation = false;
  }
}
