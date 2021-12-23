import React from "react";
import Image from "next/image";
import classNames from "./HeroSection.module.scss";
import useWindowDimensions from "../../utils/WindowSize";
import { motion } from "framer-motion";

function HeroSection() {
  const { width, height } = useWindowDimensions();
  let base = Math.min(width, height);
  return (
    <motion.div
      initial={{ x: "10%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-10%", opacity: 0 }}
      className={classNames.HeroSection}
    >
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
        <a href="mailto:rrsbkk@gmail.com" className={classNames.btnHireMe}>
          Hire Me
        </a>
      </div>
      <div className={classNames.bg} />
    </motion.div>
  );
}

export default HeroSection;
