import "./FoodItem.css";
import { FaStar, FaRegStar } from "react-icons/fa";
import { assets } from "../../assets/assets";
import { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";

const FoodItem = ({id, name, price, description, image, rating }) => {
  
  const {cartItems, addToCart, removeFromCart} = useContext(StoreContext)

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt="" />
        {!cartItems[id] ? (
          <div className="food-item-add">
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_white}
              alt="Add"
            />
          </div>
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt="Remove"
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt="Add"
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <div className="rating">
            {[...Array(5)].map((_, i) =>
              i < rating ? (
                <FaStar key={i} color="#FFD700" />
              ) : (
                <FaRegStar key={i} />
              ),
            )}
          </div>
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">{price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
