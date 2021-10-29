import React, { Component } from "react";

class ProductPreview extends Component {
  render() {
    return (
      <div class="single-wid-product">
        <a href="single-product.html">
          <img src={require("../images/product-thumb-1.jpg").default} alt="" class="product-thumb" />
          </a>
        <h2><a href="single-product.html">Sony Smart TV - 2015</a></h2>
        <div class="product-wid-rating">
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
        </div>
        <div class="product-wid-price">
          <ins>$400.00</ins> <del>$425.00</del>
        </div>
      </div>
    )
  }
}

export default ProductPreview;