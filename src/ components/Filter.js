import React from 'react'
import PropTypes from 'prop-types'

function Filter({ count, sorts, productType, handleChangeSort, handleChangeProduct, products, filteredProducts, gender, handleSelectGender }) {
    return (
        <div>
            <h2 className="text-lg font-semibold text-center">Filter</h2>
            <div>
                <label> Order by
            <div className="relative">
                        <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" value={sorts} onChange={(e) => handleChangeSort(e)}
                            name="" id="">
                            <option value="featured">Featured</option>
                            <option value="lowest">Lowest to Highest</option>
                            <option value="highest">Highest to Lowest</option>
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                    </div>
                </label>
            </div>
            <div>
                <label> Pick an item
            <div className="relative">

                        <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" value={productType} onChange={handleChangeProduct}
                            name="" id="">
                            <option value="All">All</option>
                            <option value="shoe">Shoes</option>
                            <option value="shirt">T-shirts</option>
                            <option value="Hoodie">Hoodies/SweatShirts</option>

                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                    </div>
                </label>
            </div>
            <div>
                <label> Gender
                <div className="relative">
                        <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" value={gender} onChange={(e) => handleSelectGender(e)}
                        >
                            <option value="All">All</option>
                            <option value="Men">Men</option>
                            <option value="Women">Women</option>
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                    </div>
                </label>
            </div>
        </div>
    )
}

Filter.propTypes = {

}

export default Filter

