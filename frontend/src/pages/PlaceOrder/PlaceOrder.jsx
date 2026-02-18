import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../Context/StoreContext'
import Button from '../../components/button/button'

const PlaceOrder = () => {

  const { cartItems, getTotalCartAmount } = useContext(StoreContext)

  const totalItems = Object.values(cartItems).reduce((sum, qty) => sum + qty, 0)
  const deliveryFee = totalItems > 0 ? 90 : 0
  const subtotal = getTotalCartAmount()
  const total = subtotal + deliveryFee

  return (
    <div className='place-order'>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>

        <div className="multi-fields">
          <input type="text" placeholder='First name' />
          <input type="text" placeholder='Last name' />
        </div>

        <input type="email" placeholder='Email'/>
        <input type="text" placeholder='Street'/>

        <div className="multi-fields">
          <input type="text" placeholder='City'/>
          <input type="text" placeholder='State'/>
        </div>

        <div className="multi-fields">
          <input type="text" placeholder='Zip Code' />
          <input type="text" placeholder='Country' />
        </div>

        <input type="text" placeholder='Phone' />
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

        <Button text={"PROCEED TO PAYMENT"} />
      </div>
    </div>
  )
}

export default PlaceOrder
