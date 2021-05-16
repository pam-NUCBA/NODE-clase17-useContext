import React, { useContext } from "react";
import Book from "./Book";
import BookContext from "../context/BookContext";

const BooksList = () => {
  const [books] = useContext(BookContext);

  return (
    <>
      <ul>
        {books.map((book) => (
          <Book
            key={book.id}
            author={book.author}
            price={book.price}
            book={book.book}
          />
        ))}
      </ul>
    </>
  );
};

export default BooksList;
