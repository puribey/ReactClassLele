import React, { Component } from 'react'
 
export default class Button extends Component {
    constructor(props) {
        super(props)
        this.state = { counter: 10 }
    }
    render() {
        // const { counter } = this.state
        return (
             <button>{ this.state.counter }</button>
             //<button> {counter} </button>
        )
    }
}