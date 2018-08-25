import React, { Component } from "react";
import "./App.css";
import ItemList from "./components/ItemList";
import { connect } from "react-redux";

class App extends Component {
  constructor() {
    super();
    this.state = {
      listOfProducts: [
        { id: 1, name: "King of Tokyo", description: "Juego de Kaijus" },
        { id: 2, name: "Takenoko", description: "Juego de pandas y bamboos" },
        { id: 3, name: "Ora et Labora", description: "Euro de panes y vinos" },
        { id: 4, name: "Russian Railroads", description: "Creacion de trenes" },
        {
          id: 5,
          name: "Castles of Mad King Ludwig",
          description: "Arquitecto de castillos locos"
        },
        { id: 6, name: "Tsuru", description: "Armar caminos chinos" }
      ],
    };
  }

  render() {
    const { selectedProducts } = this.props;
    return (
      <div className="app">
        <div className="ejercicio-uno">
          <ItemList
            products={this.state.listOfProducts}
          />
          <div className="descripcion-item">
          {selectedProducts.map((product,index) => {
            return  <p key={index}>{product.description}</p>
          })}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  selectedProducts: state.selectedProducts
});
export default connect(
  mapStateToProps,
  null
)(App);
