import React, { useState, useEffect, useContext } from "react";
import "./MyOrders.css";
import { StoreContext } from "../../Context/StoreContext";
import axios from "axios";
import { assets } from "../../assets/assets";
import Button from "../../components/Button/Button";

const MyOrders = () => {
  const { url, token } = useContext(StoreContext);
  const [data, setData] = useState([]);

  const fetchOrders = async () => {
    const response = await axios.post(
      url + "/api/order/userOrders",
      {},
      { headers: { token } },
    );
    setData(response.data.data);
  };

  useEffect(() => {
    if (token) fetchOrders();
  }, [token]);

  return (
    <div className="my-orders">
      <h2>My Orders</h2>
      <div className="order-list">
        {data.map((order, index) => {
          const formattedItems = order.items
            .map(item => `${item.name} x ${item.quantity}`)
            .join(", ");
          const formattedDate = new Date(order.date).toLocaleString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          });
          return (
            <div key={index} className="order-row">
              <img src={assets.pracel_icon} alt="Order" />
              <p className="items">{formattedItems}</p>
              <p className="amount">{order.amount}.00</p>
              <p className="items-count">{order.items.length} Items</p>
              <p className="order-date">{formattedDate}</p>
              <p className={`status ${order.status.toLowerCase()}`}>
                <span>&#x25cf;</span> <b>{order.status}</b>
              </p>
              <Button text="Track Order" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyOrders;