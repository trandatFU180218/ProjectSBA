import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import Footer from "../components/Footer";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        const res = await fetch("http://localhost:8080/backend/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,  
                password: password
            })
        });

        if (!res.ok) {
            alert("Tài khoản hoặc mật khẩu không đúng!");
            return;
        }

        const data = await res.json();


        // LƯU TOKEN 
        localStorage.setItem("token", data.token);

        // LƯU USER
        localStorage.setItem("user", JSON.stringify(data.user));
        //
        localStorage.setItem("id", JSON.stringify(data.user.id))

        const role = data.user.role.name.trim().toUpperCase();
        console.log("role",role)

        if (role === "ADMIN") { 
            navigate("/admin/home");
        } else {
            navigate("/Home");
        }

        alert("Đăng nhập thành công");
    };

    return (
        <div className="login-container">

            <div className="login-box">

                {/* LEFT */}
                <div className="login-left">

                    <h2>Đăng nhập tài khoản</h2>

                    <form onSubmit={handleLogin}>

                        <label>Email *</label>
                        <input
                            type="text"
                            placeholder="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <label>Mật khẩu *</label>
                        <input
                            type="password"
                            placeholder="Mật khẩu"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <button className="login-btn">ĐĂNG NHẬP</button>

                    </form>

                    <div className="divider">
                        <span>Hoặc đăng nhập bằng</span>
                    </div>

                    <div className="social-login">
                        <button className="facebook">Facebook</button>
                        <button className="google">Google</button>
                    </div>

                    <p className="forgot">
                        Bạn quên mật khẩu bấm <a href="#">vào đây</a>
                    </p>

                </div>

                {/* RIGHT */}
                <div className="login-right">

                    <h3>Quyền lợi với thành viên</h3>

                    <ul>
                        <li>Vận chuyển siêu tốc</li>
                        <li>Sản phẩm đa dạng</li>
                        <li>Đổi trả dễ dàng</li>
                        <li>Tích điểm đổi quà</li>
                        <li>Được giảm giá cho lần mua tiếp theo lên đến 10%</li>
                    </ul>

                    <button className="register-btn-login" onClick={() => navigate("/Register")}>Đăng ký</button>

                </div>

            </div>


        </div>

    );
}

export default Login;