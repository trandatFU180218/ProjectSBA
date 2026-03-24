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
    const getAuthHeader = () => {
        const token = localStorage.getItem("token");
        return {
            "Authorization": "Bearer " + token,
            "Content-Type": "application/json"
        };
    };

    useEffect(() => {



        fetch("http://localhost:8080/backend/admin/dash-board",{
            headers: getAuthHeader()
        })
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

                <button onClick={() => navigate("/admin/book")}>
                    Manage Books
                </button>

                <button onClick={() => navigate("/admin/user")}>
                    Manage Users
                </button>

                <button onClick={() => navigate("/admin/borrow-manager")}>
                    Manage Borrows
                </button>

                <button onClick={() => navigate("/admin/fine-manager")}>
                    Manage Fines
                </button>

            </div>

        </div>
    );
}

export default AdminHome;