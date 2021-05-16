import React, { useContext } from "react";
import BookContext from "../context/BookContext";

const HotSale = () => {
  const [books] = useContext(BookContext);

  return (
    <>
      <h2>Estos son nuestros libros en oferta</h2>
      <p>{books[2].book}</p>
      <p>{books[1].book}</p>
    </>
  );
};

export default HotSale;
