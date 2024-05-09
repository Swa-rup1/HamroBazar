import React from "react";
import { Typography } from "antd";

const { Title } = Typography;

const Hero = () => {
  return (
    <div
      className="relative bg-cover bg-center h-96"
      style={{
        backgroundImage: 'url("./src/image/hero-img.jpg")',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
        <Title level={1} style={{
            color: 'white', 
            fontWeight: 'bold', 
            fontSize: '2rem', 
            marginBottom: '1rem', 
          }}>
          Welcome to HamroBazar
        </Title>
        <p className="text-white text-lg">
          Explore our collection of furniture and find the perfect piece for
          your home.
        </p>
      </div>
    </div>
  );
};

export default Hero;
