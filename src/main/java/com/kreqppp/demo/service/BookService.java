package com.kreqppp.demo.service;


import com.kreqppp.demo.dao.BookDao;
import com.kreqppp.demo.model.Book;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService {

    @Autowired
    private BookDao bookDao;

    public Iterable<Book> getAllBooks(){
        return bookDao.findAll();
    }

    public void createBook(Book book){
        synchronized (book){
            bookDao.save(book);
        }
    }

    public void setBookDao(BookDao bookDao) {
        this.bookDao = bookDao;
    }
}
