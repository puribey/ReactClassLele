import React, { Component } from 'react'

export default class Result extends Component {
    render() {
        const { resultado } = this.props
        return(
            <h2>The Result is: { resultado }</h2>
        )
    }
}