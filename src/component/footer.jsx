import React from "react";
import logoskan2 from "../media/logoskan2.svg"


export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="logo">
          <img
            alt="Company logo"
            height="50"
            src={logoskan2}
            width="50"
          />
        </div>
        <div className="contact-info">
          <p>г. Москва, Цветной б-р, 40</p>
          <p>+7 495 771 21 11</p>
          <p>info@skan.ru</p>
          <p>Copyright, 2024</p>
        </div>
      </div>
    </footer>
  );
}
