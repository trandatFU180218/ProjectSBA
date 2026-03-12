import React from "react";
import "./components.css";
import banner from "../assets/img/BannerTrang2.png";
import { useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

function Header() {
  const navigate = useNavigate();
  const gotoLogin = () => navigate("/");
  return (
    <div className="header">

      <img src={banner} alt="bannerProject" className="Bannerpj" />
      <form>
        <input className="search" placeholder="Tìm kiếm..." />
        <button  className="icon-search"><CiSearch/></button>
        
      </form>

      <div className="login" onClick={gotoLogin}>
        <img src="https://cdn2.fptshop.com.vn/small/avatar_trang_1_cd729c335b.jpg" alt="Avatar" className="avatar" />
        <span> Login/Sign in</span>
      </div>

      <div className="Borrow">
        <div>Card</div>
      </div>

    </div>
  );
}

export default Header;