import React from "react";
import Image from "next/image";
import classNames from "./MainNavbar.module.scss";
import { MAIN_LOGO } from "../../configs";

function MainNavbar({ activated }) {
  return (
    <nav className={`${classNames.mainNavbar} ${classNames[activated]} `}>
      <div className={classNames.navWrap}>
        <div className={classNames.logo}>
          <Image
            className={classNames.imageIn}
            src={MAIN_LOGO}
            alt=""
            width={349}
            height={207}
            layout="responsive"
            objectFit="contain"
            loading="lazy"
          />
        </div>
        <div className={classNames.navMenu}>
          <a href="#home" className={classNames.menuItem}>
            Home
          </a>
          <a href="#showcase" className={classNames.menuItem}>
            Showcase
          </a>
          <a href="#partner" className={classNames.menuItem}>
            Partner with us
          </a>
          {/* <div className={classNames.menuItem}>Blog</div> */}
          <div className={classNames.vl}></div>
          <a href="#contact" className={classNames.menuItem}>
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default MainNavbar;
