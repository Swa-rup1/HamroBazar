import React from "react";
import {
  DeleteOutlined,
  MinusCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateCard } from "../../Redux/Slices/Addtocart";

const Order = () => {
  const [orderdata, setOrderData] = React.useState([]);
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const cardItem = useSelector((state) => state);
  console.log("cardItem", cardItem);

  const handelAdd = (id) => {
    const updatedData = cardItem.addtocard.data.map((item) => {
      if (id === item.id) {
        return {
          ...item,
          qty: item.qty + 1,
        };
      }
      return item;
    });

    dispatch(updateCard(updatedData));
  };

  const handelminus = (id, qty) => {
    if (qty > 1) {
      const minusQTY = cardItem.addtocard.data.map((item) => {
        if (id === item.id) {
          return {
            ...item,
            qty: item.qty - 1,
          };
        } else {
          return { ...item };
        }
      });

      dispatch(updateCard(minusQTY));
    }
  };

  const handeldelete = (id) => {
    const updatedData = cardItem.addtocard.data.filter(
      (item) => item.id !== id
    );
    dispatch(updateCard(updatedData));
  };

  React.useEffect(() => {
    // Simulate API data with a random quantity
    const fakeAPIResponse = cardItem.addtocard.data.map((item) => ({
      ...item,
      qty: 1,
    }));
    setOrderData(fakeAPIResponse);
  }, [cardItem.addtocard.data]);

  const total = orderdata.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.price * currentItem.qty;
  }, 0);

  return (
    <div>
      <div>
        {orderdata.map((item) => (
          <div
            key={item.id}
            className="flex justify-start gap-3 items-center py-2"
          >
            <div>
              <img
                src={item.category.image}
                alt={item.category.name}
                className="object-cover w-[60px] h-auto"
              />
            </div>
            <div>
              <div>{item.category.name}</div>
              <div>price: {item.price}</div>
              <div>QTY :{item.qty}</div>
            </div>
            <div>
              <PlusOutlined onClick={() => handelAdd(item.id)} />
            </div>
            <div>
              <DeleteOutlined onClick={() => handeldelete(item.id)} />
            </div>
            <div>
              <MinusCircleOutlined
                onClick={() => handelminus(item.id, item.qty)}
              />
            </div>
          </div>
        ))}
      </div>

      <div>
        <div>Total Amount : {total}</div>
      </div>

      <div className="flex justify-center align-middle items-center w-full">
        <button
          className=" border-spacing-1 border-collapse bg-green-600 p-3 font-bold  items-center"
          onClick={() => Navigate("/payment")}
        >
          Order Now
        </button>
      </div>
    </div>
  );
};

export default Order;
