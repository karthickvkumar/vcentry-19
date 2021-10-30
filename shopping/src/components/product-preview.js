import React, { Component } from "react";

class ProductPreview extends Component {
  render() {
    let productPreview = this.props.preview.map((value, index) => {
      return (
        <div class="single-wid-product" key={index}>
          <a>
            <img src={value.image} alt="" class="product-thumb" />
          </a>
          <h2><a>{value.name}</a></h2>
          <div class="product-wid-rating">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
          </div>
          <div class="product-wid-price">
            <ins>{value.discount_price}</ins> <del>{value.actual_price}</del>
          </div>
        </div>
      )
    })

    return (
      productPreview
    )
  }
}

export default ProductPreview;