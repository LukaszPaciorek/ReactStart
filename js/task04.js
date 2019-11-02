import React, {Component} from "react";
import ReactDOM from "react-dom";

class LoadingData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: this.props.time,
      width: this.props.width
    }
  }
  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({
        width: (this.state.width) + 1 +'%',

      })
    }, 100)
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  render() {
    const divStyle = {
      width: this.state.width
    }
    return(
        <>
          <div className="progress">
            <div className="progress-bar" style={divStyle}></div>
          </div>
        </>

    )
  }

}

class App extends Component {
  render() {
    return <LoadingData width={100}/>
  }
}

/**
 * Nie modyfikuj kodu poniżej!
 */
ReactDOM.render(<App/>, document.getElementById("app"));
export {
  App,
  LoadingData
};
