import React from 'react';
import Header from './components/Header';
import PeanutCard from './components/PeanutCard';
import PeanutBasket from './components/PeanutBasket';
import './App.scss';
import PeanutFilterItem from './components/PeanutFilterItem';
import { productService } from './_services/product.service';
import Poppin from './components/Poppin';
import ProductDescription from './components/PeanutDescription';
import ShoppingCardItem from './components/ShoppingCardItem';
import Login from './components/login';

class App extends React.Component {
   constructor(props) {
      super(props);
		
      this.state = {
        ID: "",
         nombrearticle:0,
         IDarticle:0,
         productList: [],
         product: [],
         productBasket: [],
         user: []
      }

      this.ajoutarticle= this.ajoutarticle.bind(this);
      this.retirarticle= this.retirarticle.bind(this);
      this.viderarticle= this.viderarticle.bind(this);
   }

  viderarticle() {
    this.setState({
      nombrearticle: 0
    })
  }

  ajoutarticle() {
    this.setState({
      nombrearticle: this.state.nombrearticle+1
    })
  }

  retirarticle(){ 
    if (this.state.nombrearticle > 0){
      this.setState({nombrearticle: this.state.nombrearticle-1})
    } 
  }

  async getProduct() {
    const res = await productService.getProduct()
    this.setState({
      productList: res.data
    })
  }

  async filterPeanuts (category) {
    if (!category) return this.getProduct()
    const res = await productService.filterProducts(category)
    this.setState({
      productList: res.data
    })
  }

  async showDetails(product) {
    await this.setState({
      product: product
    })
    this.togglePoppin()
  }
  
  togglePoppin = (poppinChildren) => {
    this.setState({
      displayModal: !this.state.displayModal
    })
  }

  addProduct = async product => {
    const productItem = { 
      basket_id: product.basket_id,
      category: product.category,
      description: product.description,
      id: product.id,
      name: product.name,
      picture: product.picture,
      price: product.price
    }
    await this.setState({
      productBasket: [...this.state.productBasket, productItem]
    })
    // this.getTotalPrice(this.state.productBasket)
  }

  // getTotalPrice = (array) => {
  //   const priceArray = array.find(elem => elem.price)
  //   array.reduce((a, b) => ({x: a.x + b.x}));
  //   console.log(priceArray);
  // }

  deletebasket = (ID) => {
    // fetch('http://127.0.0.1:5000//delproduct/'+ID,  {method: "DELETE", 
    // headers: { "Content-Type": "application/json" }, 
    // body: JSON.stringify({ID})
    // })
    // .then( (response) => {
    //     response.json()
    //         .then((value1)=> {
    //           this.setState({
    //            value:value1
    //          })
    //            return(value1)
                
                 
    //         });
    // });
    console.log("inside function");
    console.log("id", ID);
  
  }
  

  componentDidMount() {
    this.getProduct()
  }

  render() {
    const { productList, product, displayModal, productBasket } = this.state

    const productItem = productList.map((product) => (
      <PeanutCard 
        key={product.id}
        src={product.picture}
        alt={product.name}
        price={product.price}
        name={product.name}
        showDetails={() => this.showDetails(product)}
        addToCard={() => this.addProduct(product)}
      />
    ))

    const productBasketItem = productBasket.map((product) => (
      <ShoppingCardItem 
        key={product.id}
        src={product.picture}
        alt={product.name}
        price={product.price}
        name={product.name}
        quantity="1"
        onDelete={console.log('totoi')}
      />
    ))

    return (
        <section className="wrapper -flex">
          {displayModal && (
            <Poppin onClick={this.togglePoppin}>
              <ProductDescription 
                  src={product.picture}
                  name={product.name}
                  price={product.price}
                  description={product.description}
                  onClick={() => this.addProduct(product)}
                />
            </Poppin>
          )}
          {/* <Poppin onClick={this.togglePoppin} children={<Login/>}/> */}
          <section className="sidebar">

             <PeanutBasket/> 
            <div className="product-basket-wrapper">
              { productBasketItem }
            </div>
          </section>
            <Header onLogin={this.togglePoppin}/>

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
              <PeanutFilterItem label="All" src="https://i.imgur.com/lgObM0q.png" filter={() => this.filterPeanuts()}/>
              <PeanutFilterItem label="Sweetmeat" src="https://i.imgur.com/XP8LHXh.png" filter={() => this.filterPeanuts("Confiserie")}/>
              <PeanutFilterItem label="Cake" src="https://i.imgur.com/gtJKyyI.png" filter={() => this.filterPeanuts("Patisserie")}/>
              <PeanutFilterItem label="Ice" src="https://i.imgur.com/N75xDCz.png" filter={() => this.filterPeanuts("Glaces")}/>
            </section>    
            <section className="peanut-container -flex">
              { productItem }
            </section>
          </section>
        </section>
    )} 

  }
   
export default App;
