package com.kreqppp.demo.dao;

import com.kreqppp.demo.model.Author;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;
import java.util.List;



public class AuthorDaoImpl {
/*
    @PersistenceContext
    private EntityManager entityManager;

    @Autowired
    private SessionFactory sessionFactory;

    @Override
    public List<Author> getAllAuthors() {
        Session session = sessionFactory.getCurrentSession();
        CriteriaBuilder cb = session.getCriteriaBuilder();
        CriteriaQuery<Author> cq = cb.createQuery(Author.class);
        Root<Author> root = cq.from(Author.class);
        cq.select(root);
        Query<Author> query = session.createQuery(String.valueOf(cq));
        return query.list();
    }

    @Override
    public void createAuthor(Author author) {
        entityManager.persist(author);
    }

    @Override
    public Author getAuthorById(int authorId) {
        return entityManager.find(Author.class, authorId);
    }

    @Override
    public void updateAuthor(Author author) {
        Author auth = getAuthorById(author.getId());
        auth.setBooks(author.getBooks());
        entityManager.flush();
    }
*/
}
