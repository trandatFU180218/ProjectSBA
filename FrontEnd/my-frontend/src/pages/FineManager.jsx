import React, { useEffect, useState } from "react";
import { getAllFine, paid } from "../api/axiosClient";
import { useNavigate } from "react-router-dom";
import "./FineManager.css";

function FineManager() {
    const [fines, setFines] = useState([]);
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        loadFines();
    }, []);

    const loadFines = async () => {
        try {
            const res = await getAllFine();
            setFines(res.data || []);
        } catch (err) {
            console.error("Lỗi load fines:", err);
        }
    };

    const handlePay = async (id) => {
        if (!window.confirm("Xác nhận thanh toán?")) return;

        try {
            await paid(id);
            alert("Thanh toán thành công!");
            loadFines();
        } catch (err) {
            alert("Lỗi thanh toán");
        }
    };

    const filtered = fines.filter(f =>
        f.borrowDetail?.borrow?.user?.name?.toLowerCase().includes(search.toLowerCase()) ||
        f.borrowDetail?.copy?.book?.title?.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="fine-manager">
            <h2>Quản lý tiền phạt</h2>
            <div>
                <button onClick={() => navigate("/Admin")}>← Quay lại</button>
            </div>
            <div className="search-box">
                <input
                    placeholder="Tìm theo tên người dùng hoặc tên sách..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            {fines.length === 0 ? (
                <p className="no-data">Hiện không có khoản phạt nào</p>
            ) : (
                <div className="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>User ID</th>
                                <th>Tên người dùng</th>
                                <th>Tên sách</th>
                                <th>Số ngày trễ</th>
                                <th>Số tiền phạt (VND)</th>
                                <th>Trạng thái</th>
                                <th>Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map((f) => (
                                <tr
                                    key={f.id}
                                    className={f.paid ? "" : "unpaid"}
                                >
                                    <td data-label="User ID">{f.borrowDetail?.borrow?.user?.id || "-"}</td>
                                    <td data-label="Tên người dùng">{f.borrowDetail?.borrow?.user?.name || "N/A"}</td>
                                    <td data-label="Tên sách">{f.borrowDetail?.copy?.book?.title || "N/A"}</td>
                                    <td data-label="Số ngày trễ">{f.lateDays || 0} ngày</td>
                                    <td data-label="Số tiền phạt">{f.fineAmount?.toLocaleString("vi-VN") || 0} ₫</td>
                                    <td data-label="Trạng thái">
                                        <span className={f.paid ? "paid-status" : "unpaid-status"}>
                                            {f.paid ? "Đã thanh toán" : "Chưa thanh toán"}
                                        </span>
                                    </td>
                                    <td data-label="Hành động">
                                        {!f.paid && (
                                            <button className="pay-btn" onClick={() => handlePay(f.id)}>
                                                Thanh toán
                                            </button>
                                        )}
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

export default FineManager;