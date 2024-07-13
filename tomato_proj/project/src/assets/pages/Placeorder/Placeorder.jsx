import React, { useContext } from 'react'
import './Placeorder.css'
import { StoreContext } from '../../../context/StoreContext'

const Placeorder = () => {
  const {getTotalCartAmount}=useContext(StoreContext);
  return (
      <form className='place-order'>
        <div className="place-order-left">
          <p className="title">Delivery Information</p>
          <div className="multi-fields">
            <input type="text" placeholder='FirstName' />
            <input type="text" placeholder='LastName' />
          </div>
          <input type="email" placeholder='Email' />
          <input type="text" placeholder='street' />
          <div className="multi-fields">
            <input type="text" placeholder='City' />
            <input type="text" placeholder='State' />
          </div>
          <div className="multi-fields">
            <input type="text" placeholder='pin-code' />
            <input type="text" placeholder='Country' />
          </div>
          <input type="text" placeholder='phone' />

        </div>
        <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>{2}</p>

            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <p>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</p>
            </div>
          </div>
          <button>PROCEED TO PAYMENT</button>

        </div>
        
          
        </div>


      </form>
      
  )
}

export default Placeorder
