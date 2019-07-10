import React from 'react';
import PeanutCard from './components/PeanutCard';
import PeanutBasket from './components/PeanutBasket';
import './App.scss';
import PeanutFilterItem from './components/PeanutFilterItem';

import  TestMiro  from './TestMiro.js';
import  Footer  from './Footer.js';
import  Body from './Body.js';
import  header from './Header.js';

class App extends React.Component {
   constructor(props) {
      super(props);
		
      this.state = {
        ID: "",
         Username: "",
         passeword:"",
         nombrearticle:0,
         IDarticle:0,
      }
      this.ajoutarticle= this.ajoutarticle.bind(this);
      this.retirarticle= this.retirarticle.bind(this);
      this.viderarticle= this.viderarticle.bind(this);
   }

    viderarticle(){
    this.setState({nombrearticle: 0})
  
  }

  ajoutarticle(){

  this.setState({nombrearticle: this.state.nombrearticle+1})

}

    retirarticle(){

    if (this.state.nombrearticle > 0){
      this.setState({nombrearticle: this.state.nombrearticle-1})
    } 
  }

  render() {

    return (
        <section className="wrapper -flex">
          <section className="sidebar">
            <PeanutBasket/>
            {/* <TestMiro /> */}
          </section>
          <header>
              <nav></nav>
          </header>
          <section className="container -flex">
          <article className="delivery -flex">
                <figure className="delivery-figure"><img src="https://i.imgur.com/KfBVf9w.jpg" alt="Delivery Image" /></figure>
                <div className="delivery-message">
                    <h4>Don't wait to long to be delivered !</h4>
                  <p>lorem ipsum dolor sit amet ...</p>
              </div>
            </article> 
            <h2>Choose your peanut</h2>
            <section className="peanut-filter -flex">
              <PeanutFilterItem label="All" />
              <PeanutFilterItem label="Bottle" />
              <PeanutFilterItem label="Cake" />
            </section>    
            <section className="peanut-container -flex">
              {/* exemple peanut card */}
                <PeanutCard src="https://cdn.dribbble.com/users/508142/screenshots/3991256/3.jpg" alt="toto" price="55" />
                <PeanutCard src="https://cdn.dribbble.com/users/508142/screenshots/3991256/3.jpg" alt="toto" price="55" />
                <PeanutCard src="https://cdn.dribbble.com/users/508142/screenshots/3991256/3.jpg" alt="toto" price="55" />
            </section>
          </section>
        </section>
    )} 

   }
   


export default App;
