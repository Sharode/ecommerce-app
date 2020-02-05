import React, { useState, useEffect } from 'react';
import Products from './ components/Products'
import Filter from './ components/Filter';
import Basket from './ components/Basket';

function App() {

  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [sorting, setSorting] = useState("default")
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
      products.sort((a, b) => ((a.price - b.price)))

    } else if (sorting === 'highest') {
      products.sort((a, b) => (b.price - a.price))
    }

    if (productType !== 'All') {
      console.log(productType)
      let newProducts = products.filter(item => item.itemType === productType)
      setFilteredProducts(newProducts)
    }

    //might need a return here
    setFilteredProducts(products)
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

  return (
    <div className="w-full bg-gray-200">
      <h1 className="">Ecommerce Shopping Cart Application</h1>
      <hr />
      <div>
        <Filter
          sort={sorting}
          productView={productType}
          handleChangeSort={handleChangeSort}
          handleChangeProduct={handleChangeProduct}
          productFiltered={filteredProducts}
          products={products}
          count={filteredProducts.length}
        />
      </div>
      <div className="flex">
        <div className="w-4/5">
          <Products
            productItems={filteredProducts}
            products={products}
            productChange={productType}
            sorts={sorting}
            handleAddToCart={handAddToCart}
          />
        </div>
        <div className="w-1/5">
          <Basket cartItems={cartItems} handleRemoveFromCart={handleRemoveFromCart} />
        </div>
      </div>

    </div>
  );
}




export default App;
