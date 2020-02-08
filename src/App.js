import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Product from './Pages/Product'
import ShoppingCart from './Pages/ShoppingCart'
import Home from './Pages/Home'
import DataStore from './Pages/DataStore'

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/cart' component={ShoppingCart} />
        <Route exact path='/product' component={Product} />

      </Switch>
      <DataStore />

    </Router>
  )
}

export default App




