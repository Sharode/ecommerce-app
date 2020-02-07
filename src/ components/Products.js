import React from 'react'

import PropTypes from 'prop-types'

function Products({ productItems, handleAddToCart }) {
    const products = productItems.map(product => (
        < div className="w-1/4 m-4" key={product.added} >

            <div class="max-w-sm rounded overflow-hidden shadow-md">
                <div class="px-6 py-4 image-bg">
                    <img className="h-full w-full object-cover" src={`../../../products/${product.productImg}`} alt={product.name} />

                </div>
                <div className="px-6 py-4">
                    <div className="font-semibold text-base mb-2">{product.name}</div>

                    <span className="inline-block bg-gray-200 rounded-full px-1 py-1 text-sm font-semibold text-gray-700 mr-2">${product.price}</span>
                    <button
                        onClick={(e) => handleAddToCart(e, product)}
                        className="inline-block bg-yellow-500 rounded-full px-3 py-1 text-sm font-semibold text-black mr-2">Add to Cart </button>
                </div>
            </div>

        </div >
    ))
    return (
        <section className="flex flex-wrap" >
            {products}
        </section>
    )
}

Products.propTypes = {

}

export default Products



