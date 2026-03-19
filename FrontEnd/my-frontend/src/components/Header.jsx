import React, { useState } from "react";
import "./components.css";
import banner from "../assets/img/BannerTrang2.png";
import { useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { GoCreditCard } from "react-icons/go";


function Header({onSearch }) {

  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(keyword);
  };

  return (
    <div className="header">

      <img src={banner} alt="bannerProject" className="Bannerpj" />

      <form onSubmit={handleSearch}>
        <input
          className="search"
          placeholder="Tìm kiếm..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />

        <button className="icon-search">
          <CiSearch />
        </button>
      </form>

      <div className="Borrow">
        <GoCreditCard />
        <span>Borrow</span>
      </div>

      <div className="login">
        <span onClick={()=>navigate("/")}> Logout</span>
      </div>

    </div>
  );
}

export default Header;