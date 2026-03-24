import React, { useState, useEffect } from "react";
import "./Banner.css";  // Đổi tên file css cho phù hợp

function Banner() {
  const images = [
    "https://bizweb.dktcdn.net/100/376/170/themes/750292/assets/slider_2.jpg?1693887815786",
    "https://thietkelogo.edu.vn/uploads/images/thiet-ke-do-hoa-khac/banner-sach/1.png",
    "https://sachcindy.com/wp-content/uploads/2025/04/Grey-Minimalist-Natural-Skincare-Banner-Banner-ngang-Banner-ngang-1-scaled.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="banner">
      <div className="banner-slideshow">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Banner ${index + 1}`}
            className={`banner-image ${index === currentIndex ? "active" : ""}`}
          />
        ))}
      </div>

      {/* Optional: Dots điều hướng */}
      <div className="banner-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Banner;