import React, {Component} from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import HomePage from './pages/home';
import ShopPage from './pages/shop';
import ProductPage from './pages/single-product';
import CartPage from './pages/cart';
import CheckoutPage from './pages/checkout';

import './css/bootstrap.min.css';
import './css/font-awesome.min.css';
import './css/style.css';
import './css/responsive.css';

class App extends Component{
  render(){
    return(
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/shop" component={ShopPage}></Route>
          <Route path="/product" component={ProductPage}></Route>
          <Route path="/cart" component={CartPage}></Route>
          <Route path="/checkout" component={CheckoutPage}></Route>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;