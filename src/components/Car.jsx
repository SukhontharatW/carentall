/* eslint-disable no-unused-vars */
import { IoArrowForward } from "react-icons/io5";
import { BiSolidStar } from "react-icons/bi";
import { HiMiniUser } from "react-icons/hi2";
import { TbManualGearbox } from "react-icons/tb";
import { IoSnowOutline } from "react-icons/io5";
import { GiCarDoor } from "react-icons/gi";
import { CAR_DATA } from "./CarData";
import { Link } from "react-router-dom";
function Car() {
  CAR_DATA.map((i) => console.log(i[0]));

  return (
    <div className="container bg__white">
      <div className="container__main">
        <div className="car">
          <div className="car__heading">
            <h6 className="heading--h6">Popular Rental Deals</h6>
            <h3 className="heading--h3">Most popular cars rental deals</h3>
          </div>
          <div className="car__box">
            {CAR_DATA.map((car) => (
              <CarItem car={car[0]} key={car[0].id} />
            ))}
          </div>
          <div className="car__cta ">
            <div className="car__btn click__basic">
              <Link className="car__btn--link">
                <p className="p__reg--base">
                  Show All Vehicles <IoArrowForward />
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function CarItem({ car }) {
  const { id, img, rating, name, passenger, system, aircon, door, price } = car;
  console.log(id, img, rating, name, passenger, system, aircon, door, price);
  return (
    <>
      <div className="car__item">
        <div className="car__item--image">
          <img src={img} alt="" />
        </div>
        <div className="car__item--detail">
          <p className="p__sm--normal">
            <span className="icon__star">
              <BiSolidStar />
            </span>
            {rating}
            <span className="p__ss--plus"> (100+ Review)</span>
          </p>
          <p className="p__reg--base">{name}</p>
          <div className="car__item--detail-item">
            <div className="car__item--icon">
              <p className="p__lg--light">
                <HiMiniUser />
              </p>
              <p className="p__ss--plus">{passenger} Passangers</p>
            </div>
            <div className="car__item--icon">
              <p className="p__lg--light">
                <TbManualGearbox />
              </p>
              <p className="p__ss--plus">{system} </p>
            </div>
            <div className="car__item--icon">
              <p className="p__lg--light">
                <IoSnowOutline />
              </p>
              <p className="p__ss--plus">{aircon} </p>
            </div>
            <div className="car__item--icon">
              <p className="p__lg--light">
                <GiCarDoor />
              </p>
              <p className="p__ss--plus">{door} </p>
            </div>
          </div>
        </div>
        <div className="car__item--price">
          <p className="p__sm--normal">
            {price}
            <span className="p__ss--plus"> /day</span>
          </p>
          <Link className="click__basic">
            <p className="p__sm--normal color__blue">
              Rent Now <IoArrowForward />
            </p>
          </Link>
        </div>
      </div>
    </>
  );
}
export default Car;
