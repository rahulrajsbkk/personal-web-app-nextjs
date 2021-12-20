import React from "react";
import Image from "next/image";
import Link from "next/link";
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
          <Link href="/" className={classNames.menuItem}>
            Home
          </Link>
          <Link href="/about" className={classNames.menuItem}>
            About
          </Link>
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
