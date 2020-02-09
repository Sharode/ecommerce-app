import React,
{ Fragment } from 'react'

function ShoppingCart({ cartItems, handleAddToCart, handleRemoveFromCart }) {
    return (

        <section className="flex max-w-screen-lg md:m-auto">
            <div className="w-2/3">
                {cartItems.map(item => (
                    <section className="flex my-3">
                        <div className="w-1/4">
                            <img src={item.imageUrl[0]} height="150" width="150" alt={item.name} />
                        </div>
                        <div className="w-4/5">
                            <div className="flex justify-between">
                                <div>
                                    {item.name}
                                </div>
                                <div>
                                    ${item.price * item.count}
                                </div>

                            </div>
                            <div>
                                {item.gender} {item.itemType}
                            </div>

                            <button
                                className=""
                                onClick={(e) => handleRemoveFromCart(e, item)}>
                                Remove
                           </button>
                        </div>
                        <hr />
                    </section>
                ))}
            </div>
            <div className="w-1/3 px-8 mx-5">
                <h1 className="text-lg">Order Summary</h1>
            </div>
        </section>
    )
}

export default ShoppingCart


// add a size changer
// add a quantity changer

