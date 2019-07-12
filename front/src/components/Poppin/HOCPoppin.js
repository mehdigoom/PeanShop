import React, { Component } from 'react'
import Poppin from '.';

class HOCPoppin extends Component {
    state = {
        login,
        register,
        details,
    }
  render() {
      const { login, register, details } = this.state
    return (
      <>
       {login && (
           <Poppin {...this.props} />
       )} 
       {register && (
           <Poppin />
       )}
       {details && (
            <Poppin />
       )}  
      </>
    )
  }
}

export default HOCPoppin
