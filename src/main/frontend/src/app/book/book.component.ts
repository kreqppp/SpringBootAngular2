import { Component, OnInit } from '@angular/core';
import {BookService} from "../book.service";
import {Book} from "./book.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books : Book[];
  statusCode: number;
  requestProcessing = false;
  processValidation = false;


  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getAllBooks();
  }

  //Fetch all books
  getAllBooks() {
    this.bookService.getAllBooks()
      .subscribe(
        data => this.books = data,
        errorCode =>  this.statusCode = errorCode);
  }
  /*
  onBookFormSubmit(){
    this.processValidation = true;
    this.preProcessConfigurations();
    let title = this.bookForm.get('title').value.trim();
    let book = new Book(null, title);
    this.bookService.createBook(book)
      .subscribe(successCode => {
          this.statusCode = successCode;
          this.getAllBooks();
          this.backToCreateArticle();
        },
        errorCode => this.statusCode = errorCode);
  }

  preProcessConfigurations() {
    this.statusCode = null;
    this.requestProcessing = true;
  }

  backToCreateArticle() {
    this.bookForm.reset();
    this.processValidation = false;
  }*/
}
