import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <div className="footer pt-5" id="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="footer-box">
                <h2>About</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, excepturi.orem ipsum dolor sit amet consectetur
                  adipisicing elit. Asperiores, exce
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="footer-box">
                <h2>Links</h2>
                <p>
                  <a href="#">Home</a>
                </p>
                <p>
                  <a href="#about-us">About us</a>
                </p>
                <p>
                  <a href="#services">Services</a>
                </p>
                <p>
                  <a href="#">Gallery</a>
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="footer-box">
                <h2>Useful Link</h2>
                <p>
                  Adipiscing Elit,
                  <br /> sed do Eiusmod <br /> Tempor <br /> incididunt
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <h2>Contact Us</h2>
              <div className="footer-box text-black-50">
                <p>Email : demo@gmail.com</p>
                <p>Call : +01 1234567890</p>
                <p>Address : Loram Ipusm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
