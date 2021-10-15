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
            <img src="img/about/about-zr.jpg" alt="smiling a girl" />
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
              Zheng Ruan is born and raised in Hubei, China. Dr. Ruan earned his B.S. in biotechnology from
              Huazhong Agricultural University and his Ph.D. in bioinformatics from the
              University of Georgia. His graduate work focused on protein kinase evolution and
              how disease mutations have altered the structure, function, and dynamics of kinases.
              In 2018, he joined the laboratory of Dr. Juan Du at Van Andel Institute as a
              postdoctoral fellow. His current research project aims to understand the structure
              and function relationship of ion channel proteins that are related to human diseases.
              Outside of the lab, he enjoys playing badminton and scuba diving with his buddies.
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
              <a className="px-btn px-btn-theme" href="img/ZhengRuan_CV_20211014.pdf" download>
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
