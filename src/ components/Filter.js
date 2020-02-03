import React from 'react'
import PropTypes from 'prop-types'

function Filter({ count, sort, handleChangeSort, handleChangeSize }) {
    return (
        <div>
            <div>
                {count} products found.
            </div>
            <div>
                <label> Order by
                    <select className="form-control" value={sort} onChange={handleChangeSort}
                        name="" id="">
                        <option value="">Select</option>
                        <option value="lowest">Lowest to Highest</option>
                        <option value="highest">Highest to Lowest</option>

                    </select>
                </label>
            </div>
            <div></div>

        </div>
    )
}

Filter.propTypes = {

}

export default Filter

