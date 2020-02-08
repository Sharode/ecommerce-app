import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './Home'
import Product from './Product';
import ShoppingCart from './ShoppingCart';

function DataStore() {
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [sorting, setSorting] = useState("default")
    const [cartItems, setCartItems] = useState([])
    const [productType, setProductType] = useState('All')
    const [selectedProduct, setSelectedProduct] = useState([])

    useEffect(() => {
        async function dataApi() {
            let url = 'http://localhost:8000/product'
            try {
                const res = await fetch(url)
                const data = await res.json()
                setProducts(data)
                setFilteredProducts(data)
            } catch (error) {
                console.log(error)
            }
        }
        dataApi()

        if (localStorage.getItem('cartItems')) {
            setCartItems(JSON.parse(localStorage.getItem('cartItems')))
        }
    }, [])

    const addToLocalStorage = (product) => {
        // to add to localStorage
        const itemsInCart = cartItems
        let alreadyInCart = false;
        itemsInCart.forEach(item => {
            if (item.added === product.added) {
                alreadyInCart = true
                item.count++
            }
        });

        if (!alreadyInCart) {
            itemsInCart.push({ ...product, count: 1 })
        }
        localStorage.setItem('cartItems', JSON.stringify(itemsInCart))

    }

    const handleAddToCart = (e, product) => {

        addToLocalStorage(product)

        //to add to local component state
        if (cartItems.length === 0) {
            product.count = 1
            setCartItems([product])
        } else {
            const isInCart = cartItems.filter(item => item.added === product.added)
            if (isInCart.length === 0) {
                product.count = 1
                setCartItems(prevState => [...prevState, product])
            } else {
                product.count++
                setCartItems(prevState => [...prevState])
            }

        }

    }

    const handleChangeSort = (e) => {
        const fp = products // copying products to filter
        const { value } = e.target
        setSorting(value)


        //convert into a switch case

        if (value === 'lowest') {
            fp.sort((a, b) => ((a.price - b.price)))
            setFilteredProducts(fp)

        } else if (value === 'highest') {
            fp.sort((a, b) => (b.price - a.price))
            setFilteredProducts(fp)

        }


    }

    const handleChangeProduct = (e) => {
        setProductType(e.target.value)
        if (e.target.value !== 'All') {
            console.log(productType)
            const newProducts = products.filter(item => item.itemType === e.target.value)
            console.log(products.length)
            setFilteredProducts(newProducts)
        } else {
            setFilteredProducts(products)
        }



    }

    const handleRemoveFromCart = (e, item) => {
        const newCartItems = cartItems.filter(elem => elem.added !== item.added)
        localStorage.setItem('cartItems', JSON.stringify(newCartItems))
        setCartItems(newCartItems)
    }

    const handleSelectProduct = (e, product) => {
        setSelectedProduct(product)
    }

    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    <Home
                        products={products}
                        filteredProducts={filteredProducts}
                        productType={productType}
                        sorted={sorting}
                        handleChangeSort={handleChangeSort}
                        handleChangeProduct={handleChangeProduct}
                        handleSelectProduct={handleSelectProduct}
                    />
                </Route>
                <Route exact path='/cart'>
                    <ShoppingCart
                        cartItems={cartItems}
                        handleRemoveFromCart={handleRemoveFromCart}
                    />
                </Route>
                <Route exact path='/product'>
                    <Product
                        product={selectedProduct}
                        handleAddToCart={handleAddToCart} />
                </Route>
            </Switch>
        </Router>
    )
}

export default DataStore
