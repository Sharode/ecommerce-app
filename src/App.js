import React, { useState, useEffect } from 'react';
import './App.css';
import Products from './ components/Products'
import Filter from './ components/Filter';
import Basket from './ components/Basket';

function App() {


  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [sorting, setSorting] = useState('default')
  const [cartItems, setCartItems] = useState([])
  const [productType, setProductType] = useState('All')

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

  const listProducts = () => {
    if (sorting === 'lowest') {
      products.sort((a, b) => ((a.price > b.price ? 1 : -1)
      ))
    } else if (sorting === 'highest') {
      products.sort((a, b) => (a.id < b.id ? 1 : -1))
    }

    if (productType !== 'All') {
      console.log(productType)
      let newProducts = products.filter(item => item.itemType.indexOf(productType) >= 0)
      return setFilteredProducts(newProducts)
    }

    //might need a return here
    // return this.setState({ filteredProducts: products })
    return setFilteredProducts(products)
  }

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

  const handAddToCart = (e, product) => {

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
        console.log('pow 2')
      } else {
        product.count++
        setCartItems(prevState => [...prevState])
        console.log('pow 3')
      }

    }

  }

  const handleChangeSort = (e) => {
    setSorting(e.target.value)
    listProducts()
  }

  const handleChangeProduct = (e) => {
    setProductType(e.target.value)
    listProducts()

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
            productView={productType}
            handleChangeSort={handleChangeSort}
            handleChangeProduct={handleChangeProduct}
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
