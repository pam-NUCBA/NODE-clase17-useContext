import React from "react";

const Book = ({ author, price, book }) => {
  return (
    <>
      <h2>{book}</h2>
      <p>{author}</p>
      <p>$ {price}</p>
    </>
  );
};

export default Book;
