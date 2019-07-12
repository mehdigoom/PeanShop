import React, { Component } from 'react'
import './styles.scss'

class ShoppingCardItem extends Component {


 render() {
    const { src, alt, name, price, quantity, onDelete } = this.props
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
        <button onClick={onDelete}>delete</button>
      </article>
    )
  }
}

export default ShoppingCardItem
