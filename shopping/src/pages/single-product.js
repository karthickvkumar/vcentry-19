import React, { Component } from "react";
import axios from 'axios';
import Header from '../components/header';
import Footer from '../components/footer';

class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        productInfo: {}
    }
}

componentDidMount() {
  const productId = this.props.history.location.state;
  const productURL = "https://shop143.herokuapp.com/telebuy/api/product/" + productId;
  axios.get(productURL)
      .then((response) => {
          this.setState({
              productInfo: response.data
          })
      })
      .catch((errors) => {
          console.error(errors)
      })
}

  render() {
    console.log(this.state.productInfo)
    return (
      <div>
        <Header></Header>
        <div class="product-big-title-area">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="product-bit-title text-center">
                  <h2>Preview</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="single-product-area">
          <div class="zigzag-bottom"></div>
          <div class="container">
            <div class="row">


              <div class="col-md-12">
                <div class="product-content-right">
                  <div class="product-breadcroumb">
                    <a href="">Home</a>
                    <a href="">Category Name</a>
                    <a href="">{this.state.productInfo.name}</a>
                  </div>

                  <div class="row">
                    <div class="col-sm-6">
                      <div class="product-images">
                        <div class="product-main-img">
                          <img src={this.state.productInfo.image} alt=""/>
                        </div>

                        <div class="product-gallery">
                          <img src={require("../images/product-thumb-1.jpg").default} alt=""/>
                          <img src={require("../images/product-thumb-2.jpg").default} alt=""/>
                          <img src={require("../images/product-thumb-3.jpg").default} alt=""/>
                          </div>
                          </div>
                        </div>

                        <div class="col-sm-6">
                          <div class="product-inner">
                            <h2 class="product-name">{this.state.productInfo.name}</h2>
                            <div class="product-inner-price">
                              <ins>{this.state.productInfo.discount_price}</ins> <del>{this.state.productInfo.actual_price}</del>
                            </div>

                            <form action="" class="cart">
                              <div class="quantity">
                                <input type="number" size="4" class="input-text qty text" title="Qty"
                                  value="1" name="quantity" min="1" step="1" readOnly/>
                              </div>
                              <button class="add_to_cart_button" type="submit">Add to cart</button>
                            </form>

                            <div class="product-inner-category">
                              <p>Category: {this.state.productInfo.category} </p>
                            </div>

                            <div role="tabpanel">
                              <ul class="product-tab" role="tablist">
                                <li role="presentation" class="active"><a href="#home" aria-controls="home"
                                  role="tab" data-toggle="tab">Description</a></li>
                                
                              </ul>
                              <div class="tab-content">
                                <div role="tabpanel" class="tab-pane fade in active" id="home">
                                  <h2>Product Description</h2>
                                  <p>{this.state.productInfo.description}</p>
                                </div>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>

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

          export default ProductPage;