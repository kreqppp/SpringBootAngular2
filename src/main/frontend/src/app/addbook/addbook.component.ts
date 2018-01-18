import { Component, OnInit } from '@angular/core';
import {Book} from "../book/book.model";
import {BookService} from "../book.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BookComponent} from "../book/book.component";
import * as webdriver from "selenium-webdriver";

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  statusCode: number;
  requestProcessing = false;
  processValidation = false;

  bookForm = new FormGroup({
    title: new FormControl('', Validators.required),
    author: new FormControl('', Validators.required),
    genre: new FormControl('', Validators.required),
    yearOfPublication: new FormControl('', Validators.required)
  });

  constructor(private bookService: BookService) { }

  ngOnInit() {
  }

  //submit book
  onBookFormSubmit() {
    this.processValidation = true;
    this.preProcessConfigurations();
    let title = this.bookForm.get('title').value.trim();
    let author = this.bookForm.get('author').value.trim();
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
