import React from 'react'

import PropTypes from 'prop-types'

function Products({ products, handleAddToCart }) {
    const productItems = products.map(product => (
        <div key={product.added}>
            <div>
                <a href={`#${product.added}`} onClick={(e) => handleAddToCart(e, product)}>
                    {/* <img src={`../../public/products/${product.productImg}`} alt={product.name} /> */}
                </a>
                <p>
                    {product.name}
                </p>
                <p>
                    {product.price}
                </p>
                <button
                    onClick={(e) => handleAddToCart(e, product)}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    ))
    return (
        <section>
            {productItems}
        </section>
    )
}

Products.propTypes = {

}

export default Products



