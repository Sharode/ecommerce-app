import React from 'react'
// import { Link } from 'react-router-dom'


const products = [{
    "size": [
        5,
        5.5,
        6,
        6.5,
        7,
        7.5,
        8,
        8.5,
        9,
        9.5,
        10,
        10.5,
        11,
        11.5,
        12
    ],
    "gender": "Women",
    "imageUrl": [
        "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/40b70b24-bd28-4910-899d-549ad0c2e817/vista-lite-womens-shoe-VFKnkk.jpg",
        "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/cce3f994-b949-4d7d-917b-151bbbcac9d9/vista-lite-womens-shoe-VFKnkk.jpg",
        "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/2f94fd49-8e65-4a2a-8af2-257c47620d07/vista-lite-womens-shoe-VFKnkk.jpg"
    ],
    "price": 10.99,
    "name": "Nike Vista Lite",
    "description": "enim corporis voluptatibus laudantium possimus alias dolorem voluptatem similique aut aliquam voluptatem voluptatem omnis id consequatur",
    "id": 1485723766805,
    "itemType": "shoe"
}]
const product = products[0]

function Product() {
    return (
        <section className="flex">
            <div className="w-2/3">
                <img src={product.imageUrl[0]} alt={product.name} height="400" width="400" />
            </div>
            <div className="w-1/3">
                <h5>Select Size</h5>
                <div className="max-w-xs flex flex-wrap">
                    {product.size.map(item => (
                        <div className="w-1/6 p-1 m-1">
                            <div className="shadow-sm">
                                {item}
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </section>
    )
}

export default Product