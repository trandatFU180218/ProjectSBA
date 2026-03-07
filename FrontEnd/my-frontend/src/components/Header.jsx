import React from "react";
import "./components.css";
import banner from "../assets/img/bannerProject.png";

function Header() {
  return (
    <div className="header">
      
      <img src={banner} alt="bannerProject"/>
      <form>
      <input className="search" placeholder="Tìm kiếm..." />
      <button onClick="" className="icon-search">🔎</button>
      </form>

      <div className="login">
        <img src="https://cdn2.fptshop.com.vn/small/avatar_trang_1_cd729c335b.jpg"/>
        <span>Đăng nhập</span>
      </div>

      <div className="Borrow">
        <div>Card</div>
      </div>

    </div>
  );
}

export default Header;