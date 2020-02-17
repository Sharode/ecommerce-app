import React from 'react'
import Products from '../ components/Products'
import Filter from '../ components/Filter';

function Home({
    products, filteredProducts, gender, productType, sorted, handleChangeSort, handleChangeProduct, handleSelectProduct, handleAddToCart, handleSelectGender }) {
    return (
        <div className="w-full px-4 mt-4">

            <section className="flex">
                <section className="md:w-1/5 ">
                    <Filter
                        sorted={sorted}
                        productType={productType}
                        handleChangeSort={handleChangeSort}
                        handleChangeProduct={handleChangeProduct}
                        filteredProducts={filteredProducts}
                        products={products}
                        handleSelectGender={handleSelectGender}
                        gender={gender}
                    />
                </section>
                <section className=" w-full">
                    <div className="flex mx-3 px-3">
                        <Products
                            productItems={filteredProducts}
                            products={products}
                            handleSelectProduct={handleSelectProduct}
                            handleAddToCart={handleAddToCart}
                        />
                    </div>
                </section>
            </section>
        </div>
    )
}


export default Home