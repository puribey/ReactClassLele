import React, { Component } from 'react';

export default class Item extends Component {
    constructor(props) {
        super(props)
        console.table(this.props)
        this.state = {}
    }
    render() {
        return (
          <div>
            <div className="item-container">
                <h3>{this.props.itemMapeado.category}</h3>
                <p>Description: {this.props.itemMapeado.description}</p>
                <p>Price: ${this.props.itemMapeado.rangeOfPrice[0]}</p>
            </div>
          </div>
        )
    }
}