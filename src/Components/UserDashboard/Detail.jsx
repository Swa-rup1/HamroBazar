import React from "react";
import Slider from "react-slick";
import { useAppContext } from "../ContextApi";
import { Button, Rate } from "antd";
import TextArea from "antd/es/input/TextArea";
import ProductShop from "./Dashboard/ProductShop";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const Detail = () => {
  const { appState } = useAppContext();
  const navigate = useNavigate();

  const settings = {
    customPaging: function (i) {
      return (
        <a href="">
          <img src={appState?.data?.Image} alt="" />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: null,
    prevArrow: null,
  };

  const goHome = () => {
    navigate("/");
  };

  return (
    <>
      <div>
        <div className="flex items-center justify-around mb-4">
          <ArrowLeftOutlined onClick={goHome} className="cursor-pointer" />
          <div className="text-xl font-semibold">{appState?.data?.title}</div>
          <div></div>
        </div>
        <div className="slider-container grid grid-cols-1 md:grid-cols-12 gap-4 m-5">
          <div className="md:col-span-6 md:ml-[10rem]">
            <div className=" w-[60%] max-h-50 h-40  items-center flex justify-center">
              <img
                src={appState?.data?.category.image}
                alt=""
                className="w-full h-full object-fit"
              />
            </div>
          </div>
          <div className="md:col-span-6 grid gap-2">
            <div className="text-xl font-semibold">{appState?.data?.title}</div>

            <div>Price: ${appState?.data?.price}</div>

            <div>{appState?.data?.description}</div>

            <div>
              <Rate
                allowHalf
                value={appState?.data?.rating}
                className="text-[#FFD700]"
              />
            </div>

            <div>
              <TextArea
                rows={4}
                placeholder="Review"
                maxLength={6}
                value={appState?.data?.comment}
              />
            </div>

            <div>
              <Button className="bg-green-700 text-[#FFFFFF] w-[50%]">
                Buy Now
              </Button>
            </div>
          </div>
          <div className="md:col-span-12">
            <ProductShop />
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
