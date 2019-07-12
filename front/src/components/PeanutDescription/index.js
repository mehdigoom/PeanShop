import React, { Component } from 'react'
import './styles.scss'

class ProductDescription extends Component {
  render() {
      const { src, name, price, onClick, description } = this.props
    return (
      <article className="product-description">
        <figure>
            <img src={src} alt={name} />
        </figure>
        <div className="product-detail">
            <h1>{ name }</h1>
            <p>{ description }</p>
            <p>${ price }</p>
            <button className="product-description-button" onClick={onClick}>Add to cart</button>
        </div>
      </article>
    )
  }
}

export default ProductDescription
