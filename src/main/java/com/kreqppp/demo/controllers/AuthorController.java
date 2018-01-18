package com.kreqppp.demo.controllers;

import com.kreqppp.demo.model.Author;
import com.kreqppp.demo.service.AuthorService;
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
public class AuthorController {

    @Autowired
    private AuthorService authorService;

    //get All Authors
    @GetMapping("all-authors")
    public ResponseEntity<List<Author>> getAllAuthors() {
        Iterable<Author> list = authorService.getAllAuthors();
        return new ResponseEntity<List<Author>>((List<Author>) list, HttpStatus.OK);
    }

    //Create Author
    @PostMapping("author")
    public ResponseEntity<Void> createBook(@RequestBody Author author, UriComponentsBuilder builder) {
        authorService.createAuthor(author);
        HttpHeaders headers = new HttpHeaders();
        return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
    }

    //update Author
    @PutMapping("author")
    public ResponseEntity<Author> updateArticle(@RequestBody Author author) {
        authorService.updateAuthors(author);
        return new ResponseEntity<Author>(author, HttpStatus.OK);
    }

    public void setAuthorService(AuthorService authorService) {
        this.authorService = authorService;
    }
}
