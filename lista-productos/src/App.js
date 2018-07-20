import React, { Component } from 'react';
import './App.css';
import { ItemList } from './Component'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      listOfItems: [
        { category: "Manga", description:"japanese comics", rangeOfPrice: [5.5, 6, 10] },
        { category: "Comic", description:"american pop culture", rangeOfPrice: [10, 9.9, 12] },
        { category: "Boardgames", description:"european table top games", rangeOfPrice: [20, 15.5, 50] }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <ItemList items={this.state.listOfItems}/>
      </div>
    );
  }
}

export default App;
