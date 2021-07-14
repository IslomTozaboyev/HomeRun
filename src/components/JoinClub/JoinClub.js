import React, { Component } from 'react';
import "./JoinClub.css"

export default  class JoinClub extends Component{
    render() {
        return <div id="Pricing">
            {this.props.children}
        </div>
    }
}

