import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './Home'
import Product from './Product';
import ShoppingCart from './ShoppingCart';
import Navbar from '../ components/Navbar';

function DataStore() {
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [sorting, setSorting] = useState("featured")
    const [cartItems, setCartItems] = useState([])
    const [productType, setProductType] = useState('All')
    const [gender, setGender] = useState('')
    const [selectedProduct, setSelectedProduct] = useState([])




    const dataApi = async () => {
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
    useEffect(() => {
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
            if (item.id === product.id) {
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
        console.log(product)

        //to add to local component state
        if (cartItems.length === 0) {
            product.count = 1
            setCartItems([product])
        } else {
            const isInCart = cartItems.filter(item => item.id === product.id)
            if (isInCart.length === 0) {
                product.count = 1
                setCartItems(prevState => [...prevState, product])
            } else {
                product.count++
                setCartItems(prevState => [...prevState])
            }

        }

    }

    // const handleChangeAddtoCart = (e) => {
    //     setAddToCartForm(prevState => {
    //         return {
    //             ...prevState, 
    //         }
    //     })
    //     console.log(e.target.value)
    // }
    const handleChangeSort = (e) => {
        e.preventDefault()
        const { value } = e.target
        setSorting(value)

        //convert into a switch case
        if (value === 'lowest') {
            filteredProducts.sort((a, b) => ((a.price - b.price)))
            setFilteredProducts(filteredProducts)

        } else if (value === 'highest') {
            filteredProducts.sort((a, b) => (b.price - a.price))
            setFilteredProducts(filteredProducts)
        } else {

            if (productType === 'All' || gender === '') {
                async function dataApi() {
                    let url = 'http://localhost:8000/product'
                    try {
                        const res = await fetch(url)
                        const data = await res.json()
                        setFilteredProducts(data)
                    } catch (error) {
                        console.log(error)
                    }
                }
                dataApi()
            } else {
                if (gender !== "" & productType !== 'All') {
                    let newFilteredProducts = products.filter(item => item.gender === gender & item.itemType === productType)
                    setFilteredProducts(newFilteredProducts)
                } else if (productType !== 'All') {
                    let newFilteredProducts = products.filter(item => item.itemType === productType)
                    setFilteredProducts(newFilteredProducts)

                } else {
                    let newFilteredProducts = products.filter(item => item.gender === gender)
                    setFilteredProducts(newFilteredProducts)

                }

            }

        }

    }

    const handleChangeProduct = (e) => {
        const { value } = e.target
        setProductType(value)

        if (value !== 'All') {
            setFilteredProducts(products)
            if (gender !== '') {
                const newProducts = products.filter(item => item.itemType === value & item.gender === gender)
                setFilteredProducts(newProducts)

            } else {
                const newProducts = products.filter(item => item.itemType === value)
                setFilteredProducts(newProducts)
            }
        }
        else {
            if (gender !== "") {
                const newProducts = products.filter(item => item.gender === gender)
                setFilteredProducts(newProducts)
            } else {
                setFilteredProducts(products)
            }
        }
    }
    const handleSelectGender = (e) => {

        const { value } = e.target
        setGender(value)

        if (value === 'Men') {
            setFilteredProducts(products)
            const filtered = products.filter(item => item.gender === 'Men' & (item.itemType === productType || productType === 'All'))
            setFilteredProducts(filtered)
        } else if (value === "Women") {
            setFilteredProducts(products)
            const filtered = products.filter(item => item.gender === 'Women' & (item.itemType === productType || productType === 'All'))
            setFilteredProducts(filtered)
        } else {
            if (productType !== "All") {
                const filtered = products.filter(item => item.itemType === productType)
                setFilteredProducts(filtered)
            } else {
                setFilteredProducts(products)
            }
        }
    }

    const handleRemoveFromCart = (e, id) => {
        const newCartItems = cartItems.filter(elem => elem.id !== id)
        localStorage.setItem('cartItems', JSON.stringify(newCartItems))
        setCartItems(newCartItems)
    }

    const handleQuantity = (e, productId) => {
        const { id } = e.target
        const productItem = cartItems.filter(elem => elem.id === productId)[0]

        switch (id) {
            case 'minus':
                productItem.count--
                setCartItems(prevState => {
                    localStorage.setItem('cartItems', JSON.stringify(prevState))
                    return [...prevState]
                })
                break
            case 'plus':
                productItem.count++
                setCartItems(prevState => {
                    localStorage.setItem('cartItems', JSON.stringify(prevState))
                    return [...prevState]
                })
                break
        }

    }

    const handleSelectProduct = (product) => {
        setSelectedProduct(product)
    }

    return (
        <Router>
            <Navbar cartItems={cartItems.length} />
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
                        handleAddToCart={handleAddToCart}
                        handleSelectGender={handleSelectGender}
                        gender={gender}

                    />
                </Route>
                <Route exact path='/cart'>
                    <ShoppingCart
                        cartItems={cartItems}
                        handleRemoveFromCart={handleRemoveFromCart}
                        handleQuantity={handleQuantity}
                    // handleAddToCart={handleAddToCart}

                    />
                </Route>
                <Route path='/product'>
                    <Product
                        product={selectedProduct}
                        // handleChange={handleChangeAddtoCart}
                        handleAddToCart={handleAddToCart} />
                </Route>
            </Switch>
        </Router>
    )
}

export default DataStore
