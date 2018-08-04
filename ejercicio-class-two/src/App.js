import React, { Component } from 'react';
import './App.css';
import { Button, Result } from './Component';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    const { counter } = this.state
    this.setState({
      counter: counter + 1
    })
  }
  render() {
    const { counter } = this.state
    return (
      <div className="app-container">
        <Button handleClick={this.handleClick}/>
        <Result resultado={ counter } />
      </div>
    );
  }
}

export default App;
