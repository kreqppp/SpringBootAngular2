package com.kreqppp.demo.controllers;

import com.kreqppp.demo.model.Book;
import com.kreqppp.demo.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.List;

@RestController
@RequestMapping("user")
@CrossOrigin(origins = "http://localhost:4200")
public class BookController {

    @Autowired
    private BookService bookService;

    @GetMapping("all-books")
    public ResponseEntity<List<Book>> getAllBooks() {
        Iterable<Book> list = bookService.getAllBooks();
        return new ResponseEntity<List<Book>>((List<Book>) list, HttpStatus.OK);
    }

    @PostMapping("book")
    public ResponseEntity<Void> createBook(@RequestBody Book book, UriComponentsBuilder builder) {
        bookService.createBook(book);
        HttpHeaders headers = new HttpHeaders();
        return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
    }


    public void setBookService(BookService bookService) {
        this.bookService = bookService;
    }
}
