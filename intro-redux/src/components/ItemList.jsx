import React, { Component } from "react";
import Item from "./Item";

export default class ItemList extends Component {
  render() {
    const { products } = this.props;
    return (
      <div>
        <h2>Games Here!</h2>
        {products.map((item, i) => {
          return (
            <Item
              key={i}
              product={item}
            />
          );
        })}
      </div>
    );
  }
}
