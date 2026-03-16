import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminHome.css";

function AdminHome() {

    const [stats, setStats] = useState({});
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("role");
        navigate("/");
    }

    useEffect(() => {

        const role = localStorage.getItem("role");

        // chặn user thường
        if (role !== "1") {
            navigate("/Home");
            return;
        }

        fetch("http://localhost:8080/backend/dash-board")
            .then(res => res.json())
            .then(data => setStats(data))
            .catch(err => console.log(err));

    }, []);

    return (
        <div className="admin-container">
            <div className="admin-header">
                <h1>Admin Dashboard</h1>
                <button className="logout-btn" onClick={handleLogout}>
                    Logout
                </button>
            </div>

            <div className="dashboard-cards">

                <div className="card">
                    <h3>Total Books</h3>
                    <p>{stats.totalBooks}</p>
                </div>

                <div className="card">
                    <h3>Total Copies</h3>
                    <p>{stats.totalCopies}</p>
                </div>

                <div className="card">
                    <h3>Total Users</h3>
                    <p>{stats.totalUsers}</p>
                </div>

                <div className="card">
                    <h3>Borrowed Books</h3>
                    <p>{stats.borrowedBooks}</p>
                </div>

                <div className="card">
                    <h3>Total Fines</h3>
                    <p>{stats.totalFines}</p>
                </div>

            </div>

            <div className="admin-menu">

                <button onClick={() => navigate("/AdminBook")}>
                    Manage Books
                </button>

                <button onClick={() => navigate("/AdminUser")}>
                    Manage Users
                </button>

                <button onClick={() => navigate("/admin/borrows")}>
                    Manage Borrows
                </button>

                <button onClick={() => navigate("/admin/fines")}>
                    Manage Fines
                </button>

            </div>

        </div>
    );
}

export default AdminHome;