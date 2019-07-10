import React, { Component } from 'react'
import './styles.scss'

class PeanutFilterItem extends Component {
  render() {
      const { src, alt, label } = this.props
    return (
        <div className="peanut-filter-item flex">
            <figure>
                <img src="https://i.imgur.com/jyvyD7B.png" alt="Peanut" />
            </figure>
            <p>{label}</p>
        </div>
    )
  }
}

export default PeanutFilterItem
