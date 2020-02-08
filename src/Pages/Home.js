import React from 'react'
// import { Link } from "react-router-dom"
import Products from '../ components/Products'
import Filter from '../ components/Filter';
// import Basket from './ components/Basket';

function Home({
    products, filteredProducts, productType, sorted, handleChangeSort, handleChangeProduct, handleSelectProduct }) {
    return (
        <div className="w-full">
            <section className="flex justify-around bg-blue-100">
                <p className="text-lg">Logo</p>
                <p> Mens</p>
                <p>Women</p>
                <p>Cart</p>
            </section>
            <section className="flex">
                <section className="md:w-1/3">
                    <Filter
                        sorted={sorted}
                        productType={productType}
                        handleChangeSort={handleChangeSort}
                        handleChangeProduct={handleChangeProduct}
                        filteredProducts={filteredProducts}
                        products={products}
                    // count={filteredProducts.length}
                    />
                </section>
                <section className="md:w-2/3">
                    <div className="flex">
                        <Products
                            productItems={filteredProducts}
                            products={products}
                            handleSelectProduct={handleSelectProduct}
                        />
                    </div>
                </section>
            </section>
        </div>
    )
}


export default Home