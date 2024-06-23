import "./Services.css";

import services from "../../data/data.json";

const Services = () => {
  return (
    <>
      <div className="services pt-5  text-center" id="services">
        <h2 className="mb-2">Services</h2>
        <p className="mb-2">
          Typesetting industry lorem Ipsum is simply dummy text of the{" "}
        </p>
        <div className="container">
          <div className="row">
            {services.services &&
              services.services.map((item) => {
                return (
                  <div className="col-md-4 col-sm-12 mb-3" key={item.id}>
                    <div className="services-box">
                      <div className="services-box-img mb-2">
                        {/* //image */}
                        <img
                          className="img-fluid"
                          src={item.image}
                          alt="icon1"
                        />
                      </div>
                      {/* title */}
                      <h4 className="mb-2">{item.title}</h4>
                      {/* body */}
                      <p className="mb-2">{item.body}</p>
                      <button className="btn btn-dark">Read More</button>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
