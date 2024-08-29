import { Link } from "react-router-dom";
import Logo from "../images/logo-white.svg";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
function Footer() {
  return (
    <>
      <div className="container bg__black">
        <div className="container__footer">
          <footer className="footer">
            <div className="footer__left">
              <div className="footer__logo click__basic">
                <Link onClick={(event) => event.preventDefault()}>
                  <img src={Logo} alt="logo white" />
                </Link>
              </div>
              <p className="p__light">
                2566 Hc 1, Glennallen,
                <br /> Alaska 99588, USA
              </p>
              <div className="footer__social">
                <Link
                  className="click__basic"
                  onClick={(event) => event.preventDefault()}
                >
                  <FaInstagram className="footer__social--icon" />
                </Link>

                <Link
                  className="click__basic"
                  onClick={(event) => event.preventDefault()}
                >
                  <FaFacebook className="footer__social--icon" />
                </Link>
                <Link
                  className="click__basic"
                  onClick={(event) => event.preventDefault()}
                >
                  <FaXTwitter className="footer__social--icon" />
                </Link>
              </div>
            </div>

            <div className="footer__directories">
              <div className="footer__directories--item">
                <p className=" p__medium">Product</p>
                <ul className="directories">
                  <li className="click__basic">
                    <Link
                      className="directories__link "
                      onClick={(event) => event.preventDefault()}
                    >
                      <p className="p__light">Career</p>
                    </Link>
                  </li>
                  <li className="click__basic">
                    <Link
                      className="directories__link "
                      onClick={(event) => event.preventDefault()}
                    >
                      <p className="p__light">Cars</p>
                    </Link>
                  </li>
                  <li className="click__basic">
                    <Link
                      className="directories__link"
                      onClick={(event) => event.preventDefault()}
                    >
                      <p className="p__light">Features</p>
                    </Link>
                  </li>
                  <li className="click__basic">
                    <Link
                      className="directories__link"
                      onClick={(event) => event.preventDefault()}
                    >
                      <p className="p__light">Priceline</p>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="footer__directories--item">
                <p className="p__medium">Resources</p>
                <ul className="directories">
                  <li className="click__basic">
                    <Link
                      className="directories__link"
                      onClick={(event) => event.preventDefault()}
                    >
                      <p className="p__light">Download</p>
                    </Link>
                  </li>
                  <li className="click__basic">
                    <Link
                      className="directories__link"
                      onClick={(event) => event.preventDefault()}
                    >
                      <p className="p__light">Help Center</p>
                    </Link>
                  </li>
                  <li className="click__basic">
                    <Link
                      className="directories__link"
                      onClick={(event) => event.preventDefault()}
                    >
                      <p className="p__light">Guides</p>
                    </Link>
                  </li>
                  <li className="click__basic">
                    <Link
                      className="directories__link"
                      onClick={(event) => event.preventDefault()}
                    >
                      <p className="p__light">Partners</p>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="footer__directories--item">
                <p className="p__medium">About Us</p>
                <ul className="directories">
                  <li className="click__basic">
                    <Link
                      className="directories__link"
                      onClick={(event) => event.preventDefault()}
                    >
                      <p className="p__light">Out Story</p>
                    </Link>
                  </li>
                  <li className="click__basic">
                    <Link
                      className="directories__link"
                      onClick={(event) => event.preventDefault()}
                    >
                      <p className="p__light">Investors</p>
                    </Link>
                  </li>
                  <li className="click__basic">
                    <Link
                      className="directories__link"
                      onClick={(event) => event.preventDefault()}
                    >
                      <p className="p__light">Press Center</p>
                    </Link>
                  </li>
                  <li className="click__basic">
                    <Link
                      className="directories__link"
                      onClick={(event) => event.preventDefault()}
                    >
                      <p className="p__light">Policy & Terms</p>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </footer>
        </div>
      </div>
      <div className="container bg__black add__border--top ">
        <div className="container__copyright color__white">
          <p className="p__reg--base color__special">
            Copyright 2022 © Carentall, All Rights Reserved.
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
