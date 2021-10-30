import React, { Component } from "react";
import axios from 'axios';
import Header from '../components/header';
import ImageSlider from '../components/image-slider';
import Product from '../components/product';
import ProductPreview from "../components/product-preview";
import Footer from '../components/footer';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      preview: {
        topSelling: [],
        recentlyViewed: [],
        topNew: []
      }
    }
  }

  componentDidMount() {
    const productURL = "https://shop143.herokuapp.com/telebuy/api/products/latest";
    const previewURL = "https://shop143.herokuapp.com/telebuy/api/product/preview";

    const requestProduct = axios.get(productURL);
    const requestPreview = axios.get(previewURL);

    axios.all([requestProduct, requestPreview]).then(axios.spread((...responses) => {
      this.setState({
        products: responses[0].data,
        preview: responses[1].data
      });
    })).catch((errors) => {
      console.error(errors)
    })
  }

  render() {
    return (
      <div>
        <Header></Header>
        <ImageSlider></ImageSlider>

        <div className="maincontent-area">
          <div className="zigzag-bottom"></div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="latest-product">
                  <h2 className="section-title">Latest Products</h2>
                  <div className="product-carousel">
                    <Product products={this.state.products}></Product>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="promo-area">
          <div className="zigzag-bottom"></div>
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <div className="single-promo promo1">
                  <i className="fa fa-refresh"></i>
                  <p>30 Days return</p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="single-promo promo2">
                  <i className="fa fa-truck"></i>
                  <p>Free shipping</p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="single-promo promo3">
                  <i className="fa fa-lock"></i>
                  <p>Secure payments</p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="single-promo promo4">
                  <i className="fa fa-gift"></i>
                  <p>New products</p>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div class="product-widget-area">
          <div class="zigzag-bottom"></div>
          <div class="container">
            <div class="row">
              <div class="col-md-4">
                <div class="single-product-widget">
                  <h2 class="product-wid-title">Top Sellers</h2>
                  <a href="" class="wid-view-more">View All</a>
                  <ProductPreview preview={this.state.preview.topSelling}></ProductPreview>
                </div>
              </div>
              <div class="col-md-4">
                <div class="single-product-widget">
                  <h2 class="product-wid-title">Recently Viewed</h2>
                  <a href="#" class="wid-view-more">View All</a>
                  <ProductPreview preview={this.state.preview.recentlyViewed}></ProductPreview>
                </div>
              </div>
              <div class="col-md-4">
                <div class="single-product-widget">
                  <h2 class="product-wid-title">Top New</h2>
                  <a href="#" class="wid-view-more">View All</a>
                  <ProductPreview preview={this.state.preview.topNew}></ProductPreview>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    )
  }
}

export default HomePage;