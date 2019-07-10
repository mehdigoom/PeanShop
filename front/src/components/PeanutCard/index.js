import React, { Component } from 'react'
import './styles.scss'

class PeanutCard extends Component {
  render() {
      const { src, alt, price } = this.props
    return (
      <article className="peanut-card -pointerCursor">
        <figure>
			<img src={ src } alt={ alt } />
			<figcaption>${ price }</figcaption>
		</figure>
      </article>
    )
  }
}

export default PeanutCard
