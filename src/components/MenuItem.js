
import React, { Component } from 'react';

class MenuItem extends Component {
  render() {
    return (
      <div className="dish">
        <h3>{this.props.dish.name}</h3>
        <p>
          <b>{this.props.dish.category}.  </b>
          {this.props.dish.description}.   
          <i>   ${this.props.dish.price.toFixed(2)}</i>
        </p>
      </div>
    );
  }
}

export default MenuItem;
