/* eslint-disable no-unused-vars */
import { TESTIMONIAL_DATA } from "./TestimonialData";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import { BiSolidStar } from "react-icons/bi";
import { BiSolidStarHalf } from "react-icons/bi";
function Testimonial() {
  return (
    <div className="container bg__grey">
      <div className="container__main">
        <div className="testimonial">
          <div className="testimonial__heading">
            <h6 className="heading--h6">Testimonials</h6>
            <h3 className="heading--h3">What people say about us?</h3>
          </div>

          <Splide
            options={{
              perPage: 1,
              autoplay: false,
              speed: 1000,
              rewind: false,
              rewindByDrag: true,
              breakpoints: {
                800: {
                  perPage: 1,
                },
              },
            }}
          >
            {TESTIMONIAL_DATA.map((item) => (
              <SplideSlide key={item[0].id}>
                <div className="testimonial__box">
                  <div className="testimonial__image">
                    <img src={item[0].img} alt="" />
                  </div>
                  <div className="testimonial__text">
                    <h5 className="heading--h5">{item[0].review}</h5>
                    <h4 className="heading--h4">{item[0].name}</h4>
                    <div className="testimonial__rating">
                      <p className="p__lg--normal">{item[0].rating}</p>
                      <p className="p__lg--normal p__rating">
                        <BiSolidStar className="color__yellow" />
                        <BiSolidStar className="color__yellow" />
                        <BiSolidStar className="color__yellow" />
                        <BiSolidStar className="color__yellow" />
                        <BiSolidStarHalf className="color__yellow" />
                      </p>
                    </div>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </div>
  );
}
function TestimonialItem() {
  return <div>TestimonialItem</div>;
}

export default Testimonial;
