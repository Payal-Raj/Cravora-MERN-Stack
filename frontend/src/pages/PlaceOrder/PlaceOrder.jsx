import React, { useContext,  useState } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../Context/StoreContext'
import Button from '../../components/button/button'
import axios from 'axios'



const PlaceOrder = () => {


  const { cartItems, getTotalCartAmount, token, food_list, url  } = useContext(StoreContext);

  const [data, setData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipcode:"",
    country:"",
    phone:""
  })

  const onChangehandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data, [name]:value}))
  }

  const placeOrder = async (event) => {
  event.preventDefault();

  console.log("Token before request:", token);

  let orderItems = [];
  food_list.forEach(item => {
    if (cartItems[item._id] > 0) {
      let itemInfo = { ...item, quantity: cartItems[item._id] };
      orderItems.push(itemInfo);
    }
  });

  let orderData = {
    address: data,
    items: orderItems,
    amount: getTotalCartAmount() + 90,
  };

  try {
    let response = await axios.post(url + "/api/order/place", orderData, { headers: { token } });

    console.log("PlaceOrder response:", response.data);

    if (response.data.success) {
      window.location.replace(response.data.session_url);
    } else {
      alert("Error placing order");
    }
  } catch (error) {
    console.log("Error placing order:", error.response?.status, error.response?.data);
  }
};

  const totalItems = Object.values(cartItems).reduce((sum, qty) => sum + qty, 0)
  const deliveryFee = totalItems > 0 ? 90 : 0
  const subtotal = getTotalCartAmount()
  const total = subtotal + deliveryFee

  return (
    <form onSubmit={placeOrder} className='place-order'>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>

        <div className="multi-fields">
          <input required name='firstName' onChange={onChangehandler} value={data.firstName} type="text" placeholder='Name' />
          <input name='lastName' onChange={onChangehandler} value={data.lastName} type="text" placeholder='Last name' />
        </div>

        <input required name='email' onChange={onChangehandler} value={data.email} type="email" placeholder='Email'/>
        <input required name='street' onChange={onChangehandler} value={data.street} type="text" placeholder='Street'/>

        <div className="multi-fields">
          <input required name='city' onChange={onChangehandler} value={data.city} type="text" placeholder='City'/>
          <input required name='state' onChange={onChangehandler} value={data.state} type="text" placeholder='State'/>
        </div>

        <div className="multi-fields">
          <input name='zipcode' onChange={onChangehandler} value={data.zipcode} type="text" placeholder='Zip Code' />
          <input name='country' onChange={onChangehandler} value={data.country} type="text" placeholder='Country' />
        </div>

        <input required name='phone' onChange={onChangehandler} value={data.phone} type="text" placeholder='Phone' />
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

        <Button type='submit' text={"PROCEED TO PAYMENT"} />
      </div>
    </form>
  )
}

export default PlaceOrder
