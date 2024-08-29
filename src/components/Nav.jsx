/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import logoBlack from "../images/logo-black.svg";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

function Nav() {
  const showSidebar = () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
  };
  const hiddenSideBar = () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
  };

  return (
    <div className="container__fix shadow bg__grey">
      <div className="container__nav">
        <nav className="nav">
          <ul className="nav__bar">
            <li className="nav__item ">
              <Link className="nav__link p__reg--normal">
                <img src={logoBlack} alt="" className="nav__logo" />
              </Link>
            </li>
            <li className="nav__item hideOnMobile">
              <Link className="nav__link p__reg--normal">Become a renter</Link>
            </li>
            <li className="nav__item hideOnMobile">
              <Link className="nav__link p__reg--normal">Rental deals</Link>
            </li>
            <li className="nav__item hideOnMobile">
              <Link className="nav__link p__reg--normal">How it work?</Link>
            </li>
            <li className="nav__item hideOnMobile">
              <Link className="nav__link p__reg--normal">Why choose us</Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link p__reg--normal hideOnMobile">
                Login
              </Link>
              <Link className="nav__link nav__btn--menu" onClick={showSidebar}>
                <IoMenu />
              </Link>
            </li>
          </ul>
          <ul className="nav__bar sidebar">
            <li className="nav__item" onClick={hiddenSideBar}>
              <Link className="nav__link nav__btn--close">
                <IoClose />
              </Link>
            </li>
            <li className="nav__item" onClick={hiddenSideBar}>
              <Link className="nav__link p__reg--normal">Become a renter</Link>
            </li>
            <li className="nav__item" onClick={hiddenSideBar}>
              <Link className="nav__link p__reg--normal">Rental deals</Link>
            </li>
            <li className="nav__item" onClick={hiddenSideBar}>
              <Link className="nav__link p__reg--normal">How it work?</Link>
            </li>
            <li className="nav__item" onClick={hiddenSideBar}>
              <Link className="nav__link p__reg--normal">Why choose us</Link>
            </li>
            <li className="nav__item" onClick={hiddenSideBar}>
              <Link className="nav__link p__reg--normal">Login</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
