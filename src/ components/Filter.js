import React from 'react'
import PropTypes from 'prop-types'

function Filter({ count, sorts, productType, handleChangeSort, handleChangeProduct, products, filteredProducts }) {
    return (
        <div>
            <div>
                {count} products found
            </div>
            <div>
                <label> Order by
                    <select className="form-control" value={sorts} onChange={(e) => handleChangeSort(e)}
                        name="" id="">
                        <option value="default">Default</option>
                        <option value="lowest">Lowest to Highest</option>
                        <option value="highest">Highest to Lowest</option>
                    </select>
                </label>
                <label> Pick an item
                    <select className="form-control" value={productType} onChange={handleChangeProduct}
                        name="" id="">
                        <option value="All">All</option>
                        <option value="mug">Mugs</option>
                        <option value="shirt">T-shirts</option>
                    </select>
                </label>
            </div>


        </div>
    )
}

Filter.propTypes = {

}

export default Filter

