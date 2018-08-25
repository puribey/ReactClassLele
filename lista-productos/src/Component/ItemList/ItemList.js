import React, { Component } from 'react';
import { Item } from '../index'

export default class ItemList extends Component {
    constructor(props) {
        super(props)
        console.log(this.props)
        console.table(this.props)
        this.state = {}
    }
    render() {
        const itemsMapeados = this.props.items.map((item, index) => {
          return (
            <Item key={index} itemMapeado={item} />
          )
        })
        return (
            <div>
                {itemsMapeados}
            </div>
        )
        
    }
}