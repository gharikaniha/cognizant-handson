package com.library;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@ComponentScan("com.library")
public class LibraryApp {
    public static void main(String[] args) {
        ApplicationContext context = new AnnotationConfigApplicationContext(LibraryApp.class);
        BookService bookService = context.getBean(BookService.class);

        bookService.issueBook("The Mahabharata");
        bookService.returnBook("The Mahabharata");
    }
}
