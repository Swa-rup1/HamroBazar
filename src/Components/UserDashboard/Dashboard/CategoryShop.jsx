// CategoryShop.jsx

import { Button, Card } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { updateCard } from "../../../Redux/Slices/Addtocart";

const CategoryShop = ({ selectedCategory }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productSlice.products);
  const cardItem = useSelector((state) => state);
  console.log(" check", products);
  console.log("state", cardItem);

  const addtocart = (item) => {
    // item.qty = 1;

    dispatch(updateCard([...new Set([...cardItem?.addtocard.data, item])]));
  };
  console.log("add", addtocart);

  const HandleDetail = (product) => {
    updateState({
      ...appState,
      data: product,
    });

    navigate("/detail");
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : [];



  return ( 
    <div className="m-5 p-2 border ">
      <h2 className="font-bold font-4xl  text-[#186049] m-2">
        {selectedCategory || "All Categories"}
      </h2>
      <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="col-span-1 md:col-span-1 lg:col-span-1"
          >
            <Card className="hh" hoverable>
              <div className="grid">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-20 object-cover mb-2"
                />
                <h1 className="text-xl font-semibold">{product.title}</h1>
                <div className="mt-2 mb-2">
                  <p> Price : Rs {product.price}</p>
                </div>

                <div className="flex gap-4 ">
                  <Button>
                    <Link to={`/product/${product.id}`}>View Details</Link>
                  </Button>

                  <Button onClick={() => addtocart(product)}>
                    Add to Cart
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryShop;
