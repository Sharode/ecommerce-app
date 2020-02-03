import React from 'react'

import PropTypes from 'prop-types'

function Products({ products, handleAddToCart }) {
    const productItems = products.map(product => (
        <div key={product.added}>
            <div>
                <a href="" onClick={handleAddToCart}>
                    <img src={`../../public/products/${product.productImg}`} alt={product.name} />
                </a>
                <p>
                    {product.name}
                </p>
                <p>
                    {proudct.price}
                </p>
                <button
                    onClick={handleAddToCart}
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



