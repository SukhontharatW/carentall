import Mazda from "../images/brands/brand-mazda.svg";
import Audi from "../images/brands/brand-audi.svg";
import Volkswagen from "../images/brands/brand-volkswagen.svg";
import Bmw from "../images/brands/brand-bmw.svg";
import Benz from "../images/brands/brand-benz.svg";
import Ford from "../images/brands/brand-ford.svg";
import Nissan from "../images/brands/brand-nissan.svg";
import pinIcon from "../images/icon-pin.svg";
import calendarIcon from "../images/icon-calendar.svg";
import carIcon from "../images/icon-car.svg";
import { useEffect, useState } from "react";

function How() {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setCurrentDate(today);
  }, []);
  return (
    <>
      <div className="container bg__white">
        <div className="container__search">
          <form className="search-form">
            <div className="search-form__group">
              <label
                htmlFor="location"
                className="search-form__label p__sm--strong"
              >
                Location
              </label>
              <input
                type="text"
                id="location"
                className="search-form__input p__lg--light"
                placeholder="Search your location"
                required
              />
            </div>

            <div className="search-form__group">
              <label
                htmlFor="pickupDateTime"
                className="search-form__label p__sm--strong"
              >
                Pickup Date
              </label>
              <input
                type="date"
                value={currentDate}
                className="search-form__input p__lg--light"
              />
            </div>

            <div className="search-form__group">
              <label
                htmlFor="returnDateTime"
                className="search-form__label p__sm--strong"
              >
                Return Date
              </label>
              <input
                type="date"
                value={currentDate}
                className="search-form__input p__lg--light"
              />
            </div>

            <button
              type="submit"
              className="search-form__button p__reg--strong click__basic"
            >
              Search
            </button>
          </form>
        </div>
      </div>
      <div className="container bg__white">
        <div className="container__main">
          <div className="how__brand">
            <div className="how__brand--item">
              <img src={Mazda} alt="" />
            </div>
            <div className="how__brand--item">
              <img src={Audi} alt="" />
            </div>
            <div className="how__brand--item">
              <img src={Volkswagen} alt="" />
            </div>
            <div className="how__brand--item">
              <img src={Bmw} alt="" />
            </div>
            <div className="how__brand--item">
              <img src={Benz} alt="" />
            </div>
            <div className="how__brand--item">
              <img src={Ford} alt="" />
            </div>
            <div className="how__brand--item">
              <img src={Nissan} alt="" />
            </div>
          </div>
          <div className="how__section">
            <div className="how__heading">
              <h6 className="heading--h6">HOW IT WORK</h6>
              <h3 className="heading--h3 align--center">
                Rent with following 3 working steps
              </h3>
            </div>
            <div className="how__steps">
              <div className="how__item">
                <div className="how__image">
                  <img src={pinIcon} alt="" />
                </div>
                <div className="how__text">
                  <p className="p__xl--normal">Choose location</p>
                  <p className="p__reg--light">
                    Choose your location and find your best car.
                  </p>
                </div>
              </div>
              <div className="how__item">
                <div className="how__image">
                  <img src={calendarIcon} alt="" />
                </div>
                <div className="how__text">
                  <p className="p__xl--normal">Pick-up date</p>
                  <p className="p__reg--light">
                    Select your pick up date and time to book your car.
                  </p>
                </div>
              </div>
              <div className="how__item">
                <div className="how__image">
                  <img src={carIcon} alt="" />
                </div>
                <div className="how__text">
                  <p className="p__xl--normal">Book your carn</p>
                  <p className="p__reg--light">
                    Book your car and we will deliver it to you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default How;
