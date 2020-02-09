import React from 'react'


function Products({ productItems, handleAddToCart }) {
    const products = productItems === undefined ? "Undefined and empty" :
        (productItems.map(product => (
            < div className="w-1/4 m-2" key={product.id} value={product.id}>
                <div className="">
                    <img className="w-full" src={`${product.imageUrl[0]}`} alt={product.name} />
                    <div className="px-4 py-2 flex justify-between">
                        <span className="font-semibold text-base mb-2">
                            {product.name}
                        </span>

                        <span className="font-semibold text-base mb-2">${product.price}</span>
                        <button onClick={(e) => handleAddToCart(e, product)}>
                            add to cart
                        </button>

                    </div>

                </div>
            </div >
        )
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



