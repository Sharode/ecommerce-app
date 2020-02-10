import React from 'react'
import { Link } from 'react-router-dom'

function Navbar({ cartItems }) {
    return (
        <div className="flex justify-between py-8 bg-gray-100">
            <div className="md:px-12">
                <Link to="/"
                    className="font-bold text-lg"
                >
                    Shop 'til you drop
                </Link>
            </div>
            <div className="md:px-12">
                <Link to='/cart' className="font-semibold text-base">
                    <b className="mx-1 px-1 hover:">Cart</b> {cartItems}
                </Link>
            </div>
        </div>
    )
}

export default Navbar
