import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthorService} from "../author.service";
import {Book} from "../book/book.model";
import {Author} from "../author/author.model";

@Component({
  selector: 'app-addauthor',
  templateUrl: './addauthor.component.html',
  styleUrls: ['./addauthor.component.css']
})
export class AddauthorComponent implements OnInit {

  statusCode: number;
  requestProcessing = false;
  processValidation = false;
  books : Book[];

  authorForm = new FormGroup({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    books: new FormControl('', Validators.required)
  });

  constructor(private authorService: AuthorService) { }

  ngOnInit() {
  }

  //submit book
  onAuthorFormSubmit() {
    this.processValidation = true;
    this.preProcessConfigurations();
    let firstname = this.authorForm.get('firstname').value.trim();
    let lastname = this.authorForm.get('lastname').value.trim();
    let author = new Author(null, firstname, lastname, this.books);
    this.authorService.createAuthor(author)
      .subscribe(successCode => {
          this.statusCode = successCode;
          this.backToCreateAuthor();
        },
        errorCode => this.statusCode = errorCode);
  }


  preProcessConfigurations() {
    this.statusCode = null;
    this.requestProcessing = true;
  }

  backToCreateAuthor() {
    this.authorForm.reset();
    this.processValidation = false;
  }
}
