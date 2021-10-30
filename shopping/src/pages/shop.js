import React, { Component } from "react";
import axios from 'axios';

import Header from '../components/header';
import Footer from '../components/footer';
import Product from '../components/product';

class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    const productURL = "https://shop143.herokuapp.com/telebuy/api/products";
    axios.get(productURL)
      .then((response) => {
        this.setState({
          products: response.data
        })
      })
      .catch((errors) => {
        console.error(errors)
      })
  }

  render() {
    return (
      <div>
        <Header></Header>
        <div class="product-big-title-area">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="product-bit-title text-center">
                  <h2>Smartphones</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="single-product-area">
          <div class="zigzag-bottom"></div>
          <div class="container">
            
              <Product products={this.state.products}></Product>
          </div>
        </div>

        <Footer></Footer>
      </div>
    )
  }
}

export default ShopPage;