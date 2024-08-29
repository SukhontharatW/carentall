import heroImg from "../images/hero_img.png";
import AppStore from "../images/app-AppStore.png";
import GooglePlay from "../images/app-GooglePlay.png";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <div className="container bg__grey">
      <div className="container__main">
        <div className="hero">
          <div className="hero__text">
            <h1 className="heading--h1">
              Find, book, and rental car in Easy steps.
            </h1>
            <p className="p__lg--light">
              Get a car wherever and whenever you need it with your iOS or
              Android device.
            </p>
            <div className="hero__app">
              <Link className="hero__app--link click__basic">
                <img src={AppStore} alt="" />
              </Link>
              <Link className="hero__app--link click__basic">
                <img src={GooglePlay} alt="" />
              </Link>
            </div>
          </div>
          <div className="hero__image">
            <img src={heroImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;
