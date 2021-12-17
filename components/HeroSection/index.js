import React from "react";
import Image from "next/image";
import classNames from "./HeroSection.module.scss";
import useWindowDimensions from "../../utils/WindowSize";

function HeroSection() {
  const { height } = useWindowDimensions();
  return (
    <section className={classNames.HeroSection} id="home">
      <div
        className={classNames.bgCircle}
        style={{ height: height * 1.4, width: height * 1.4 }}
      ></div>
      <div className={classNames.texts}>
        <div className={classNames.title}>
          <span>I am</span> <br />
          Rahul Raj
        </div>
        <div className={classNames.desc}>
          Full-stack developer with high expertice in JavaScript and quick
          learner to any language
        </div>
        <div className={classNames.btnHireMe}>Hire Me</div>
      </div>
      <div className={classNames.bg} />
    </section>
  );
}

export default HeroSection;
