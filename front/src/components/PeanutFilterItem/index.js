import React, { Component } from 'react'
import './styles.scss'

class PeanutFilterItem extends Component {
  render() {
      const { label, filter, src } = this.props
    return (
        <div className="peanut-filter-item flex" onClick={filter}>
            <figure>
                <img src={src} alt="Peanut" />
            </figure>
            <p>{label}</p>
        </div>
    )
  }
}

export default PeanutFilterItem
