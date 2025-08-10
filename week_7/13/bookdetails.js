import React from 'react';

export default function BookDetails({ books }) {
  if (!books || books.length === 0) {
    return <p>No books available.</p>;
  }

  // Using map() with keys
  return (
    <ul>
      {books.map((book) => (
        <div key={book.id}>
          <h3>{book.bname}</h3>
          <h4>Rs. {book.price}</h4>
        </div>
      ))}
    </ul>
  );
}
