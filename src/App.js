import React, { useState, useEffect } from 'react';
import './App.css';
import Products from './ components/Products'
import Filter from './ components/Filter';

function App() {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [sorting, setSort] = useState('')
  const [size, setSize] = useState()

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

  const handAddToCart = () => {
    console.log('okay')
  }
  const handleChangeSort = (e) => {
    setSort(e.target.value)
    listProducts()

  }
  const handleChangeSize = (e) => {
    // SetFiltering(filtering => sorting: e.target.value)
    console.log('okay')
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
    console.log('okay')
  }

  return (
    <div className="container">
      <h1>Ecommerce Shopping Cart Application</h1>
      <hr />
      <div className="one-column">
        <Filter
          size={size}
          sort={sorting}
          handleChangeSize={(e) => handleChangeSize(e)}
          handleChangeSort={handleChangeSort}
          count={filteredProducts.length} />
        <Products products={filteredProducts} handleAddToCart={handAddToCart} />
      </div>
    </div>
  );
}

export default App;
