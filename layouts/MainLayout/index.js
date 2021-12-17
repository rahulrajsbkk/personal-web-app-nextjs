import React, { useState } from "react";
import Scrollbars from "react-custom-scrollbars";
import Header from "../../components/Header";
import MainNavbar from "../../components/MainNavbar";
import classNames from "./MainLayout.module.scss";

function MainLayout({ children }) {
  const [activeNav, setActiveNav] = useState(false);
  return (
    <Scrollbars
      universal
      autoHide
      className={classNames.container}
      renderTrackVertical={(props) => (
        <div {...props} className={classNames.scrollTrack} />
      )}
      renderView={(props) => (
        <div {...props} className={classNames.containerIn} />
      )}
      onScrollFrame={(value) => {
        setActiveNav(value?.scrollTop > 300);
        console.log(`value`, value);
      }}
    >
      <Header />
      <MainNavbar activated={activeNav} />
      {children}
    </Scrollbars>
  );
}

export default MainLayout;
