import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { changeActiveCity } from '../actions/index';

class City extends Component{
  render() {
    return(
      <div onClick={() => this.props.changeActiveCity(this.props.city)}>
        {this.props.city.name}
      </div>
    )
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(
    { changeActiveCity: changeActiveCity },
    dispatch
  )
}

export default connect(null, mapDispatchToProps)(City);
