package com.library;

import org.springframework.stereotype.Service;

@Service
public class BookService {
    public void issueBook(String bookName) {
        System.out.println("Issued book: " + bookName);
    }

    public void returnBook(String bookName) {
        System.out.println("Returned book: " + bookName);
    }
}
