import React from 'react';
import PeanutCard from './components/PeanutCard';
import PeanutBasket from './components/PeanutBasket';
import './App.scss';
import PeanutFilterItem from './components/PeanutFilterItem';
import { productService } from './_services/product.service';

class App extends React.Component {
   constructor(props) {
      super(props);
		
      this.state = {
        ID: "",
         Username: "",
         passeword:"",
         nombrearticle:0,
         IDarticle:0,
         productList: []
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

  async getProduct() {
    const res = await productService.getProduct()
    this.setState({
      productList: res.data
    })
  }

  componentDidMount() {
    this.getProduct()
  }

  filterPeanuts = category => {
    const { productList: peanuts } = this.state
    let filteredPeanuts = [...peanuts]
    if (!category) this.getProduct()
    return filteredPeanuts.filter(peanut => peanut.category === category)
  }

  render() {
    const { productList } = this.state

    const productItem = productList.map((product) => (
      <PeanutCard 
        key={product.id}
        src={product.picture}
        alt={product.name}
        price={product.price}
        name={product.name}
        showDetails={() => alert(product.description)}
        // addToCard={}
      />
    ))

    return (
        <section className="wrapper -flex">
          <section className="sidebar">
            <PeanutBasket/>
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
              <PeanutFilterItem label="All" src="https://i.imgur.com/lgObM0q.png" filter={() => this.setState({productList: this.filterPeanuts()})}/>
              <PeanutFilterItem label="Sweetmeat" src="https://i.imgur.com/XP8LHXh.png" filter={() => this.setState({productList: this.filterPeanuts("Confiserie")})}/>
              <PeanutFilterItem label="Cake" src="https://i.imgur.com/gtJKyyI.png" filter={() => this.setState({productList: this.filterPeanuts("Patisserie")})}/>
              <PeanutFilterItem label="Ice" src="https://i.imgur.com/N75xDCz.png" filter={() => this.setState({productList: this.filterPeanuts("Glaces")})}/>
            </section>    
            <section className="peanut-container -flex">
              { productItem }
            </section>
          </section>
        </section>
    )} 

   }
   
export default App;
