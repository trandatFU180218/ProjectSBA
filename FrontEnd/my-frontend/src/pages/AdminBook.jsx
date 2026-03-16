import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminBook.css";

function AdminBooks() {

    const navigate = useNavigate();

    const [books, setBooks] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {

        const role = localStorage.getItem("role");

        if (role !== "1") {
            navigate("/Home");
            return;
        }

        fetchBooks();

    }, []);

    const fetchBooks = () => {

        fetch("http://localhost:8080/backend/admin-book")
            .then(res => res.json())
            .then(data => setBooks(data))
            .catch(err => console.log(err));
    };

    const deleteBook = (id) => {

        if (!window.confirm("Delete this book?")) return;

        fetch(`http://localhost:8080/backend/admin-book/${id}`, {
            method: "DELETE"
        })
        .then(() => fetchBooks());
    };

    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(search.toLowerCase())
    );

    return (

        <div className="admin-books">

            <div className="admin-header">

                <h1>Manage Books</h1>

                <div>

                    <button
                        className="add-btn"
                        onClick={() => navigate("/AddBook")}
                    >
                        + Add Book
                    </button>

                    <button
                        onClick={() => navigate("/Admin")}
                    >
                        Back
                    </button>

                </div>

            </div>

            <div className="search-box">

                <input
                    placeholder="Search book title..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

            </div>

            <table>

                <thead>

                    <tr>
                        <th>ID</th>
                        <th>Category</th>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Publisher</th>
                        <th>Year</th>
                        <th>ISBN</th>
                        <th>Created At</th>
                        <th>Action</th>
                    </tr>

                </thead>

                <tbody>

                    {filteredBooks.map(book => (

                        <tr key={book.id}>

                            <td>{book.id}</td>

                            <td>{book.category.name}</td>

                            <td>
                                <img
                                    src={book.imageUrl}
                                    alt=""
                                    width="50"
                                />
                            </td>

                            <td>{book.title}</td>

                            <td>{book.author}</td>

                            <td>{book.publisher}</td>

                            <td>{book.publishYear}</td>

                            <td>{book.isbn}</td>

                            <td>{book.createdAt}</td>

                            <td>

                                <button
                                    className="edit-btn"
                                    onClick={() =>
                                        navigate(`/EditBook/${book.id}`)
                                    }   
                                >
                                    Edit
                                </button>

                                <button
                                    className="delete-btn"
                                    onClick={() => deleteBook(book.id)}
                                >
                                    Delete
                                </button>

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    );
}

export default AdminBooks;