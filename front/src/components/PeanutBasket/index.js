import React, { Component } from 'react'
import './styles.css'
import ShoppingCardItem from '../ShoppingCardItem';


class PeanutBasket extends Component {


  constructor(props) {
    super(props);
  
    this.state = {
      ID: "2",
       Username: "",
       passeword:"",
       nombrearticle:0,
       IDarticle:0,
       price:0,
       basket: [
      
       ],
       value:""
    }
   // this.ajoutarticle= this.ajoutarticle.bind(this);
   
 }
 populateHeader(jsonObj) {
 
}


Getarticle(ID){
  fetch('http://127.0.0.1:5000/basket/'+ID)
  .then(function (response) {
      response.json()
          .then(function (value) {
              console.log(value);
         
       
              //return(value)
              
          });
  });

}



Getbasket = (ID) => {
  fetch('http://127.0.0.1:5000/basket/'+ID)
  .then( (response) => {
      response.json()
          .then((value1)=> {
            this.setState({
             value:value1
           })
           console.log(value1)
              return(value1)
              
               
          });
  });

}

 componentDidMount() {
   this.Getbasket(this.state.ID)

 }
totalprice(up){
this.setState({
  price:this.state.price+up
})
}
    render() {
      this.Getarticle(this.setState.IDarticle)

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
            {this.state.value && ( 

        
              <div className='line second'>
              
                <div>
                 {
                   this.state.value.map(listItems => {
                  
                   return ( <ShoppingCardItem  key={listItems.products_id} quantity={listItems.quantity} name={listItems.name} price={listItems.price} src={listItems.picture}></ShoppingCardItem> );
                    
                   })
                 } 
                </div>
              </div>
            )}

            </section>
            <div className='line'>
              <p>Total:</p>
              <p>{this.state.price}$</p>
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
  