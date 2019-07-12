import React, { Component } from 'react'
import './styles.scss'

class ShoppingCardItem extends Component {
  render() {
    const { src, alt, name, price, quantity } = this.props
    return (
      <article className="shopping-item">
        <figure className="shopping-item-picture">
          <img src={src} alt={alt} />
        </figure>
        <div>
          <p>{quantity}x</p>
          <p>{name}</p>
          <p>{price}$</p>
        </div>
      </article>
    )
  }
}

export default ShoppingCardItem
