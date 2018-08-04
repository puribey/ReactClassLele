import React, { Component } from 'react';
import './App.css';
import { ItemList } from './Component'

const manga = "Manga"
const comic = "Comic"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      listOfItemsOriginal: [
        { category: "Manga", description:"japanese comics", rangeOfPrice: [5.5, 6, 10] },
        { category: "Comic", description:"american pop culture", rangeOfPrice: [10, 9.9, 12] },
        { category: "Boardgames", description:"european table top games", rangeOfPrice: [20, 15.5, 50] }
      ],
      listOfItemsFiltrados: [],
      isFiltered: false
    }
    this.filtratPorDescripcion = this.filtratPorDescripcion.bind(this)
    this.filtrarPorManga = this.filtrarPorManga.bind(this)
    this.filtrarPorComic = this.filtrarPorComic.bind(this)
    this.mostrarTodo = this.mostrarTodo.bind(this)
  }
  componentDidMount(){
    const { listOfItemsOriginal } = this.state
    this.setState({
      listOfItemsFiltrados: [...listOfItemsOriginal]
    }, () => {
      console.log("listOfItemsFiltrados", this.state.listOfItemsFiltrados)
    })
  }
  filtrarPorManga(){
    const { listOfItemsFiltrados } = this.state
    const itemsFiltrados = listOfItemsFiltrados.filter(item => item.category === manga )
    this.setState({
      listOfItemsFiltrados: itemsFiltrados,
      isFiltered: true
    })
  }
  filtrarPorComic(){
    const { listOfItemsFiltrados } = this.state
    const itemsFiltrados = listOfItemsFiltrados.filter(item => item.category === comic )
    this.setState({
      listOfItemsFiltrados: itemsFiltrados,
      isFiltered: true
    })
  }
  mostrarTodo(){
    const { listOfItemsOriginal } = this.state
    this.setState({
      listOfItemsFiltrados: [...listOfItemsOriginal]
    })
  }
  filtratPorDescripcion(e) {
    const valorInput = e.target.value
    const { listOfItemsFiltrados } = this.state
    const itemsFiltrados = listOfItemsFiltrados.filter( item => item.description.includes(valorInput) )
    this.setState({
      listOfItemsFiltrados: [...itemsFiltrados]
    })
  }
  render() {
    return (
      <div className="App">
        <input type='text' placeholder='Search' onChange={this.filtratPorDescripcion} />
        <button onClick={this.filtrarPorManga} >Filtrar Manga</button>
        <button onClick={this.filtrarPorComic} >Filtrar Comic</button>
        {
          this.state.isFiltered && <button onClick={this.mostrarTodo} >Mostrar Todo</button>
        }
        <ItemList items={this.state.listOfItemsFiltrados}/>
      </div>
    );
  }
}

export default App;
