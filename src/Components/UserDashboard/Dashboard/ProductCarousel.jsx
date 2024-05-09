import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AnimatedText } from "../utils/AnimatedText";

const ProductCarousel = ({ products }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <div className="  m-5 p-2">
      <AnimatedText   text="Top Sales" />
        <div className=" py-3  bg-opacity-55 backdrop-blur-3xl m-5">
          <Slider {...settings}>
            {products.map((product) => (
              <div key={product.id}>
                <img
                  src={product.category.image}
                  alt={product.title}
                  className="h-[180px] w-full object-contain"
                />
                <p>{product.title}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default ProductCarousel;
