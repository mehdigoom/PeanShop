import React, { Component } from 'react'
import './styles.css'

class PeanutBasket extends Component {


  constructor(props) {
    super(props);
  
    this.state = {
      ID: "",
       Username: "",
       passeword:"",
       nombrearticle:0,
       IDarticle:0,
    }
   // this.ajoutarticle= this.ajoutarticle.bind(this);
   
 }
 populateHeader(jsonObj) {
 
}

Getuser(user){
  var obj = { email: this.state.Username, password: this.state.passeword };
  var myJSON = JSON.stringify(obj);
  var find = 0;
  fetch('http://127.0.0.1:5000/users/login')
  .then(function (response) {
      response.json()
          .then(function (value) {
              console.log(value);
             
var user = value[find].firstname

console.log(user) 
              //return(value)
              
          });
  });

}

Getarticle(){
  fetch('http://127.0.0.1:5000/products')
  .then(function (response) {
      response.json()
          .then(function (value) {
              console.log(value);
           
              //return(value)
              
          });
  });

}



Getbasket(ID){
  fetch('http://127.0.0.1:5000//basket/'+ID)
  .then(function (response) {
      response.json()
          .then(function (value) {
              console.log(value);
          
              //return(value)
              
          });
  });

}


    render() {
      this.Getuser()
      return (
          <div>
            <div className='inline'>
              <img className='bonhom' alt='' src={require('./../../bonhomme_maq.png')}/>
              <p className='name'>Hey, John</p>
              <div className="number">
                <p className="num">2</p>
              </div>
            </div>
            <div className='edit'>
              <div className='line'>
                <input className="text" type='text' placeholder='361 avenue street' />
                <img className='stylo' alt='' src={require('./../../stylo_maq.png')}/>
              </div>
            </div>
            <section>
              <div className='line'>
                {/* <img className='product' alt='' src={require('./../../chocolate_blue.png')}/> */}
                <p>1x Peanut bar 30$</p>
              </div>
              <div className='line second'>
                <img className='product' alt='' src={require('./../../peanut_butter.jpg')}/>
                <p>1x Peanut bottle 25$</p>
              </div>
            </section>
            <div className='line'>
              <p>Total: </p>
              <p>55$</p>
            </div>
            <hr/>
            <div className='violet'>
              <div className='line'>
              <a href='/'>Buy</a>
                {/* <img className='fleche' alt='' src={require('./../../fleche_maq.png')}/> */}
              </div>
            </div>
          </div>
      )
    }
  }
  
  export default PeanutBasket;
  