import React from "react";
import BookContext from "./BookContext"

const BookProvider = (props) => {
    const books = [
      {
        id: "72b95ecc-4408-41b4-a93c-bf74b9276165",
        book: "Leviathan Wakes",
        author: "James S. A. Corey",
        price: 20,
      },
      {
        id: "c02d1af4-2c3e-48ef-a694-0b43cd91ff11",
        book: "I am Legend",
        author: "Richard Matheson",
        price: 10,
      },
      {
        id: "dc7d2c7b-ee69-403a-97d4-994f9127af46",
        book: "Foundation's Edge",
        author: "Isaac Asimov",
        price: 15,
      },
    ];
    return (
      <BookContext.Provider value={[books]}>
        {props.children}
      </BookContext.Provider>
    );
  };

  export default BookProvider
  