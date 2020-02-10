import React from 'react'
import { Link } from 'react-router-dom';


function Products({ productItems, products, handleAddToCart, handleSelectProduct }) {
    const displayProducts = productItems === undefined ? "Undefined and empty" :
        (productItems.map(product => (
            < div className="w-1/3" key={product.id} value={product.id}
                onClick={() => handleSelectProduct(product)}
            >
                <Link to={`/product/${product.name}`}>

                    <div className="">
                        <img width="350" height="350" src={`${product.imageUrl[0]}`} alt={product.name} />
                        <div className="px-4 py-2 flex justify-between">
                            <span className="font-semibold text-base mb-2">
                                {product.name}
                            </span>

                            <span className="font-semibold text-base mb-2">${product.price}</span>
                            {/* <button onClick={(e) => handleAddToCart(e, product)}>
                                add to cart
                        </button> */}

                        </div>

                    </div>
                </Link>

            </div >
        )
        ))
    return (
        <section className="flex flex-wrap" >
            {displayProducts}
        </section>
    )
}

Products.propTypes = {

}

export default Products



