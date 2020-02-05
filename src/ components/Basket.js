import React from 'react'
import round100th from '../utils'

function Basket({ cartItems, handleRemoveFromCart }) {
    return (
        <div>
            <div>
                {cartItems.length === 0
                    ? <p> Basket is empty</p>
                    : <p> You have {cartItems.length} items in your cart </p>
                }
            </div>
            <div>
                <ul>
                    {cartItems.map(item =>
                        <li>
                            <b>{item.name} </b>
                            {item.count} = {round100th(item.price * item.count)}
                            <button onClick={(e) => handleRemoveFromCart(e, item)}> x </button>
                        </li>
                    )}
                </ul>
                <p>Total Price  {Math.ceil(cartItems.reduce((a, c) => a + c.price * c.count, 0))}</p>
            </div>
        </div>
    )
}

export default Basket
