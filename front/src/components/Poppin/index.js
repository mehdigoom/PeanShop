import React, { Component } from 'react'

import classNames from 'classnames/bind';
import './styles.scss'

class Poppin extends Component {
    render() {
      const { children, onClick, size } = this.props

      return (
            <section className="poppin" >
                <div className={classNames('poppin-wrapper', size === 'small' && '-small')}>
                    <i className="fas fa-times" onClick={onClick}></i>
                    {children}
                </div>
            </section>
      )
    }
}

export default Poppin
