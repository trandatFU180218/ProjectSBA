import React, { useEffect, useState } from "react";
import { getMyBooks, returnBook } from "../api/axiosClient";

function MyBooks() {

  const [books, setBooks] = useState([]);

  const userId = 1;

  useEffect(() => {
    loadMyBooks();
  }, []);

  const loadMyBooks = async () => {
    const res = await getMyBooks(userId);
    setBooks(res.data);
  };

  const handleReturn = async (borrowDetailId) => {
    await returnBook(borrowDetailId);
    alert("Return success");
    loadMyBooks();
  };

  return (
    <div>

      <h2>My Books</h2>

      {books.map((b) => (
        <div key={b.borrowDetailId} style={{border:"1px solid gray", margin:"10px", padding:"10px"}}>

          <h3>{b.title}</h3>

          <p>Author: {b.author}</p>

          <p>Borrow Date: {b.borrowDate}</p>

          <p>Due Date: {b.dueDate}</p>

          <button onClick={() => handleReturn(b.borrowDetailId)}>
            Return
          </button>

        </div>
      ))}

    </div>
  );
}

export default MyBooks;