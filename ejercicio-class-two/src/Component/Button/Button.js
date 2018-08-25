import React, { Component } from 'react'
 
export default class Button extends Component {
    render() {
        const { handleClick } = this.props
        return (
             <button onClick={ handleClick } className="btn-style">[+]</button>
        )
    }
}