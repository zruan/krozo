import React from "react";
import TextLoop from "react-text-loop";
import Social from "../Social";
import Particles from "react-particles-js";

const Slider = () => {
  return (
    <>
      {/*  Home Banner */}
      <section
        id="home"
        className="home-banner overlay video-banner slider-three-animation"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "img/banner/bg-4.jpg"
          })`,
        }}
      >
        <div className="frame-layout__particles">
          <Particles
            params={{
              particles: {
                number: {
                  value: 160,
                  density: {
                    enable: false,
                  },
                },
                size: {
                  value: 3,
                  random: true,
                  anim: {
                    speed: 4,
                    size_min: 0.3,
                  },
                },
                line_linked: {
                  enable: false,
                },
                move: {
                  random: true,
                  speed: 1,
                  direction: "top",
                  out_mode: "out",
                },
              },
              interactivity: {
                events: {
                  onhover: {
                    enable: true,
                    mode: "bubble",
                  },
                  onclick: {
                    enable: true,
                    mode: "repulse",
                  },
                },
                modes: {
                  bubble: {
                    distance: 250,
                    duration: 2,
                    size: 0,
                    opacity: 0,
                  },
                  repulse: {
                    distance: 400,
                    duration: 4,
                  },
                },
              },
            }}
          />
        </div>
        {/* End particle animation */}
        <div className="container">
          <div className="row align-items-center full-screen">
            <div className="col-md-12 col-lg-7">
              <div className="hb-typo text-left">
                <h1
                  className="font-alt"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  Zheng Ruan
                </h1>
                <h2
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  <TextLoop>
                    <span className="loop-text">Structural Biologist</span>
                    <span className="loop-text"> Bioinformatician</span>
                    <span className="loop-text"> Postdoctoral Fellow at Van Anden Institute</span>
                  </TextLoop>{" "}
                </h2>
                <p
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  I study ion channel proteins through structural, biochemical, and computational approaches.
                </p>
                <div
                  className="btn-bar"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                  <a className="px-btn px-btn-theme btn-md" href="#about">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End .container */}

        <div className="scroll-bottom go-to">
          <a href="#about">Scroll</a>
        </div>

        {/* End bottom scroll */}

        <Social />
        {/* End social slide  */}
      </section>
      {/* End Home Banner  */}
    </>
  );
};

export default Slider;
