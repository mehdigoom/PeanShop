import React, { Component } from 'react'

class Login extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      email: "",
      password:"",
      submitted: false,
    }

  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    })
    console.log(name, value);
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { email, password} = this.state;

    console.log("email :", email);
    console.log("password :", password);
    
    
    this.setState({
      submitted: true,
    })

    if (!(this.state.email && this.state.password)) {
      console.log("return");
      return;
    }


    return fetch("http://localhost:5000/user/login", 
    {method: "POST", 
    headers: { "Content-Type": "application/json" }, 
    body: JSON.stringify({email, password})
    })
    .then(response => {
      response.text()
      console.log(response);
    })
    .then(data => {
        this.setState({
        email: JSON.parse(data).email,
        password: JSON.parse(data).password,
      })
    })
    .catch(function() {
      console.log("error",
      alert('Mauvais identifiants'));
  });


    

  }

    render() {
      const { email, password } = this.state;
      return (
        <React.Fragment>
          <form name="form" onSubmit={this.handleSubmit}>
          <label htmlFor="email">Email</label>
              <input type="text"
              name="email"
              value={email}
              onChange={this.handleChange}
              />
              <label htmlFor="password">Password</label>
              <input type="password"
              name="password"
              value={password}
              onChange={this.handleChange}/>
            <input type="submit" value="Envoyer" onClick={this.handleSubmit} />
          </form>
          {this.state.submitted && !email && (<p>email required !</p>)}
          {this.state.submitted && !password && (<p>password required !</p>)}
        </React.Fragment>
      )
    }
  }
  
  export default Login;
  