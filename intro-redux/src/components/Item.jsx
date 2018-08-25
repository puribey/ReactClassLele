import React, { Component } from "react";
import { connect } from "react-redux";
import { addProduct, removeProduct } from "../state/actions";

class Item extends Component {
  render() {
    const { product, addProduct, removeProduct} = this.props 
    console.log(product)
    return (
      <div className="item">
        <span>{product.id}. {product.name}</span>
        <button onClick={() => addProduct({product})}>Add</button>
        <button onClick={() => removeProduct({product})}>Remove</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  selectedProduct: state.selectedProduct
});
const mapDispatchToProps = dispatch => ({
  addProduct: params => dispatch(addProduct(params)),
  removeProduct: params => dispatch(removeProduct(params))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Item);