import React, { Component } from 'react'

 class Counter extends Component {
      
    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <p>{this.props.email}</p>
                <p>{this.props.address}</p>
                
            </div>
        )
    }
}
export default Counter
