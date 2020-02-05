import React from 'react'
import PropTypes from 'prop-types'

function Filter({ count, sort, productView, handleChangeSort, handleChangeProduct }) {
    return (
        <div>
            <div>
                {count} products found.
            </div>
            <div>
                <label> Order by
                    <select className="form-control" value={sort} onChange={handleChangeSort}
                        name="" id="">
                        <option value="">Default</option>
                        <option value="lowest">Lowest to Highest</option>
                        <option value="highest">Highest to Lowest</option>
                    </select>
                </label>
                <label> Pick an item
                    <select className="form-control" value={productView} onChange={handleChangeProduct}
                        name="" id="">
                        <option value="">All</option>
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

