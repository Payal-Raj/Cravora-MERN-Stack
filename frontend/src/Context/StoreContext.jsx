import { useEffect, useState } from "react";
import { StoreContext } from "./StoreContext";
import axios from "axios";

const StoreContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});

  const [token, setToken] = useState("");

  const url = "http://localhost:4000";

  const [food_list, setFoodList] = useState([]);

  const addToCart = async (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }

    if (token) {
      await axios.post(
        url + "/api/cart/add",
        { itemId },
        { headers: { token } },
      );
    }
  };

  const removeFromCart = async (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if (token) {
      await axios.post(
        url + "/api/cart/remove",
        { itemId },
        { headers: { token } },
      );
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const fetchFoodlist = async () => {
    const response = await axios.get(url + "/api/food/list");
    setFoodList(response.data.data);
  };

  const loadCartData = async (userToken) => {
    if (!userToken) return;

    try {
      const response = await axios.post(
        `${url}/api/cart/get`,
        {},
        { headers: { token: userToken } },
      );
      setCartItems(response.data.cart || {});
    } catch (error) {
      console.log(
        "Error loading cart data:",
        error.response?.status,
        error.response?.data,
      );
    }
  };
  useEffect(() => {
    async function loadData() {
      await fetchFoodlist();
      if (localStorage.getItem("token"))
        setToken(localStorage.getItem("token"));
      await loadCartData(localStorage.getItem("token"));
    }
    loadData();
  }, []);

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
