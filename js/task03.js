import React, {Component} from "react";
import ReactDOM from "react-dom";
import products from "./data/products";


class Shop extends React.Component{

  render() {
      return (<>

                <Products  array={products}/>
                <Cart />
              </>
      )
  }
}

class Products extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }

    handleBuy = (arg) => {
        this.setState({
            list: [...this.state.list, arg]
        })
        console.log(this.state.list)
    }

  render() {
    return (<>
          <p>{console.log(products)}</p>
          <h2>Produkty</h2>

          <div>
            {products.map((el, i)=> {
                return (
                       <>
                       <ul key={el.id}>
                       <h4>{el.name}</h4>
                       <h5>{el.price}</h5>
                       <button className="btn btn-primary" onClick={this.handleBuy}>KUP!</button>
                       </ul>
                       </>)
            })}
          </div>
        </>
    )
  }
}

class Cart extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }
    handleBuyItem = () =>{
        if(typeof this.props.onBuy === "function") {
            this.props.onBuy(this.props.name)
        }
    }

  render() {
    return (<>
            <h2>Koszyk</h2>
            <ul>
                {this.state.list.map((e,i) => {
                    return <li key={i}>{e}</li>
                })}
            </ul>


        </>
    )
  }
}


class App extends React.Component{
  render() {
    return(
        <Shop/>

    )
  }
}

/**
 * Nie modyfikuj kodu poniżej!
 */
ReactDOM.render(<App/>, document.getElementById("app"));
export {
  App,
  Shop,
  Products,
  Cart
};

