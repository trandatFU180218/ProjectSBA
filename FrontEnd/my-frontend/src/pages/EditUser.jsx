import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./EditUser.css";

function EditUser() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        role_id: "",
        status: ""
    });

    const getAuthHeader = () => {
        const token = localStorage.getItem("token");
        return {
            "Authorization": "Bearer " + token,
            "Content-Type": "application/json"
        };
    };

    useEffect(() => {
        fetch(`http://localhost:8080/backend/admin/user/${id}`,
            {
                method: "GET",
                headers: getAuthHeader(),
            }
        )
            .then(res => res.json())
            .then(data => setUser(data))
    }, [id]);

    const handleChange = (e) => {

        const { name, value } = e.target;

        setUser({
            ...user,
            [name]: name === "role_id" ? Number(value) : value
        });

    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch(`http://localhost:8080/backend/admin/user/${id}`, {
            method: "PUT",
            headers:getAuthHeader(),
            body: JSON.stringify(user)
        });

        if (res.ok) {
            alert("Update success");
            navigate("/admin/user");
        } else {
            alert("Update failed");
        }
    }

    return (

        <div className="edit-user-container">

            <h2>Edit User</h2>

            <form onSubmit={handleSubmit} className="edit-user-form">

                <input
                    name="name"
                    value={user.name}
                    readOnly
                />

                <input
                    name="email"
                    value={user.email}
                    readOnly
                />

                <input
                    name="phone"
                    value={user.phone}
                    readOnly
                />

                <select name="role_id" value={user.role_id} onChange={handleChange}>
                    <option value="1">Admin</option>
                    <option value="2">Librarian</option>
                    <option value="3">User</option>
                </select>

                <select name="status" value={user.status} onChange={handleChange}>
                    <option value="1">ACTIVE</option>
                    <option value="2">BANNED</option>
                </select>

                <div className="form-buttons">
                    <button type="submit" className="update-btn">Update</button>

                    <button
                        type="button"
                        className="cancel-btn"
                        onClick={() => navigate("/admin/user")}
                    >
                        Cancel
                    </button>
                </div>

            </form>

        </div>
    )

}

export default EditUser;