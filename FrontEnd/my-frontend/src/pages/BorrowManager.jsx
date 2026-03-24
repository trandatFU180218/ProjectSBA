import React, { useState, useEffect } from "react";
import { returnBook, getBorrowNotReturn } from "../api/axiosClient";
import { useNavigate } from "react-router-dom";
import "./BorrowManager.css";

function BorrowManager() {
    const [borrowDetail, setBorrowDetail] = useState([]);
    const [search, setSearch] = useState("");
    const userId = localStorage.getItem("userId"); // có thể không dùng, tùy API
    const navigate = useNavigate();

    useEffect(() => {
        loadBorrowNotReturn();
    }, []);

    const getAuthHeader = () => {
        const token = localStorage.getItem("token");
        return {
            "Authorization": "Bearer " + token,
            "Content-Type": "application/json"
        };
    };

    const loadBorrowNotReturn = async () => {
        try {
            const res = await getBorrowNotReturn(); 
            setBorrowDetail(res);
        } catch (err) {
            console.error("Lỗi tải sách đã mượn:", err);
        }
    };

    const handleReturn = async (borrowDetailId) => {
        if (!window.confirm("Xác nhận trả sách này?")) return;

        try {
            await returnBook(borrowDetailId);
            alert("Trả sách thành công!");
            loadBorrowNotReturn();
        } catch (err) {
            alert("Không thể trả sách: " + (err.response?.data?.message || "Lỗi hệ thống"));
        }
    };

    const filteredBooks = borrowDetail.filter(borrowDetail =>
        borrowDetail.copy.book.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="borrow-manager">
            <h2>Quản lý sách chưa trả</h2>

            <button className="back-btn" onClick={() => navigate("/admin/home")}>
                ← Quay lại
            </button>

            <div className="search-box">

                <input
                    placeholder="Search book title..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

            </div>

            {borrowDetail.length === 0 ? (
                <p className="no-data">Hiện không có sách nào đang được mượn chưa trả</p>
            ) : (
                <div className="table-wrapper">
                    <table className="borrow-table">
                        <thead>
                            <tr>
                                <th>Borrow ID</th>
                                <th>Tên sách</th>
                                <th>Copy ID</th>
                                <th>User ID</th>
                                <th>Tên người mượn</th>
                                <th>Ngày mượn</th>
                                <th>Hạn trả</th>
                                <th>Trả sách</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredBooks.map((b) => (
                                <tr key={b.id}>
                                    <td data-label="Borrow ID">{b.borrow?.id || "-"}</td>
                                    <td data-label="Tên sách">{b.copy?.book?.title || "N/A"}</td>
                                    <td data-label="Copy ID">{b.copy?.id || "-"}</td>
                                    <td data-label="User ID">{b.borrow?.user?.id || "-"}</td>
                                    <td data-label="Tên người mượn">{b.borrow?.user?.name || "N/A"}</td>
                                    <td data-label="Ngày mượn">
                                        {b.borrow?.borrow_date
                                            ? new Date(b.borrow.borrow_date).toLocaleDateString("vi-VN")
                                            : "-"}
                                    </td>
                                    <td data-label="Hạn trả">
                                        {b.borrow?.due_date
                                            ? new Date(b.borrow.due_date).toLocaleDateString("vi-VN")
                                            : "-"}
                                    </td>
                                    <td data-label="Trả sách">
                                        <button
                                            className="action-btn"
                                            onClick={() => handleReturn(b.id)}
                                        >
                                            Trả sách
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default BorrowManager;