import React from 'react'

import PropTypes from 'prop-types'

function Products({ productItems, handleAddToCart }) {
    const products = productItems.map(product => (
        < div className="w-1/4 mb-4" key={product.added} >
            <div className="">
                <div class="max-w-sm rounded overflow-hidden shadow-md">
                    <div class="px-6 py-4">
                        <div class="font-bold text-lg mb-2">{product.name}</div>
                        <img src={`../../../products/${product.productImg}`} alt={product.name} />

                    </div>
                    <div class="px-6 py-4">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{product.price}</span>
                        <button
                            onClick={(e) => handleAddToCart(e, product)}
                            class="inline-block bg-yellow-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Add to Cart </button>
                    </div>
                </div>
                <a href={`#${product.added}`} onClick={(e) => handleAddToCart(e, product)}>
                    {/* <img src={`../../public/products/${product.productImg}`} alt={product.name} /> */}
                </a>

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



