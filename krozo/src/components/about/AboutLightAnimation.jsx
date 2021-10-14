import React from "react";

const About = () => {
  return (
    <>
      <div className="row align-items-center justify-content-center">
        <div
          className="col-lg-6 my-3"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <div className="img-box">
            <img src="img/about/about-4.jpg" alt="smiling a girl" />
          </div>
        </div>

        <div
          className="col-lg-6 my-3"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="100"
        >
          <div className="typo-box about-me">
            <h3>Zheng Ruan</h3>
            <h5>
              I'm currently at postdoctoral fellow in Dr. Juan Du's lab at Van Andel Institute.
            </h5>
            <p>
              I design and develop services for customers of all sizes,
              specializing in creating stylish, modern websites, web services
              and online stores. My passion is to design digital user
              experiences through the bold interface and meaningful
              interactions. Check out my Portfolio
            </p>
            <div className="row about-list">
              <div className="col-md-6">
                <div className="media">
                  <label>Hometown</label>
                  <p>Xianning, Hubei, China</p>
                </div>
                <div className="media">
                  <label>Age</label>
                  <p>30 Yr</p>
                </div>
                <div className="media">
                  <label>Residence</label>
                  <p>United States</p>
                </div>
                <div className="media">
                  <label>Address</label>
                  <p>Grand Rapids, USA</p>
                </div>
              </div>
              {/* End .col */}

              <div className="col-md-6">
                <div className="media">
                  <label>E-mail</label>
                  <p>zheng.ruan at vai.org</p>
                </div>
                <div className="media">
                  <label>Phone</label>
                  <p>820-885-3321</p>
                </div>
                <div className="media">
                  <label>Skype</label>
                  <p>skype.0404</p>
                </div>
                <div className="media">
                  <label>Freelance</label>
                  <p>Available</p>
                </div>
              </div>
              {/* End .col */}
            </div>
            {/* End .row */}
            <div className="btn-bar">
              <a className="px-btn px-btn-theme" href="img/resume.png" download>
                Download CV
              </a>
            </div>
          </div>
          {/* End .about me */}
        </div>
        {/* End .col */}
      </div>
    </>
  );
};

export default About;
