import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import HelloWorld from '../src/Component/HelloWorld/HelloWorld'
import { HelloWorldFunction, Button } from './Component'

class App extends Component {
  constructor(props){
    console.log("paso por el constructor")
    super(props)
    this.state = {
      name: "",
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }
  handleInputChange(e) {
    console.log(e) 
    console.log(e.target.value)
    // Cannot read property 'setState' of undefined
    this.setState({
      name: e.target.value
    })
  }
  render() {
    const {name} = this.state
    console.log("paso por el render")
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {/*<HelloWorld />*/}
        <HelloWorldFunction nombre="Puri" apellido="Bey" />
        <Button />
        <input type="text" onChange={this.handleInputChange} />
        <p> Hello { name } </p>
      </div>
    );
  }
}

export default App;
