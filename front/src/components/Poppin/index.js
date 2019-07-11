import React, { Component } from 'react'
import './styles.scss'

class Poppin extends Component {
    render() {
      const { children, onClick } = this.props

      return (
            <section className="poppin">
                <div className="poppin-wrapper">
                    <i className="fas fa-times" onClick={onClick}></i>
                    {children}
                </div>
            </section>
      )
    }
}

export default Poppin
