import React, { Component } from 'react';

class City extends Component{
  render() {
    return(
      <div>{this.props.city.name}</div>
    )
  };
}


export default City;
