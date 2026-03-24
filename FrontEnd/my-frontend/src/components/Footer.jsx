import React from "react";
import "./Footer.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import banner from "../assets/img/bannerProject.png"

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        {/* LEFT */}
        <div className="footer-col">

          <img
            src={banner}
            alt="logo"
            className="footer-logo"
          />

          <p className="footer-desc">
            "Chúng tôi không bán sách, chúng tôi bán kiến thức quản trị vượt
            trội của các tập đoàn hàng đầu."
          </p>

          <p>Công ty Cổ phần Sách Alpha</p>
          <p>MST: 0101602138</p>
          <p>Ngày cấp: 27/01/2005</p>
          <p>
            Nơi cấp: Phòng ĐKKD - Sở Kế Hoạch & Đầu Tư Thành Phố Hà Nội
          </p>

          <h4>Đăng ký nhận khuyến mãi</h4>

          <div className="newsletter">
            <input type="text" placeholder="Địa chỉ email" />
            <button>Gửi</button>
          </div>

        </div>

        {/* INFO */}
        <div className="footer-col">

          <h3>THÔNG TIN</h3>

          <ul>
            <li>› Giới thiệu</li>
            <li>› Hệ thống nhà sách</li>
            <li>› Hệ thống phát hành</li>
            <li>› Tuyển dụng</li>
            <li>› Hợp tác xuất bản</li>
            <li>› Hợp tác kinh doanh</li>
            <li>› Tích điểm đổi quà</li>
          </ul>

        </div>

        {/* POLICY */}
        <div className="footer-col">

          <h3>CHÍNH SÁCH</h3>

          <ul>
            <li>› Chính sách thanh toán</li>
            <li>› Chính sách vận chuyển</li>
            <li>› Chính sách bảo mật</li>
            <li>› Chính sách đổi trả hoàn tiền</li>
          </ul>

        </div>

        {/* CONTACT */}
        <div className="footer-col">

          <h3>LIÊN HỆ</h3>

          <p className="contact">
            <FaMapMarkerAlt /> Tầng 3, Dream Home Center, 11a ngõ 282 Nguyễn
            Huy Tưởng, Thanh Xuân, Hà Nội
          </p>

          <p className="contact">
            <FaPhoneAlt /> 0932 329 959
          </p>

          <p className="contact">
            <FaEnvelope /> mkt.alphabooks@gmail.com
          </p>

        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">

        <p>© Bản quyền thuộc về Alpha Books | Cung cấp bởi TienDat</p>

        <img
          src="https://congtyquatang.com.vn/wp-content/uploads/2026/03/logo-bo-cong-thuong-vector-03.png"
          alt="bo-cong-thuong"
          
        />
        <p>Bộ Công Thương</p>

      </div>

    </footer>
  );
}

export default Footer;