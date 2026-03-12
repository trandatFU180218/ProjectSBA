import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css"; // Tạo file này hoặc copy từ Login.css rồi chỉnh
import banner from "../assets/img/BannerTrang2.png";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    if (password.length <= 6 || confirmPassword <= 6) {
      setError("Mật Khẩu quá ngắn (>6 kí tự)");
      return;
    }

    if (password !== confirmPassword) {
      setError("Mật khẩu xác nhận không khớp");
      return;
    }

    try {
      const res = await fetch("http://localhost:8080/backend/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          confirmPassword,
          phone,
        }),
      });

      const data = await res.text();

      if (res.ok) {
        alert("Đăng ký thành công! Vui lòng đăng nhập.");
        navigate("/");
      } else {
        setError(data || "Đăng ký thất bại. Vui lòng thử lại.");
      }
    } catch (err) {
      setError("Lỗi kết nối đến server");
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">

        {/* LEFT - Form đăng ký */}
        <div className="register-left">
          <h2>Đăng ký tài khoản</h2>

          {error && (
            <p style={{ color: "red", textAlign: "center", marginBottom: "20px" }}>
              {error}
            </p>
          )}

          <form onSubmit={handleRegister}>
            <label>Họ và tên</label>
            <input
              type="text"
              placeholder="Họ và tên"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label>Email *</label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label>Số điện thoại</label>
            <input
              type="tel"
              placeholder="Số điện thoại"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <label>Mật khẩu *</label>
            <input
              type="password"
              placeholder="Mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <label>Xác nhận mật khẩu *</label>
            <input
              type="password"
              placeholder="Xác nhận mật khẩu"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />

            <button className="register-btn">ĐĂNG KÝ</button>
          </form>

          <p className="already-have">
            Đã có tài khoản? <span onClick={() => navigate("/")}>Đăng nhập</span>
          </p>
        </div>

        <div className="register-right">
          <h3>Quyền lợi với thành viên</h3>
          <ul>
            <li>Vận chuyển siêu tốc</li>
            <li>Sản phẩm đa dạng</li>
            <li>Đổi trả dễ dàng</li>
            <li>Tích điểm đổi quà</li>
            <li>Được giảm giá cho lần mua tiếp theo lên đến 10%</li>
            <img className="banner-right"src={banner}/>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Register;