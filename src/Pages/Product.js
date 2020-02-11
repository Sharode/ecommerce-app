import React, { useState } from 'react'
import Select from 'react-select'
// import { Link } from 'react-router-dom'




function Product({ handleAddToCart, product }) {
    const [size, setSize] = useState()

    const handleChange = (e) => {
        console.log(e.value)
        setSize(e)
    }


    const options = product.size.map(item => ({ value: item, label: item }))
    return (
        <section className=" m-auto flex">
            <div className="w-3/5 bg-snkr">
                <img
                    className="w-1/2 m-auto"
                    src={product.imageUrl[0]} alt={product.name} />
            </div>
            <div className="w-2/5 px-2">
                <h1 className="text-lg font-thin text-center">Nike</h1>
                <h2 className="text-center text-4xl font-bold ">{product.name}</h2>
                <h4 className="text-center text-2xl font-bold">{product.price}</h4>

                <hr className="w-1/5 m-auto" />
                <h3 className="text-center text-base">{product.description} </h3>

                <h5 className="text-lg font-semibold text-center ">Select Size</h5>


                <div>
                    <Select
                        value={size}
                        onChange={(e) => handleChange(e)}
                        options={options}
                    />
                    <button
                        onClick={(e) => handleAddToCart(e, product)}
                        className="bg-yellow-300 text-red-600 ">
                        Add to Cart
                    </button>
                </div>

            </div>
        </section>
    )
}

export default Product