import React from 'react'


function Products({ productItems }) {
    const products = productItems === undefined ? "Undefined and empty" :
        (productItems.map(product => (
            < div className="w-1/5 m-4" key={product.id} value={product.id}>
                <div class="max-w-sm rounded overflow-hidden shadow-md">
                    <div class="px-6 py-4 image-bg">
                        <img className="h-full w-full object-cover" src={`${product.imageUrl[0]}`} alt={product.name} />
                    </div>
                    <div className="px-4 py-2 text-center">
                        <div className="font-semibold text-base mb-2">
                            {product.name}
                        </div>
                        <div>
                            <span className="inline-block px-1 py-1 text-sm font-semibold text-gray-700 mr-2">${product.price}</span>
                        </div>
                    </div>

                </div>

            </div >)
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



