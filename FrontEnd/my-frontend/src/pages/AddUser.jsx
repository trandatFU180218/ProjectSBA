import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddUser.css";

function AddUser() {

    const getAuthHeader = () => {
        const token = localStorage.getItem("token");
        return {
            "Authorization": "Bearer " + token,
            "Content-Type": "application/json"
        };
    };

    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        role_id: "",
        status: ""
    });



    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };


    const handleSubmit = async (e) => {

        e.preventDefault();

        if (user.password !== user.confirmPassword) {
            alert("Mật khẩu không giống nhau");
            return;
        }

        const { confirmPassword, role_id, ...rest } = user;

        const userData = {
            ...rest,
            role: {
                id: Number(role_id)
            }
        };

        const res = await fetch("http://localhost:8080/backend/admin/user", {
            method: "POST",
            headers: getAuthHeader(),
            body: JSON.stringify(userData)
        });

        if (res.ok) {
            alert("Add user success");
            navigate("/admin/user");
        } else {
            alert("Add user failed");
        }
    };

    return (

        <div className="add-user">

            <h1>Add User</h1>

            <form onSubmit={handleSubmit} className="user-form">

                <input
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                    required
                />

                <input
                    name="email"
                    placeholder="Email"
                    type="email"
                    onChange={handleChange}
                    required
                />

                <input
                    name="phone"
                    placeholder="Phone"
                    onChange={handleChange}
                    required
                />

                <input
                    name="password"
                    placeholder="Password"
                    type="password"
                    onChange={handleChange}
                    required
                />
                <input
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    type="password"
                    onChange={handleChange}
                    required
                />

                <select
                    name="role_id"
                    onChange={handleChange}
                    required
                >
                    <option value="">Select Role</option>
                    <option value="1">Admin</option>
                    <option value="2">Librarian</option>
                    <option value="3">User</option>

                </select>

                <select
                    name="status"
                    onChange={handleChange}
                    required
                >

                    <option value="">Select Status</option>
                    <option value="1">ACTIVE</option>
                    <option value="2">BANNED</option>

                </select>

                <div className="form-buttons">

                    <button type="submit" className="save-btn">
                        Save
                    </button>

                    <button
                        type="button"
                        onClick={() => navigate("/admin/user")}
                    >
                        Cancel
                    </button>

                </div>

            </form>

        </div>
    );
}

export default AddUser;