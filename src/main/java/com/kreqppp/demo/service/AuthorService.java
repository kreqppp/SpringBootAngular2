package com.kreqppp.demo.service;

import com.kreqppp.demo.dao.AuthorDao;
import com.kreqppp.demo.dao.AuthorDaoImpl;
import com.kreqppp.demo.model.Author;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthorService {

    @Autowired
    private AuthorDao authorDao;

    public Iterable<Author> getAllAuthors(){
        return authorDao.findAll();
    }

    public void createAuthor(Author author){
        authorDao.save(author);
    }

    public Author getAuthorById(Long idAuthor){
        return authorDao.findOne(idAuthor);
    }

    public void updateAuthors(Author author){
        authorDao.saveAndFlush(author);
    }

    public void setAuthorDao(AuthorDao authorDao) {
        this.authorDao = authorDao;
    }
}
