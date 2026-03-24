import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddBook.css";

function AddBook() {

    const [cate, setCate] = useState([]);

    const navigate = useNavigate();
    const getAuthHeader = () => {
        const token = localStorage.getItem("token");
        return {
            "Authorization": "Bearer " + token,
            "Content-Type": "application/json"
        };
    };

    const ApiCate = `http://localhost:8080/backend/categories`;

    const fetchCategory = async () => {
        try {
            const res = await fetch(ApiCate, {
                headers: getAuthHeader()
            });
            const data = await res.json();
            setCate(data);
        } catch (error) {
            console.log("loi fetch cate", error);
        }
    }

    useEffect(() => {
        fetchCategory();
    }, []);

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

        const res = await fetch("http://localhost:8080/backend/admin/book", {
            method: "POST",
            headers: getAuthHeader(),
            body: JSON.stringify(bookData)
        });

        if (res.ok) {
            alert("Add book success");
            navigate("/admin/book");
        } else {
            alert("Add book failed");
        }
    };

    return (

        <div className="add-book">

            <h1>Add Book</h1>

            <form onSubmit={handleSubmit} className="book-form">

                <input
                    name="title"
                    placeholder="Title"
                    onChange={handleChange}
                    required
                />

                <input
                    name="author"
                    placeholder="Author"
                    onChange={handleChange}
                    required
                />

                <input
                    name="publisher"
                    placeholder="Publisher"
                    onChange={handleChange}
                />

                <input
                    name="publishYear"
                    placeholder="Publish Year"
                    type="number"
                    onChange={handleChange}
                />

                <input
                    name="isbn"
                    placeholder="ISBN"
                    onChange={handleChange}
                />

                <select
                    name="category"
                    onChange={handleChange}
                    required>
                    <option value="">Select Category</option>
                    {cate.map((cat) => (
                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                    ))}
                </select>

                <input
                    name="imageUrl"
                    placeholder="Image URL"
                    onChange={handleChange}
                />

                <textarea
                    name="description"
                    placeholder="Description"
                    onChange={handleChange}
                />

                <div className="form-buttons">

                    <button type="submit" className="save-btn">
                        Save
                    </button>

                    <button
                        type="button"
                        onClick={() => navigate("/admin/book")}
                    >
                        Cancel
                    </button>

                </div>

            </form>

        </div>
    );
}

export default AddBook;