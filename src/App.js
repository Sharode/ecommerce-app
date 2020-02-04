import React, { useState, useEffect } from 'react';
import './App.css';
import Products from './ components/Products'
import Filter from './ components/Filter';
import Basket from './ components/Basket';

function App() {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [sorting, setSort] = useState('')
  const [cartItems, setCartItems] = useState([])

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

  const handAddToCart = (e, product) => {

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

    localStorage.setItem('cartItems', JSON.stringify(cartItems))

  }

  const handleChangeSort = (e) => {
    setSort(e.target.value)
    listProducts()
  }

  const listProducts = () => {
    if (!sorting) {
      products.sort((a, b) => (
        (sorting === 'lowest') ? (a.price < b.price ? 1 : -1) : (a.price > b.price ? 1 : -1)
      ))
    } else {
      products.sort((a, b) => (a.id < b.id ? 1 : -1))
    }

    //might need a return here
    return setFilteredProducts(products)
  }
  const handleRemoveFromCart = (e, item) => {
    const newCartItems = cartItems.filter(elem => elem.added !== item.added)
    localStorage.setItem('cartItems', JSON.stringify(newCartItems))
    setCartItems(newCartItems)
  }

  return (
    <div className="container">
      <h1>Ecommerce Shopping Cart Application</h1>
      <hr />
      <div style={{ display: "flex" }}>
        <div className="one-column">
          <Filter
            sort={sorting}
            handleChangeSort={handleChangeSort}
            count={filteredProducts.length}
          />
          <Products products={filteredProducts} handleAddToCart={handAddToCart} />
        </div>
        <div className="two-column">
          <Basket cartItems={cartItems} handleRemoveFromCart={handleRemoveFromCart} />
        </div>
      </div>

    </div>
  );
}




export default App;
