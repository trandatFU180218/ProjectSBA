import React, { useEffect, useState } from "react";
import { getMyFine } from "../api/axiosClient";
import "./MyFine.css";   
import { useNavigate } from "react-router-dom";


function Fines() {
  const [fines, setFines] = useState([]);
  const userId = localStorage.getItem("userId");

  const navigate = useNavigate();

  useEffect(() => {
    loadFines();
  }, []);

  const loadFines = async () => {
    try {
      const res = await getMyFine();
      setFines(res.data || []);
    } catch (error) {
      console.error("Error loading fines:", error);
    }
  };

  return (
    <div className="home-my-fine">
      <h2>My Fines</h2>
      <button className="back-btn" onClick={() => navigate("/Home")}>
        ← Quay lại
      </button>


      {fines.length === 0 ? (
        <p style={{ color: "#777", fontStyle: "italic" }}>
          Bạn chưa có khoản phạt nào.
        </p>
      ) : (
        fines.map((f) => (
          <div key={f.id} className="fine-card">
            <p>
              <strong>Late Days:</strong> 
              <span>{f.lateDays} ngày</span>
            </p>
            <p>
              <strong>Fine Amount:</strong> 
              <span>{f.fineAmount.toLocaleString("vi-VN")} VND</span>
            </p>
            <p>
              <strong>Status:</strong> 
              <span className={f.paid ? "status-paid" : "status-unpaid"}>
                {f.paid ? "Paid" : "Unpaid"}
              </span>
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default Fines;