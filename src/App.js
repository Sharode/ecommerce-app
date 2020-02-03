import React, { useState, useEffect } from 'react';
import './App.css';
import Products from './ components/Products'
import Filter from './ components/Filter';

function App() {
  const [products, SetProducts] = useState([])
  const [filteredProducts, SetFilteredProducts] = useState([])
  const [filtering, SetFiltering] = useState({
    sort: ''

  })

  useEffect(() => {
    async function dataApi() {
      let url = 'http://localhost:8000/product'
      try {
        const res = await fetch(url)
        const data = await res.json()
        SetProducts(data)
        SetFilteredProducts(data)
        console.log(data)
      } catch (error) {
        console.log(error)
      }

    }
    dataApi()
  }, [])
  const handAddToCart = () => {
    console.log('okay')
  }
  const handleChangeSize = () => {
    console.log('okay')
  }
  const handleChangeSort = (e) => {
    SetFiltering(...filtering, { sort: e.target.value })
    console.log{ 'oaky' }
  }
  const listProducts = () => {
    console.log('okay')
  }
  return (
    <div className="container">
      <h1>Ecommerce Shopping Cart Application</h1>
      <hr />
      <div className="one-column">
        <Filter size={size} sort={sort} handleChangeSize={handleChangeSize} handleChangeSort={handleChangeSort} count={filteredProducts.length} />
        <Products products={filteredProducts} handleAddToCart={handAddToCart} />
      </div>
    </div>
  );
}

export default App;
