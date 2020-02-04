import React from 'react'

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
                            {item.count}
                            <button onClick={(e) => handleRemoveFromCart(e, item)}> x </button>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Basket
