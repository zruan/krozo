import React from "react";

const ServiceContent = [
  {
    icon: "ti-ruler-pencil",
    no: "01",
    service: "Proton-Activated Chloride Channel",
    title: "Investigate the pH-dependent gating mechanism of PAC",
    desc: `The activation of PAC is one of the key factors that
    determines the severity of brain
    damage after ischemic stroke. This project aims to elucidate
    the working mechanism of how PAC senses environmental pH and its
    pharmacological properties. This knowledge will serve as a
    foundation to develop novel treatment strategies for ischemic
    stroke and other diseases that are associated with tissue acidosis.`,
    animationDelay: "",
  },
  {
    icon: "ti-image",
    no: "02",
    service: "Large-pore ATP Release Channel",
      title: "Structural and functional analysis of the PANX1 channel",
    desc: `Pannexin 1 (PANX1) is an ATP-permeable channel with critical
      roles in a variety of physiological functions such as blood pressure
      regulation, apoptotic cell clearance and human oocyte development.
      This project uses a combination of structural and functional approaches to define 
      the regulatory mechanisms associated with PANX1-mediated cellular ATP
      release process.`,
    animationDelay: "150",
  },
  {
    icon: "ti-layout",
    no: "03",
    service: "Taste-Related TRPM5 Channel",
    title: "Mechanism of Anonist and Antagonist modulation of TRPM5",
    desc: `TRPM5 channel plays an essential role in the perception of sweet, bitter,
    and umami stimuli in type II taste cells. This study employs single-particle 
    cryo-EM and electrophysiology approaches to understand the calcium mediated TRPM5
    activation and small-molecule mediated inhibition mechanisms. The result may be exploited
    for the design of next-generation sweetners.`,
    animationDelay: "300",
  },
  {
    icon: "ti-brush-alt",
    no: "04",
    service: "WEB DESIGN",
    title: "Web Design gorgeous graphic design meeting clients needs.",
    desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    animationDelay: "",
  },
  {
    icon: "ti-camera",
    no: "05",
    service: "MOTION GRAPHY",
    title: "Motion Graphy design meeting clients needs.",
    desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    animationDelay: "150",
  },
  {
    icon: "ti-world",
    no: "06",
    service: "PHOTOGRAPHY",
    title: "Photography design meeting clients needs.",
    desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    animationDelay: "300",
  },
];

const ServiceTwoAnimation = () => {
  return (
    <>
      <div className="row gy-4">
        {ServiceContent.map((val, i) => (
          <div
            className="col-sm-6 col-lg-4"
            key={i}
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay={val.animationDelay}
          >
            <div className="feature-box-02">
              <div className="icon">
                <i className={val.icon}></i>
              </div>
              <h6>
                <span>{val.no}.</span> {val.service}
              </h6>
              <h5>{val.title}</h5>
              <p>{val.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ServiceTwoAnimation;
