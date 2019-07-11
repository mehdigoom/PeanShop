import React, { Component } from 'react'

class Login extends Component {
    render() {
      return (
        <form>
          <label>
            Login :
            <input type="text" name="name" />
            passeword :
            <input type="password" name="Password" />
          </label>
          <input type="submit" value="Envoyer" />
      </form>
      )
    }
  }
  
  export default Login;
  