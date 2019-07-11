import React, { Component } from 'react'

class Login extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: "",
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

    const { username, password} = this.state;

    console.log("username :", username);
    console.log("password :", password);
    
    
    this.setState({
      submitted: true,
    })

    if (!(this.state.username && this.state.password)) {
      console.log("return");
      return;
    }


    return fetch("http://localhost:5000/user/login", 
    {method: "POST", 
    headers: { "Content-Type": "application/json" }, 
    body: JSON.stringify({username, password})
    })
    .then(response => {response.text()
    .then(data => {
      console.log(JSON.parse(data));})
      ;}
    );

  }

    render() {
      const { username, password } = this.state;
      return (
        <React.Fragment>
          <form name="form" onSubmit={this.handleSubmit}>
            <label>
              Login :
              <input type="text"
              className="form-control"
              name="username"
              value={username}
              onChange={this.handleChange}
              />
              passeword :
              <input type="password"
              className="form-control"
              name="password"
              value={password}
              onChange={this.handleChange}/>
            </label>
            <input type="submit" value="Envoyer" onClick={this.handleSubmit} />
          </form>
          {this.state.submitted && !username && (<p>username required !</p>)}
          {this.state.submitted && !password && (<p>password required !</p>)}
        </React.Fragment>
      )
    }
  }
  
  export default Login;
  