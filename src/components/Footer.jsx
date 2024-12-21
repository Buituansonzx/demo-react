import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section-1">
          <img
            src="https://lh3.googleusercontent.com/IoTfA9rN7TjRHWVOhMKx1kl9uZ3_nPk4AxLTgD6aSn3_Zg5FS7khFS1OkpNH4al1Upxoadgb6HXqB_zcbPtHyZkugXZYpG10=rw-w144"
            alt="Email"
          />
          <div className="info">Camelia123@gmail.com</div>
          <img
            src="https://lh3.googleusercontent.com/z0fVsMjjdfBqGVRaWXn63wROytvswXXBsrdukzZDpyvViu-8v8Egm3C00BTRS-qftmwVTkD6GW5thdcUWWTgQLhVCi4OPBfPhA=rw-w144"
            alt="Number Phone"
          />
          <div className="info">0912312930</div>
        </div>
        <div className="footer-section-2">
          <div className="brand">CAMELIA</div>
          <img src="https://storage.googleapis.com/teko-gae.appspot.com/media/image/2023/11/19/8a8d0ed9-c37a-4539-a521-603da9febb68/6487d58f89ef2e3ed3ceb354_wave_2.svg"></img>
          <div className="address">
            123 Streetnam, District name, City Name, Country name
          </div>
        </div>
        <div className="footer-section-3">
          <div className="get-news">Get our lastest news</div>
          <input type="email" placeholder="Email"></input>
          <button>Subscribe</button>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 MyApp. Bản quyền được bảo lưu.</p>
      </div>
    </footer>
  );
}

export default Footer;
