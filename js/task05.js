import React, {Component} from "react";
import ReactDOM from "react-dom";

class ContactForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      text: "",
      display: true
    }
  }

  handleOnChange = (e) => {
    this.setState({
      name: e.target.value,
      email: e.target.value,
      text: e.target.value,
    })
  }

  handleOnClick = (e) => {
    e.preventDefault();
    console.log(this.state.name)
    console.log(this.state.email)
    console.log(this.state.text)
  }

  render() {
    let info;
    return(
        <>
          <input class="form-control" onChange={this.handleOnChange} value={this.state.name}/>
          <input class="form-control" type="email" onChange={this.handleOnChange} value={this.state.email}/>
          <textarea class="form-control" onChange={this.handleOnChange} value={this.state.text}/>
          <button onClick={this.handleOnClick}class="btn btn-primary" type="submit">Wyślij!</button>
        </>
    )
  }
}

class App extends React.Component{
  render() {
    return(
        <ContactForm />
    )
  }
}

/**
 * Nie modyfikuj kodu poniżej!
 */
ReactDOM.render(<App/>, document.getElementById("app"));
export {
  App,
  ContactForm
};
