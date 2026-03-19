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
                            <td data-label="ID">{book.id}</td>
                            <td data-label="Category">{book.category?.name || "N/A"}</td>
                            <td data-label="Image">
                                <img src={book.imageUrl} alt={book.title} width="60" height="80" />
                            </td>
                            <td data-label="Title">{book.title}</td>
                            <td data-label="Author">{book.author}</td>
                            <td data-label="Publisher">{book.publisher}</td>
                            <td data-label="Year">{book.publishYear}</td>
                            <td data-label="ISBN">{book.isbn}</td>
                            <td data-label="Created At">
                                {book.createdAt ? new Date(book.createdAt).toLocaleDateString("vi-VN") : "-"}
                            </td>
                            <td data-label="Action">
                                <button
                                    className="edit-btn"
                                    onClick={() => navigate(`/EditBook/${book.id}`)}
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