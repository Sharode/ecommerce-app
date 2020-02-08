import React, { useState } from 'react'


function Products({ productItems, handleAddToCart }) {

    const [hovering, setHovering] = useState('hidden')

    const handleMouseEnter = (e, product) => {
        console.log(product.added === key)
        console.log(key)
        console.log(product.added)
        if (product.added === e.target.id) {
            setHovering(prevState => prevState = 'block')
        }
    }

    const handleMouseLeave = () => {
        setHovering(prevState => prevState = 'hidden')
    }


    const products = productItems.map(product => (
        < div className="w-1/5 m-4" key={product.added} value={product.added}
            onMouseEnter={(e) => handleMouseEnter(e, product)}
            onMouseLeave={handleMouseLeave}
        >

            <div class="max-w-sm rounded overflow-hidden shadow-md">
                <div class="px-6 py-4 image-bg">
                    <img className="h-full w-full object-cover" src={`../../../products/${product.productImg}`} alt={product.name} />

                </div>
                <div className="px-4 py-2 text-center">
                    <div className="font-semibold text-base mb-2">
                        {product.name}
                    </div>
                    <div>
                        <span className="inline-block px-1 py-1 text-sm font-semibold text-gray-700 mr-2">${product.price}</span>
                    </div>
                </div>
                <div

                    onClick={(e) => handleAddToCart(e, product)}
                    className={`${hovering} inline-block bg-yellow-500 w-full px-3 py-1 text-sm cursor-pointer text-center font-semibold text-black mr-2`}

                >{hovering === "hidden" ? "" : "Add to Cart"} </div>
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



