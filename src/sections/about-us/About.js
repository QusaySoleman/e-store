import React from "react";
import aboutImg from "../../Assets/images/Coffee/about-img.png";
import "./About.css";
const Aboutus = () => {
  return (
    <>
      <div className="about-us pt-5" id="about-us">
        <div className="container">
          <div className="row">
            <div className="d-flex justify-content-center align-items-center col-md-6 col-sm-12">
              <div className="about-us-text">
                <h4>About Us</h4>
                <p>
                  Full cleaning and housekeeping services for companies and
                  households. Lorem Ipsum is simply dummy text of the printing
                  and typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text.Lorem Ipsum is simply
                </p>
                <button className="btn btn-dark">Read More</button>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="about-us-img">
                <img
                  className="img-fluid about-img"
                  src={aboutImg}
                  alt="about-us-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutus;
