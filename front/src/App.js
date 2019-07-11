import React from 'react';
import Header from './components/Header';
import PeanutCard from './components/PeanutCard';
import PeanutBasket from './components/PeanutBasket';
import './App.scss';
import PeanutFilterItem from './components/PeanutFilterItem';
import { productService } from './_services/product.service';
import Poppin from './components/Poppin';

class App extends React.Component {
   constructor(props) {
      super(props);
		
      this.state = {
        ID: "",
         nombrearticle:0,
         IDarticle:0,
         productList: []
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

  showDetails = (productId) => {
    console.log('ID_PRODUCT', productId)
    this.togglePoppin()
  }
  
  togglePoppin = () => {
    this.setState({
      displayModal: !this.state.displayModal
    })
  }

  componentDidMount() {
    this.getProduct()
  }

  render() {
    const { productList, displayModal } = this.state

    const productItem = productList.map((product) => (
      <PeanutCard 
        key={product.id}
        src={product.picture}
        alt={product.name}
        price={product.price}
        name={product.name}
        showDetails={() => this.showDetails(product.id)}
        // addToCard={}
      />
    ))

    return (
        <section className="wrapper -flex">
          {displayModal && (
            <Poppin onClick={this.togglePoppin} size="small"/>
          )}
          <section className="sidebar">
            <PeanutBasket/>
          </section>
          <section className="container -flex">
            <Header/>
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
