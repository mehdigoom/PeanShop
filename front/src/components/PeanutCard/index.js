import React, { Component } from 'react'
import './styles.scss'

class PeanutCard extends Component {
  render() {
      const { src, alt, price, name, showDetails, addToCard } = this.props
    return (
      <article className="peanut-card">
        <figure>
          <img src={src} alt={alt} />
          <figcaption>${ price }</figcaption>
        </figure>
        <p>{ name }</p>
        <div className="detail">
          <button className="add-to-card-button" onClick={addToCard}>
            <i className="fas fa-shopping-cart fa-2x"></i>
            Add to card
          </button>
          <button className="detail-button" onClick={showDetails}>
            <i className="fas fa-eye fa-2x"></i>
            Details
          </button>
        </div>
      </article>
    )
  }
}

export default PeanutCard
