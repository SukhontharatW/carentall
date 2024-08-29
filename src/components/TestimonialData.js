import Customer1 from "../images/customers/customer-1.png";
import Customer2 from "../images/customers/customer-2.png";
import StarFull from "../images/star-full.svg";
import StarHalf from "../images/star-half.svg";
export const TESTIMONIAL_DATA = [
  [
    {
      id: 1,
      img: Customer1,
      name: "Maxwell Smith",
      review:
        "The pickup and drop-off process was smooth and hassle-free, allowing me to focus on my business agenda without interruptions. Efficient service that I can rely on.",
      rating: 4.8,
      star: [StarFull, StarFull, StarFull, StarFull, StarHalf],
    },
  ],
  [
    {
      id: 2,
      img: Customer2,
      name: "David Anderson",
      review:
        "Excellent service with a personal touch! The car was clean, comfortable, and perfect for my needs. I'll definitely use this company again for my future travels.",
      rating: 4.8,
      star: [StarFull, StarFull, StarFull, StarFull, StarHalf],
    },
  ],
];
