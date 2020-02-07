import React, { useState } from 'react'
import round100th from '../utils'
import ModalShoppingCart from './ModalShoppingCart'

function Basket({ cartItems, handleRemoveFromCart }) {
    const [toggle, setToggle] = useState(false)

    const handleViewCart = () => {
        setToggle(prevState => !prevState)
        console.log(toggle)
    }

    return (
        <div>
            <h3 className="text-lg font-semibold">Order Summary</h3>
            <hr />
            <div>

                {cartItems.length === 0
                    ? <p> Basket is empty</p>
                    : (<div className="flex justify-between">
                        <p> Items {cartItems.length} items in your cart </p>
                        <p>${Math.ceil(cartItems.reduce((a, c) => a + c.price * c.count, 0))}</p>
                    </div>)
                }
            </div>
            <div>
                <div>
                    <h3 className="text-lg font-semibold">Shipping</h3>
                    <select className="form-control" >
                        name="" id="">
                        <option value="5">Standard Delivery - $5</option>
                        <option value="10">Express Delivery - $10</option>
                        <option value="20">Overnight Delivery - $20</option>
                    </select>
                </div>
                <div>
                    <h3 className="text-lg font-semibold">Promo Code</h3>
                    <input type="text" />
                    <button> Apply</button>
                </div>
                <div className="flex justify-between">
                    <h5> Total Cost</h5>
                    {/* <h5>{Math.ceil(cartItems.reduce((a, c) => a + c.price * c.count, 0))}</h5> */}
                </div>
            </div>

            <div onClick={(e) => handleViewCart(e)}>

                <h1 className="cursor-pointer hover:text-blue-500 font-semibold text-lg"> View Cart</h1>
            </div>


            {toggle && (
                // <ModalShoppingCart cartItems={cartItems} onClick={handleRemoveFromCart} />

                <div>
                    <table className="table-auto">
                        <thead>
                            <tr>
                                <th className="px-4 py-2">Product Detail</th>
                                <th className="px-4 py-2">Quantity</th>
                                <th className="px-4 py-2">Price</th>
                                <th className="px-4 py-2">Total</th>

                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map(item => (
                                <tr>
                                    <td>
                                        {item.name}
                                        {/* <button
                                        className="ml-3 p-2 bg-red-300"
                                        onClick={(e) => handleRemoveFromCart(e, item)}> x </button> */}
                                    </td>
                                    <td>
                                        {item.count}
                                        <button
                                            onClick={(e) => handleRemoveFromCart(e, item)}>
                                            Remove
                                        </button>
                                    </td>
                                    <td>
                                        {item.price}
                                    </td>
                                    <td>
                                        {round100th(item.price * item.count)}
                                    </td>
                                </tr>

                            ))}
                        </tbody>
                    </table>
                    {/* <p>Total Price  {Math.ceil(cartItems.reduce((a, c) => a + c.price * c.count, 0))}</p> */}
                </div>
            )}
        </div>
    )
}

export default Basket


