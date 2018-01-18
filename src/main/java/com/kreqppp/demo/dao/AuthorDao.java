package com.kreqppp.demo.dao;

import com.kreqppp.demo.model.Author;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AuthorDao extends JpaRepository<Author, Long> {
   /* List<Author> getAllAuthors();
    void createAuthor(Author author);
    Author getAuthorById(int authorId);
    void updateAuthor(Author author);*/
}
