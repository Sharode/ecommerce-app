import React from 'react'

const main = `flex max-w-screen-lg md:m-auto`

function ShoppingCart({ cartItems, handleQuantity, handleRemoveFromCart }) {

    const priceTotal = cartItems.map(el => el.price * el.count).reduce((accumulator, currValue) => accumulator + currValue, 0)

    return (
        <section className={main}>
            <div className="w-2/3">
                {cartItems.map(({ id, name, price, count, gender, itemType, imageUrl }) => (
                    <section className="flex my-3">
                        <div className="w-1/4">
                            <img src={imageUrl[0]} height="150" width="150" alt={name} />
                        </div>
                        <div className="w-4/5">
                            <div className="flex justify-between">
                                <div>
                                    {name}
                                </div>
                                <div>
                                    ${price * count}
                                </div>

                            </div>
                            <div>
                                {gender} {itemType}
                            </div>

                            <button
                                className={count === 1 && `hidden`}
                                onClick={(e) => handleQuantity(e, id)}
                                id="minus">
                                Minus
                            </button>

                            <button
                                onClick={(e) => handleQuantity(e, id)}
                                id="plus">
                                Plus
                            </button>

                            <button
                                className=""
                                onClick={(e) => handleRemoveFromCart(e, id)}>
                                Remove
                           </button>
                        </div>
                        <hr />
                    </section>
                ))}
            </div>
            <div className="w-1/3 px-8 mx-5">
                <h1 className="text-lg">Order Summary</h1>
                <div>Do you have a promo code </div>
                <div> Subtotal
                    <span>{priceTotal} </span>
                </div>
                <div>Estimated Shipping and Handling</div>
                <div> Esitmated Tax <span> </span> </div>
            </div>
        </section>
    )
}

export default ShoppingCart


