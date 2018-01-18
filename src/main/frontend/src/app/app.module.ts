import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import {BookService} from "./book.service";
import { AddbookComponent } from './addbook/addbook.component';
import {RouterModule} from "@angular/router";
import { AddauthorComponent } from './addauthor/addauthor.component';
import { AuthorComponent } from './author/author.component';
import {AuthorService} from "./author.service";

const routes = [
  {path: '', component: AddbookComponent},
  {path: 'addauthor', component: AddauthorComponent},
  {path: 'booktable', component: BookComponent},
  {path:'authortable', component: AuthorComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    AddbookComponent,
    AddauthorComponent,
    AuthorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [BookService, AuthorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
