import React, { useEffect, useState } from "react";
import { getBooks, borrowBook } from "../api/axiosClient";

function Books() {

  const [books, setBooks] = useState([]);

  const userId = 1;

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = async () => {
    const res = await getBooks();
    setBooks(res.data);
  };

  const handleBorrow = async (bookId) => {
    await borrowBook(userId, bookId);
    alert("Borrow success");
  };

  return (
    <div>
      <h2>Books</h2>

      {books.map((b) => (
        <div key={b.id} style={{border:"1px solid gray", margin:"10px", padding:"10px"}}>
          <h3>{b.title}</h3>
          <p>{b.author}</p>

          <button onClick={() => handleBorrow(b.id)}>
            Borrow
          </button>
        </div>
      ))}

    </div>
  );
}

export default Books;