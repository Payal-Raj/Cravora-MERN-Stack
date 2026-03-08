import React, { useContext, useState, useEffect } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../Context/StoreContext";
import Button from "../../components/Button/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {
  const { cartItems, getTotalCartAmount, token, food_list, url } =
    useContext(StoreContext);
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("online");
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangehandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const placeOrder = async (event) => {
    event.preventDefault();

    console.log("Token before request:", token);

    let orderItems = [];
    food_list.forEach((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = { ...item, quantity: cartItems[item._id] };
        orderItems.push(itemInfo);
      }
    });

    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 90,
      paymentMethod: paymentMethod,
    };

    try {
      let response = await axios.post(url + "/api/order/place", orderData, {
        headers: { token },
      });

      if (response.data.success) {
        if (response.data.cod) {
          navigate("/myorders");
        } else {
          window.location.replace(response.data.session_url);
        }
      } else {
        alert("Error placing order");
      }
    } catch (error) {
      console.log(
        "Error placing order:",
        error.response?.status,
        error.response?.data,
      );
    }
  };

  const totalItems = Object.values(cartItems).reduce(
    (sum, qty) => sum + qty,
    0,
  );
  const deliveryFee = totalItems > 0 ? 90 : 0;
  const subtotal = getTotalCartAmount();
  const total = subtotal + deliveryFee;

  useEffect(() => {
    if (!token) {
      navigate("/cart");
    } else if (getTotalCartAmount() === 0) {
      navigate("/cart");
    }
  }, [token]);

  return (
    <form onSubmit={placeOrder} className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>

        <div className="multi-fields">
          <input
            required
            name="firstName"
            onChange={onChangehandler}
            value={data.firstName}
            type="text"
            placeholder="Name"
          />
          <input
            name="lastName"
            onChange={onChangehandler}
            value={data.lastName}
            type="text"
            placeholder="Last name"
          />
        </div>

        <input
          required
          name="email"
          onChange={onChangehandler}
          value={data.email}
          type="email"
          placeholder="Email"
        />
        <input
          required
          name="street"
          onChange={onChangehandler}
          value={data.street}
          type="text"
          placeholder="Street"
        />

        <div className="multi-fields">
          <input
            required
            name="city"
            onChange={onChangehandler}
            value={data.city}
            type="text"
            placeholder="City"
          />
          <input
            required
            name="state"
            onChange={onChangehandler}
            value={data.state}
            type="text"
            placeholder="State"
          />
        </div>

        <div className="multi-fields">
          <input
            name="zipcode"
            onChange={onChangehandler}
            value={data.zipcode}
            type="text"
            placeholder="Zip Code"
          />
          <input
            name="country"
            onChange={onChangehandler}
            value={data.country}
            type="text"
            placeholder="Country"
          />
        </div>

        <input
          required
          name="phone"
          onChange={onChangehandler}
          value={data.phone}
          type="text"
          placeholder="Phone"
        />
      </div>

      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>{subtotal}</p>
          </div>

          <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>{deliveryFee}</p>
          </div>

          <div className="cart-total-details total-bold">
            <p>Total</p>
            <p>{total}</p>
          </div>
        </div>
        <div className="payment-method">
          <h3>Payment Method</h3>

          <div
            className={`payment-card ${paymentMethod === "online" ? "active" : ""}`}
            onClick={() => setPaymentMethod("online")}
          >
            <div className="payment-info">
              <span className="payment-icon">💳</span>
              <div>
                <p className="payment-title">Online Payment</p>
                <p className="payment-desc">Pay securely with Stripe</p>
              </div>
            </div>

            {paymentMethod === "online" && <span className="check">✔</span>}
          </div>

          <div
            className={`payment-card ${paymentMethod === "cod" ? "active" : ""}`}
            onClick={() => setPaymentMethod("cod")}
          >
            <div className="payment-info">
              <span className="payment-icon">💵</span>
              <div>
                <p className="payment-title">Cash on Delivery</p>
                <p className="payment-desc">Pay when your order arrives</p>
              </div>
            </div>

            {paymentMethod === "cod" && <span className="check">✔</span>}
          </div>
        </div>
        <Button type="submit" text={"PROCEED TO PAYMENT"} />
      </div>
    </form>
  );
};

export default PlaceOrder;
