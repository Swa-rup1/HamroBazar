import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../Services/ProductList";
import { Link, useNavigate } from "react-router-dom"; // Import Link and useNavigate
import { Button, Card } from "antd";
import { useAppContext } from "/./src/Components/ContextApi.jsx";
import { AnimatedText } from "../utils/AnimatedText";
import { updateCard } from "../../../Redux/Slices/Addtocart";

const ProductShop = ({ title }) => {
  const { appState, updateState } = useAppContext();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productSlice.products);
  const cardItem = useSelector((state) => state);
  console.log("a", products);

  const navigate = useNavigate();

  const HandleDetail = (product) => {
    updateState({
      ...appState,
      data: product,
    });

    navigate("/detail");
  };

  // console.log("m", HandleDetail);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const addtocart = (item) => {
    // item.qty = 1;

    dispatch(updateCard([...new Set([...cardItem?.addtocard.data, item])]));
  };
  console.log("add", addtocart);

  return (
    <div>
      <AnimatedText text="Trending Product " />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="col-span-1 md:col-span-1 lg:col-span-1"
          >
            <Card
              className="hh"
              hoverable
              onClick={() => HandleDetail(product)}
            >
              <div className="grid">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-20 object-cover mb-2"
                />
                <h1 className="text-xl font-semibold">{product.title}</h1>
                <p className="text-sm text-gray-500 m-2">
                  Price : Rs {product.price}
                </p>
                {/* Add a Link to the detail page */}
                <div className="flex gap-4 ">
                  <Button>
                    <Link to={`/product/${product.id}`}>View Details</Link>
                  </Button>
                </div>
                <div className="flex gap-4 ">
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

export default ProductShop;
