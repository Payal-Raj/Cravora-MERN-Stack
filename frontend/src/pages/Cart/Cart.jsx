import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../Context/StoreContext';
import Button from '../../components/button/button';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);

  const totalItems = Object.values(cartItems).reduce((sum, qty) => sum + qty, 0);
  const deliveryFee = totalItems > 0 ? 90 : 0; 
  const subtotal = getTotalCartAmount();
  const total = subtotal + deliveryFee;

  const navigate = useNavigate();

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />

        {food_list.some(item => cartItems[item.id] > 0) ? (
          food_list.map((item) => {
            if (cartItems[item.id] > 0) {
              return (
                <div key={item.id} className="cart-items-title cart-items-item">
                  <img src={item.image} alt={item.name} />
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                  <p>{cartItems[item.id]}</p>
                  <p>{item.price * cartItems[item.id]}</p>
                  <p onClick={() => removeFromCart(item.id)} className='cross'>x</p>
                </div>
              );
            }
            return null;
          })
        ) : (
          <p className="empty-cart-message">Your cart is empty. Add some delicious items!</p>
        )}
      </div>

      {totalItems > 0 && (
        <div className="cart-bottom">
          <div className="cart-total">
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
          <Button onClick={() => navigate('/order')} text={"Checkout"} />
        </div>
      )}
    </div>
  );
};

export default Cart;
