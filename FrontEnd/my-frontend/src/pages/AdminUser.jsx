import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminUser.css";

function AdminUser() {

    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    const getRoleName = (role) => {
        if (role === 1) return "Admin";
        if (role === 2) return "Librarian";
        if (role === 3) return "User";
        return "Unknown";
    };

    const getStatus = (status) => {
        if (status === "1") return "ACTIVE";
        if (status === "2") return "BANNED";
    }

    const fetchUsers = async () => {
        const res = await fetch("http://localhost:8080/backend/admin-user");
        const data = await res.json();
        setUsers(data);
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    //

    const deleteUser = async (id) => {

        if (!window.confirm("Delete this user?")) return;

        const res = await fetch(`http://localhost:8080/backend/admin-user/${id}`, {
            method: "DELETE"
        });

        if (res.ok) {
            alert("Delete success");
            fetchUsers();
        }
    };

    return (

        <div className="admin-users">

            <div className="admin-header">

                <h1>Manage Users</h1>

                <div>

                    <button
                        className="add-btn"
                        onClick={() => navigate("/AddUser")}
                    >
                        + Add User
                    </button>

                    <button onClick={() => navigate("/Admin")}>
                        Back
                    </button>

                </div>

            </div>

            <table className="user-table">

                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Status</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>

                    {users.map((user) => (

                        <tr key={user.id}>

                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{getStatus(user.status)}</td>
                            <td>{getRoleName(user.role_id)}</td>

                            <td>

                                <button
                                    className="edit-btn"
                                    onClick={() => navigate(`/EditUser/${user.id}`)}
                                >
                                    Edit
                                </button>

                                <button
                                    className="delete-btn"
                                    onClick={() => deleteUser(user.id)}
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

export default AdminUser;