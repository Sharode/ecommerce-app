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
  }, [])

  const handAddToCart = (e, product) => {

    if (cartItems.length === 0) {
      setCartItems([product])
    } else {
      console.log(cartItems)
      const isInCart = cartItems.filter(item => item.added === product.added)
      console.log(isInCart)
      if (isInCart.length === 0) {
        setCartItems(prevState => [...prevState, product])
      }
    }

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
  const handleRemoveFromCart = () => {

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
