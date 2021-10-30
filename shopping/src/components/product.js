import React, { Component } from "react";

class Product extends Component {
  render() {
    let products = this.props.products.map((value, index) => {
      return (
        <div class="col-md-3">
          <div className="single-product" key={index}>
            <div className="product-f-image">
              <img src={value.image} alt="" />
              <div className="product-hover">
                <a href="#" className="add-to-cart-link"><i className="fa fa-shopping-cart"></i> Add to
                  cart</a>
                <a className="view-details-link"><i
                  className="fa fa-link"></i> See details</a>
              </div>
            </div>

            <h2><a>{value.name}</a></h2>

            <div className="product-carousel-price">
              <ins>{value.discount_price}</ins> <del>{value.actual_price}</del>
            </div>
          </div>
        </div>

      )
    })

    return (
      <div class="row">
        {products}
      </div>
    )
  }
}

export default Product;