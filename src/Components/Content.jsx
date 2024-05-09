import React, { useState } from "react";


import ProductShop from "./UserDashboard/Dashboard/ProductShop";
import Categories from "./UserDashboard/Dashboard/Categories";
import CategoryShop from "./UserDashboard/Dashboard/CategoryShop";
import Hero from "./UserDashboard/Dashboard/Hero";
import ProductCarousel from "./UserDashboard/Dashboard/ProductCarousel";
import { useAppContext } from "/./src/Components/ContextApi.jsx";
import { useSelector } from "react-redux";
import ProductGrid from "./UserDashboard/Dashboard/ProductGrid";


const Content = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { appState, updateState } = useAppContext();
  const products = useSelector((state) => state.productSlice.products);
  console.log("a", products);
  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <Hero/>
      {/* <ProductGrid products={products} /> */}
        <ProductShop title="All Products" />
        <div className=" border  m-10">
        <Categories onSelectCategory={handleSelectCategory} title="Categories" />
        <CategoryShop selectedCategory={selectedCategory} />
        </div>

        <ProductCarousel products={products} />


    </>
  );
};

export default Content;
