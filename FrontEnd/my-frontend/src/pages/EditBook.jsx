import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./AddBook.css";

function EditBook() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [cate, setCate] = useState([]);

    const [book, setBook] = useState({
        title: "",
        author: "",
        publisher: "",
        publishYear: "",
        isbn: "",
        category: "",
        description: "",
        imageUrl: ""
    });
    const getAuthHeader = () => {
        const token = localStorage.getItem("token");
        return {
            "Authorization": "Bearer " + token,
            "Content-Type": "application/json"
        };
    };

    // load category
    const fetchCategory = async () => {
        const res = await fetch("http://localhost:8080/backend/categories",
            {
                method: "GET",
                headers: getAuthHeader()
            }
        );
        const data = await res.json();
        setCate(data);
    };

    // load book detail
    const fetchBook = async () => {
        const res = await fetch(`http://localhost:8080/backend/books/${id}`,
            {
                method: "GET",
                headers: getAuthHeader()
            }
        );
        const data = await res.json();

        setBook({
            title: data.title,
            author: data.author,
            publisher: data.publisher,
            publishYear: data.publishYear,
            isbn: data.isbn,
            category: data.category?.id,
            description: data.description,
            imageUrl: data.imageUrl
        });
    };

    useEffect(() => {
        fetchCategory();
        fetchBook();
    }, []);

    const handleChange = (e) => {
        setBook({
            ...book,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const bookData = {
            ...book,
            category: {
                id: Number(book.category)
            }
        };

        const res = await fetch(`http://localhost:8080/backend/admin/book/${id}`, {
            method: "PUT",
            headers: getAuthHeader(),
            body: JSON.stringify(bookData)
        });

        if (res.ok) {
            alert("Update success");
            navigate("/admin/book");
        } else {
            alert("Update failed");
        }
    };

    return (

        <div className="add-book">

            <h1>Edit Book</h1>

            <form onSubmit={handleSubmit} className="book-form">

                <input name="title" value={book.title} onChange={handleChange} />

                <input name="author" value={book.author} onChange={handleChange} />

                <input name="publisher" value={book.publisher} onChange={handleChange} />

                <input
                    name="publishYear"
                    type="number"
                    value={book.publishYear}
                    onChange={handleChange}
                />

                <input name="isbn" value={book.isbn} onChange={handleChange} />

                <select name="category" value={book.category} onChange={handleChange}>
                    <option value="">Select Category</option>

                    {cate.map((cat) => (
                        <option key={cat.id} value={cat.id}>
                            {cat.name}
                        </option>
                    ))}
                </select>

                <input
                    name="imageUrl"
                    value={book.imageUrl}
                    onChange={handleChange}
                />

                <textarea
                    name="description"
                    value={book.description}
                    onChange={handleChange}
                />

                <div className="form-buttons">

                    <button type="submit" className="save-btn">
                        Update
                    </button>

                    <button type="button" onClick={() => navigate("/admin/book")}>
                        Cancel
                    </button>

                </div>

            </form>

        </div>
    );
}

export default EditBook;