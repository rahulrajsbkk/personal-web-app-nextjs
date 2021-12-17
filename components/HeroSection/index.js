import React from "react";
import Image from "next/image";
import classNames from "./HeroSection.module.scss";
import useWindowDimensions from "../../utils/WindowSize";

function HeroSection() {
  const { width, height } = useWindowDimensions();
  let base = Math.min(width, height);
  return (
    <section className={classNames.HeroSection} id="home">
      <div
        className={classNames.bgCircle}
        style={{ height: base * 1.4, width: base * 1.4 }}
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
        <div className={`link ${classNames.btnHireMe}`}>Hire Me</div>
      </div>
      <div className={classNames.bg} />
    </section>
  );
}

export default HeroSection;
