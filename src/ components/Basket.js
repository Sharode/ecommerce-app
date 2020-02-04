import React from 'react'

function Basket({ cartItems }) {
    return (
        <div>
            {cartItems.length === 0
                ? <p> Basket is empty</p>
                : <p> You have {cartItems.length} items in your cart </p>
            }
        </div>
    )
}

export default Basket
