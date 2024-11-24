import React from "react";
import logoskan2 from "../media/logoskan2.svg"


export default function Footer() {
  return (
    <footer className="container_footer">
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
        <div className="footer__address">        
                  <p>+7 495 771 21 11</p>
                  <p>info@skan.ru</p>
          <p style={{ marginTop: '21px' }}></p>
          <p style={{ fontSize: '12px' }}>Copyright. 2022</p>
        </div>
          </div>  
 </div>
    </footer>
  );
}
